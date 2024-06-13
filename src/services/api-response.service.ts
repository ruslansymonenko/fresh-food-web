export interface IApiResponseStatus<T> {
  status: boolean;
  message: string;
  data: T | null;
}

export class ApiResponse {
  sendStatus = <T>({ status, message, data }: IApiResponseStatus<T>): IApiResponseStatus<T> => {
    return {
      status: status,
      message: message,
      data: data,
    };
  };
}
