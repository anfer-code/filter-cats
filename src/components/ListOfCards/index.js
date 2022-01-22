import React, { useContext } from 'react';
import Card from '../Card'
import { Context } from '../../App'
import orderData from '../../utils/orderData'
import './ListOfCards.css'

export default function ListOfCards() {

    const {
        filterArray,
    } = useContext(Context)

    return (
        <div className="ListOfCards__Grid">
            {filterArray.map(el => {
                const elem = orderData(el.attributes, el)


                return <Card 
                box={elem[0].value} 
                color={elem[1].value}
                dateBirth={elem[2].value}
                energy={elem[3].value.toFixed(2)}
                level={elem[4].value.toFixed(2)}
                health={elem[5].value.toFixed(2)}
                {...el} 
                key={el.dna} />
            })}
        </div>
    );
}