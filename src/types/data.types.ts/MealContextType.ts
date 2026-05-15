export type MealContextType = {
  state: 
    Array<{
      id: string;
      name: string;
      amount: number;
      unitPrice: number;
    }>;
  dispatch: React.Dispatch<any>;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  totalPrice: number;
  totalAmount: number;
};
