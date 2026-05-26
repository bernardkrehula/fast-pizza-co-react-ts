export type CartItem = {
  pizzaId: string;
  name: string;
  unitPrice: number;
  quantity: number;
  totalUnitPrice: number;
  addIngredients: [];
  removeIngredients: [];
};
