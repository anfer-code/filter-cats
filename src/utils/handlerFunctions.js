import { useContext} from 'react'
import { Context } from '../App';

function compareNames(a,b) {
    if(a.name < b.name){
        return -1
    } else if(a.name > b.name){
        return 1
    }
    return 0
}

function compareDna(a,b) {
    if(a.dna < b.dna){
        return -1
    } else if(a.dna > b.dna){
        return 1
    }
    return 0
}

function useHandlers() {
    const {
        renderArray, 
        filterArray,
        setFilterArray
    } = useContext(Context)

    const handlerNameFilter = () => {
        if(renderArray === filterArray){
            let newArr = [...renderArray]
            newArr.sort(compareNames)
            setFilterArray(newArr)
        } else {
            setFilterArray(renderArray)
        }
    }

    const handlerIdFilter = () => {
        if(renderArray === filterArray){
            let newArr = [...renderArray]
            newArr.sort(compareDna)
            setFilterArray(newArr)
        } else {
            setFilterArray(renderArray)
        }
    }

    const handlerButtonBox = (textButton) => {
        const newArr = [...renderArray];
        const returnArr = newArr.filter( el => el.attributes[0].value.toLowerCase() === textButton.toLowerCase())
        setFilterArray(returnArr);
    }

    const handlerButtonColor = (textButton) => {
        const newArr = [...renderArray];
        const returnArr = newArr.filter( el => {
            console.log(el.attributes[2].value)
            return el.attributes[2].value.toLowerCase() === textButton.toLowerCase()
        })
        setFilterArray(returnArr);
    }

    return {handlerButtonColor, handlerButtonBox, handlerIdFilter, handlerNameFilter}
}



export { useHandlers }