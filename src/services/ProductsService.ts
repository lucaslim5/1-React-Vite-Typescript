import { Product } from "../types/Products";

const BASE_URL= 'https://fakestoreapi.com';

export const ProductService= {
    //declaramos nuestros metodos

    //fetch permite realizar solicitudes HTTP a un servidor
    //Async/Await para manejar promesas
    //Async para declarar una fc asincrona,devuelve una promesa
    //Await lo uso dentro una fc asincrona para pausar la ejecucion de la fc y espera promesa(resuelta/rechazada)

    getProducts:async (): Promise<Product[]> => {
        const response= await fetch(`${BASE_URL}/products`);
        const data= await response.json();

        return data;
    },
    
    getProduct:async (id:number): Promise<Product> => {
        const response= await fetch(`${BASE_URL}/products/${id}`);
        const data= await response.json();
        return data;
    },

    createProduct:async (product:Product):Promise<Product> => {
        const response= await fetch(`${BASE_URL}/products`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data= await response.json();
        return data;
    },

    updateProduct:async (id:number, product:Product):Promise<Product> => {
        const response= await fetch(`${BASE_URL}/products/${id}` ,{
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data= await response.json();
        return data;
    },

    deleteProduct:async (id:number):Promise<void> => {
        await fetch(`${BASE_URL}/products/${id}` ,{
            method: "DELETE"
        });

    }
}