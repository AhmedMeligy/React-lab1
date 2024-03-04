import React from 'react';
import { products } from './products';
import Card from './card';

export default function Cards() {
    return (
        <div>
            <h1>Cards</h1>
            <div>
            {
                products.map((product)=> {
                    return (
                        <Card {...product}/>
                    )
                })
            }
            </div>
        </div>
    )
}