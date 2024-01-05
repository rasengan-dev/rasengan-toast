import Toast from "../entities/toast.js";
import { ToastActionType } from "../types";

/**
 * This action adds a toast to the toast reducer
 * @param toast An instance of the Toast class
 * @returns 
 */
export const addToast = (toast: Toast) => ({
  type: ToastActionType.ADD_TOAST,
  payload: toast,
})

/**
 * This action removes a toast from the toast reducer
 * @param id The id of the toast
 * @returns 
 */
export const removeToast = (id: number) => ({
  type: ToastActionType.REMOVE_TOAST,
  payload: id,
})

/**
 * This action updates a toast from the toast reducer
 * @param toast An instance of the Toast class
 * @returns 
 */
export const updateToast = (toast: Toast) => ({
  type: ToastActionType.UPDATE_TOAST,
  payload: toast,
})