"use client";

import {
    Dispatch,
    createContext,
    SetStateAction,
    useContext,
    useState,
} from "react";

interface GlobalContext {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContext | null>(null);

interface GlobalContextProviderProps {
    children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const [value, setValue] = useState<string>("value");

    return (
        <GlobalContext.Provider value={{ value, setValue }}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error(
            `useGlobalContext must be used within GlobalContextProvider`
        );
    }
    return context;
};

export { GlobalContextProvider, useGlobalContext };
