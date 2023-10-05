"use client";

import ClockInRequest from "@/models/ClockInRequest";
import ClockOutRequest from "@/models/ClockOutRequest";
import HistoryRecord from "@/models/HistoryRecord";
import UserCredentials from "@/models/UserCredentials";
import Username from "@/models/Username";
import getTimeeyConfig from "@/timeeyConfig";
import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: getTimeeyConfig().serverUrl,
});

const createAuthorizationHeader = (userCredentials: UserCredentials) => {
  return `Basic ${btoa(
    `${userCredentials.username}:${userCredentials.password}`
  )}`;
};

const setAuthorizationHeader = (userCredentials: UserCredentials | null) => {
  if (!userCredentials) {
    axiosInstance.defaults.headers.common["Authorization"] = null;
    return;
  }

  axiosInstance.defaults.headers.common["Authorization"] =
    createAuthorizationHeader(userCredentials);
};

class Api {
  static async getAllUsernames(): Promise<AxiosResponse<Username[]>> {
    return axiosInstance.get("/users");
  }

  static async verifyCredentials(data: {
    userCredentials: UserCredentials;
  }): Promise<AxiosResponse<Username>> {
    setAuthorizationHeader(data.userCredentials);
    return axiosInstance.post("/verify-credentials");
  }

  static async getUserHistory(data: {
    userCredentials: UserCredentials | null;
  }): Promise<
    AxiosResponse<{
      clockInRecord: HistoryRecord;
      userTimesheet: HistoryRecord[];
    }>
  > {
    setAuthorizationHeader(data.userCredentials);
    return axiosInstance.get("/user/history");
  }

  static async createClockInRecord(data: {
    userCredentials: UserCredentials | null;
    clockInRequest: ClockInRequest;
  }): Promise<AxiosResponse<HistoryRecord>> {
    setAuthorizationHeader(data.userCredentials);
    return axiosInstance.post("/user/clock-in", data.clockInRequest);
  }

  static async createClockOutRecord(data: {
    userCredentials: UserCredentials | null;
    clockOutRequest: ClockOutRequest;
  }): Promise<AxiosResponse<HistoryRecord>> {
    setAuthorizationHeader(data.userCredentials);
    return axiosInstance.post("/user/clock-out", data.clockOutRequest);
  }
}

export default Api;
