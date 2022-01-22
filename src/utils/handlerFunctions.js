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
        setFilterArray
    } = useContext(Context)

    const handlerNameFilter = () => {
        let newArr = [...renderArray]
            newArr.sort(compareNames)
            setFilterArray(newArr)
    }

    const handlerIdFilter = () => {
        let newArr = [...renderArray]
            newArr.sort(compareDna)
            setFilterArray(newArr)
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