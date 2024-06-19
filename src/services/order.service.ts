import { IOrder } from '@/types/order.interface';
import { axiosWithAuth } from '@/api/interceptors';
import { IServiceResponse } from '@/types/service.intrfecace';

interface IOrderService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T>;
  getOrders(userId: string): Promise<IServiceResponse<IOrder[] | null>>;
}

export enum OrderRoutes {
  GET_ORDERS = '/order/user-orders',
}

export class OrderService implements IOrderService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T> {
    return {
      status: status,
      message: message,
      data: data,
    };
  }

  public async getOrders(userId: string): Promise<IServiceResponse<IOrder[] | null>> {
    try {
      const { data } = await axiosWithAuth.get<IOrder[]>(OrderRoutes.GET_ORDERS);

      if (data) {
        return this.sendStatus<IOrder[]>(true, 'Orders received', data);
      } else {
        return this.sendStatus<null>(true, 'Orders not received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Orders not received', null);
    }
  }
}

export default new OrderService();
