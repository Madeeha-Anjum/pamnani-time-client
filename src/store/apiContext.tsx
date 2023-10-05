import Api from "@/api/Api";
import Username from "@/models/Username";
import { createContext } from "react";

type InterfaceMenuContext = {
  getAllUsernames: () => Promise<Username[]>;
};

const ApiContext = createContext<InterfaceMenuContext>(
  {} as InterfaceMenuContext
);

type InterfaceMenuProvider = {
  children: React.ReactNode;
};

const ApiProvider: React.FC<InterfaceMenuProvider> = ({ children }) => {
  const getAllUsernames = async () => {
    const response = await Api.getAllUsernames();
    return response.data;
  };

  return (
    <ApiContext.Provider
      value={{
        getAllUsernames,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
