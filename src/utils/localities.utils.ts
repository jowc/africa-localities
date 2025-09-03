export const ServerResponse = <T> (status = 200, data: T, message?: string) => {
  return {
    status,
    data,
    message: message ?? null,
  };
};
