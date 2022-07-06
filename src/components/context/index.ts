import { IAuth } from './IAuth';
import { createContext, SetStateAction, Dispatch } from "react";

// export const AuthContext = createContext({ isAuth: false , setIsAuth: Dispatch<SetStateAction<boolean>>});
export const AuthContext = createContext({} as IAuth);