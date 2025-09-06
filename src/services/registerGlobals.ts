/**
 * Registers global helper functions for error handling across the API.
 *
 * ---
 * ⚠️ **Important Note for Contributors**
 *
 * Do **not** modify this file unless the change has been **reviewed and approved
 * by multiple team members**. These global helpers are critical to maintaining
 * consistent error handling across the entire API. Modifications should be done
 * with **parsimony**.
 *
 * ---
 *
 * @function registerGlobals
 * @returns {void} No return value; side-effect is attaching error shortcuts to `global`.
 */
const registerGlobals = (): void => {
  global.ApiError = (statusOrMessage: number | string, message?: string) => {
    const hasStatus = typeof statusOrMessage === 'number';
    const error = new Error(hasStatus ? message : statusOrMessage) as TApiError;
    error.status = hasStatus ? statusOrMessage : 400;
    return error;
  };

  global.CrudError = (statusOrMessage: number | string, message?: string) => {
    const hasStatus = typeof statusOrMessage === 'number';
    const error = new Error(
      hasStatus ? message : statusOrMessage
    ) as TCrudError;
    error.status = hasStatus ? statusOrMessage : 400;
    return error;
  };

  global.Unauthorized = (
    type: 'user' | 'person' | 'yousign' | 'ext' = 'user'
  ) => ApiError(401, `${type} authentication required`);

  global.Forbidden = () => ApiError(403);

  global.isApiError = (error: any): error is TApiError =>
    error &&
    error instanceof Error &&
    typeof (error as any).status === 'number';
};

export default registerGlobals;
