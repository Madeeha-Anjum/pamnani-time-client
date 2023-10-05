"use client";
import Api from "@/api/Api";
import UserCredentials from "@/models/UserCredentials";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import toast from "react-hot-toast";
import TimeeyError from "@/models/TimeeyError";
import ClockInRequest from "@/models/ClockInRequest";
import ClockOutRequest from "@/models/ClockOutRequest";

const parseUserCredentialsCookie = (
  userCredentialsCookie: string | undefined
) => {
  if (userCredentialsCookie === undefined) {
    return null;
  }

  return JSON.parse(userCredentialsCookie) as UserCredentials;
};

const USER_HISTORY_QUERY_KEY = "userHistory";

export default function useTimeeyQuery() {
  const userCredentials = parseUserCredentialsCookie(
    getCookie("user-credentials")
  );

  const queryClient = useQueryClient();

  const toastApiErrors = (error: unknown) => {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.errors);
      if (error.response?.data?.errors) {
        error.response?.data?.errors.forEach((error: TimeeyError) => {
          if (error.code === 401) {
            toast.error("Unauthorized. Please login again.");
            return;
          }
          toast.error(error.message);
        });
        return;
      }
    }
  };

  const userHistoryQuery = useQuery({
    queryKey: [USER_HISTORY_QUERY_KEY],
    queryFn: () => Api.getUserHistory({ userCredentials }),
    onSuccess: () => {
      toast.success("Fetched user history");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to fetch user history");
      toastApiErrors(error);
    },
  });

  const mutations = {
    createClockInRecord: useMutation({
      mutationFn: (clockInRequest: ClockInRequest) =>
        Api.createClockInRecord({ userCredentials, clockInRequest }),
      onMutate: async () => {
        const toastId = toast.loading("Clocking in...");
        return { toastId };
      },
      onSuccess: async (data, variables, context) => {
        await queryClient.invalidateQueries({
          queryKey: [USER_HISTORY_QUERY_KEY],
        });
        toast.success("Clocked in successfully", { id: context?.toastId });
      },
      onError: async (error, variables, context) => {
        toast.error("Failed to clock in", { id: context?.toastId });
        toastApiErrors(error);
      },
    }),
    createClockOutRecord: useMutation({
      mutationFn: (clockOutRequest: ClockOutRequest) =>
        Api.createClockOutRecord({ userCredentials, clockOutRequest }),
      onMutate: async () => {
        const toastId = toast.loading("Clocking out...");
        return { toastId };
      },
      onSuccess: async (data, variables, context) => {
        await queryClient.invalidateQueries({
          queryKey: [USER_HISTORY_QUERY_KEY],
        });
        toast.success("Clocked out successfully", { id: context?.toastId });
      },
      onError: async (error, variables, context) => {
        toast.error("Failed to clock out", { id: context?.toastId });
        toastApiErrors(error);
      },
    }),
  };

  return { userHistoryQuery, mutations };
}
