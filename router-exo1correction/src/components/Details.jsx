import React from 'react';
import { useParams } from 'react-router-dom';
import data from './../json/data.json'

export default function Details() {
    const {id} = useParams();
    // console.log(`Params => ${id}`);
    const product = data[id];
    console.dir(product);
    // const id = useParams();
    // console.dir(id);

    return (
        <div className='h-screen w-screen flex justify-center items-center bg-green-100'>
            <div className='h-[50%] w-[60%] shadow-2xl flex flex-col justify-around p-6 '>
                <p><span className='font-semibold text-lg'>Nom : </span> {product.nom}</p>
                <p><span className='font-semibold text-lg'>Description : </span> {product.description}</p>
                <p><span className='font-semibold text-lg'>Prix : </span> {product.prix}€</p>
                <p><span className='font-semibold text-lg'>Categorie : </span> {product.categorie}</p>
                <p><span className='font-semibold text-lg'>Quantité : </span> {product.quantite_en_stock}</p>
                <p><span className='font-semibold text-lg'>Couleur : </span> {product.couleur}</p>
                <p><span className='font-semibold text-lg'>Poids : </span> {product.poids}</p>
                <p><span className='font-semibold text-lg'>Dimensions : </span> {product.dimensions}</p>
            </div>
        </div>
    )
}
