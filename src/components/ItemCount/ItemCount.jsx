import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <button class="btnProducto" onClick={decrementar}> - </button>
                <p class="contador"> {contador} </p>
                <button class="btnProducto" onClick={incrementar}> + </button>
            </div>
            <button class="btnProducto" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
        </>
    )
}



export default ItemCount