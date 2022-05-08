import Autor from "./autor";
import Category from "./category";

export default interface Recipe {

    nomeReceita: string;
    tempoPreparo: number;
    unidadeTempo: string;
    porcoes: string;
    quantidade: number;
    ingrediente: string;
    unidadeIngrediente: string;
    categoria: string;
    modoPreparo: string;
    imagem: Blob | null
}