const divideArray = (arr) => {
    const subArrays = []
    for (let i = 0; i < arr.length; i += 12) {
        const aux = arr.slice(i, i + 12);
        subArrays.push(aux);
    }
    return subArrays
}

export default divideArray