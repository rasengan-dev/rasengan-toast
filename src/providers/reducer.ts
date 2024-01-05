import { ToastAction, ToastActionType, ToastState } from "../types/index.js";

/**
 * This function is the reducer of the toast context that handles the actions
 * @param state Toast state
 * @param action Toast action
 * @returns The new state of the toast reducer
 */
export default function reducer(state: ToastState, action: ToastAction) {
  const prevState = { ...state };

  // Evaluate the action type
  switch (action.type) {
    case ToastActionType.ADD_TOAST: {
      prevState.toasts.push(action.payload);

      return prevState;
    }
    case ToastActionType.UPDATE_TOAST: {
      const index = prevState.toasts.findIndex(
        (toast) => toast.id === action.payload.id
      );

      prevState.toasts[index] = action.payload;

      return prevState;
    }
    default:
      return state;
  }
}
