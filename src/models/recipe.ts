import Autor from "./autor";
import Category from "./category";

export default interface Recipe {
    id: number;
    autor: Autor | null;
    title: string ;
    description: string ;
    ingredients: string ;
    preparationTime: number;
    revenue: number;
    category: Category | null;
    icon: Blob | null;

}