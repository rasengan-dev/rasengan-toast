import { useReducer } from "react";
import ToastContext from "../contexts/toastContext";
import {
  ProviderProps,
  ToastConfigType,
  ToastState,
  ToastType,
} from "../types/index.js";
import reducer from "./reducer.js";
import Toast from "../entities/toast.js";
import { generateId } from "../utils/index.js";
import { addToast } from "./actions.js";
import ToastContainer from "../components/ToastContainer";

// Default state
const initialState: ToastState = {
  toasts: [],
  defaultConfig: null,
};

// Initializer function of the state
const init = (options: ToastConfigType) => {
  return () => {
    return {
      toasts: [],
      defaultConfig: {
        position: options.position || "bottom-right",
        duration: options.duration || 5000,
        autoClose: options.autoClose || true,
        hideProgressBar: options.hideProgressBar || false,
        closeOnClick: options.closeOnClick || true,
        pauseOnHover: options.pauseOnHover || true,
        pauseOnFocusLoss: options.pauseOnFocusLoss || true,
        newestOnTop: options.newestOnTop || false,
      } as ToastConfigType,
    };
  };
};

/**
 * This function is the provider of the toast context
 * @param param0 Props of the provider
 * @returns
 */
export default function ToastProvider({
  children,
  options,
  className,
  style,
  toastClassName,
}: ProviderProps) {
  // State
  const [state, dispatch] = useReducer(reducer, initialState, init(options));

  // Handlers

  /**
   * This function displays a success toast
   * @param message Message to display
   */
  const success = (message: string, options?: ToastConfigType) => {
    // Get the config
    const config = options || state.defaultConfig;

    // Create the toast
    const toast = new Toast({
      id: generateId(),
      message,
      type: ToastType.SUCCESS,
      config,
      className: toastClassName,
    });

    // Dispatch the addToast action
    dispatch(addToast(toast));
  };

  /**
   * This function displays an info toast
   * @param message Message to display
   */
  const info = (message: string, options?: ToastConfigType) => {
    // Get the config
    const config = options || state.defaultConfig;

    // Create the toast
    const toast = new Toast({
      id: generateId(),
      message,
      type: ToastType.INFO,
      config,
      className: toastClassName,
    });

    // Dispatch the addToast action
    dispatch(addToast(toast));
  };

  /**
   * This function displays a warning toast
   * @param message Message to display
   */
  const warning = (message: string, options?: ToastConfigType) => {
    // Get the config
    const config = options || state.defaultConfig;

    // Create the toast
    const toast = new Toast({
      id: generateId(),
      message,
      type: ToastType.WARNING,
      config,
      className: toastClassName,
    });

    // Dispatch the addToast action
    dispatch(addToast(toast));
  };

  /**
   * This function displays an error toast
   * @param message Message to display
   */
  const error = (message: string, options?: ToastConfigType) => {
    // Get the config
    const config = options || state.defaultConfig;

    // Create the toast
    const toast = new Toast({
      id: generateId(),
      message,
      type: ToastType.ERROR,
      config,
      className: toastClassName,
    });

    // Dispatch the addToast action
    dispatch(addToast(toast));
  };

  // Value of the context
  const contextValue = {
    toast: {
      success,
      info,
      warning,
      error,
    },
  };
  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      <ToastContainer className={className} style={style} />
    </ToastContext.Provider>
  );
}
