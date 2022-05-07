import Category from "../models/category";
import Recipe from "../models/recipe";

const categories: Category[] = [
    {
        id: 1,
        name: "Bolo",
        icon: null
    },
    {
        id: 2,
        name: "Salgado",
        icon: null
    },
];

const recipes: Recipe[] = [
    { 
        id: 1,
        autor: null,
        title: "Bolo de cenoura",
        description: "Bolo de cenoura com recheio de chocolate",
        ingredients: "Cenoura, chocolate, farinha, ovo, leite",
        preparationTime: 30,
        revenue: 10,
        category: categories[0],
        icon: null
    },
    {
        id: 2,
        autor: null,
        title: "Bolo de chocolate",
        description: "Bolo de chocolate com recheio de chocolate",
        ingredients: "Chocolate, farinha, ovo, leite",
        preparationTime: 30,
        revenue: 10,
        category: categories[0],
        icon: null
    },
    {
        id: 3,
        autor: null,
        title: "Bolo de morango",
        description: "Bolo de morango com recheio de chocolate",
        ingredients: "Morango, chocolate, farinha, ovo, leite",
        preparationTime: 30,
        revenue: 10,
        category: categories[1],
        icon: null
    }
];

