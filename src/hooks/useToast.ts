import { useContext } from "react";
import ToastContext from "../contexts/toastContext.js";

/**
 * This function is used to get the toast handler object
 * @returns A toast handler object
 */
export default function useToast() {
  // Context
  const { toast } = useContext(ToastContext);

  return toast;
}
