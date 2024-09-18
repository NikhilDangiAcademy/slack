"use client";
import React, { createContext, useContext, useState } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setData] = useState(null);
  return (
    <Provider store={store}>
      <MyContext.Provider value={{ data, setData }}>
        {children}
      </MyContext.Provider>
    </Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
