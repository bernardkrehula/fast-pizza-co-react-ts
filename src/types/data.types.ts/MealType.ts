export type MealType = {
    id: number;
    name: string;
    unitPrice: number;
    imageUrl: string;
    ingredients: string[];
    soldOut: boolean;
}