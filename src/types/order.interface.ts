export enum OrderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  SHIPPED = 'SHIPPED',
  DONE = 'DONE',
}

export interface IOrder {
  id: string;
  created_at: string;
  updated_at: string;
  order_status: OrderStatus;
  user_id: string;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  quantity: number;
  price: number;
  productId: string;
}
