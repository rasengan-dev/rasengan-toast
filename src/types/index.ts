// Context types

import { ComponentProps } from "react";
import Toast from "../entities/toast.js";

/**
 * Context object that contains the methods to show a toast message
 */
export interface ToastContextData {
  toast: ToastHandler;
}

/**
 * Type of the state of the toast reducer
 */
export type ToastState = {
  toasts: Array<Toast>;
  defaultConfig: ToastConfigType | null;
};

/**
 * Type of the action of the toast reducer
 */
export type ToastAction = {
  type: string;
  payload: any;
};

/**
 * List of the toast actions
 */
export const ToastActionType = {
  ADD_TOAST: "ADD_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
} as const;

/**
 * Type of the toast action
 */
export type ToastActionType =
  (typeof ToastActionType)[keyof typeof ToastActionType];

/**
 * Type of the config object that contains the toast configuration
 */
export type ToastConfigType = {
  position?: ToastPosition;
  duration?: number;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  pauseOnFocusLoss?: boolean;
  newestOnTop?: boolean;
};

/**
 * List of the toast positions
 */
export const ToastPosition = {
  TOP_LEFT: "top-left",
  TOP_CENTER: "top-center",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_CENTER: "bottom-center",
  BOTTOM_RIGHT: "bottom-right",
} as const;

/**
 * Type of the toast position
 */
export type ToastPosition = (typeof ToastPosition)[keyof typeof ToastPosition];

/**
 * List of the toast types
 */
export const ToastType = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
} as const;

/**
 * Type of the toast type
 */
export type ToastType = (typeof ToastType)[keyof typeof ToastType];

/**
 * Toast object that contains the methods to show a toast message
 */
export type ToastHandler = {
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
  info: (message: string) => void;
};

// Hooks types

// Components types

export type ProviderProps = {
  children: React.ReactNode;
  options: ToastConfigType;
  className?: ComponentProps<"div">["className"];
  style?: ComponentProps<"div">["style"];
  toastClassName?: ComponentProps<"div">["className"];
};

/**
 * Type of the toast component
 */
export type ToastProps = {
  data: Toast;
};

/**
 * Type of the toast container component
 */
export type ToastContainerProps = {
  className?: ComponentProps<"div">["className"];
  style?: ComponentProps<"div">["style"];
};
