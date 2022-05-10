import Autor from "./autor";
import Category from "./category";
import Ingrediente from "./ingrediente";

export default interface Recipe {

    nomeReceita: string;
    tempoPreparo: number;
    unidadeTempo: string;
    porcoes: string;
    ingrediente: Ingrediente[];

    categoria: string;
    modoPreparo: string;
    imagem: Blob | null
}

