const whiteList = {
    Box: 'Box',
    'Base colour': 'Base colour',
    'Birth date': 'Birth date', 
    Energy: 'Energy',
    'Meow level': 'Meow level',
    Health: 'Health'
}

export default function orderData(arr, firstArray) {
    const elem = arr.filter(firstArray => firstArray.trait_type === whiteList[firstArray.trait_type])

    return elem
}