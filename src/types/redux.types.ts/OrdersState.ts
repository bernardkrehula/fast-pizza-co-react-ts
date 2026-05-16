export type OrdersState = {
  orders: Array<{
    id: string;
    name: string;
    unitPrice: number;
    amount: number;
  }>;
  isLoading: boolean;
  user: string;
};
