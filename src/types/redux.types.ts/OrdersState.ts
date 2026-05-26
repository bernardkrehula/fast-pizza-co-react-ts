export type OrdersState = {
  orders: Array<{
    pizzaId: string;
    name: string;
    unitPrice: number;
    quantity: number;
    totalUnitPrice: number;
    addIngredients: [];
    removeIngredients: [];
  }>;
};
