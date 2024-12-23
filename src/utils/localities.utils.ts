export const ServerResponse = (status = 200, data: any, message?: string) => {
  return {
    status,
    data,
    message: message ?? null,
  }
}
