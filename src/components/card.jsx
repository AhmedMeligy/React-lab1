import React from 'react'

export default function Card(props) {
    let {id, title, description, images, stock} = props;
    return (
            <div key={id} >
                <div>
                    <img src={images[0]} alt="" />
                </div>
                <div className=''>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>Stock: {stock}</p>
                    <input type="text" name="quantity" id="quantity" placeholder='quantity'/>
                </div>
                <button>buy</button>
            </div>
    )
}