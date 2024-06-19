import { IPayment } from '@/types/payment.interface';
import { axiosWithAuth } from '@/api/interceptors';
import { IServiceResponse } from '@/types/service.intrfecace';

interface IPaymentService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T>;
  createPayment(): Promise<IServiceResponse<IPayment | null>>;
}

export enum PaymentRoutes {
  CREATE_PAYMENT = '/payment/create',
}

export class PaymentService implements IPaymentService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T> {
    return {
      status: status,
      message: message,
      data: data,
    };
  }

  public async createPayment(): Promise<IServiceResponse<IPayment | null>> {
    try {
      const { data } = await axiosWithAuth.post<IPayment>(PaymentRoutes.CREATE_PAYMENT);

      if (data) {
        return this.sendStatus<IPayment>(true, 'Payment received', data);
      } else {
        return this.sendStatus<null>(true, 'Payment received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Payment not received', null);
    }
  }
}

export default new PaymentService();
