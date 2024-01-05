import { createContext } from "react";
import { ToastContextData } from "../types/index.js";

/**
 * Context object that contains the methods to show a toast message
 */
export default createContext<ToastContextData>({
  toast: {
    success: (_: string) => {},
    error: (_: string) => {},
    warning: (_: string) => {},
    info: (_: string) => {},
  },
} as ToastContextData);
