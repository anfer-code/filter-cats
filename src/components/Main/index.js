import React from 'react';
import ListOfCards from '../ListOfCards';


export default function Main() {

    return (
        <div className="Main">
            <h1>Conoces el nombre? Encuentralo aquí</h1>
            {/* <SearchInput /> */}
            <ListOfCards />
        </div>
    );
}