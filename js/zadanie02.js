function concatArray(array1, array2){
    let newArray = [];
    newArray = array1;
    for(let i = 0; i < array2.length; i++){
        newArray.push(array2[i]);
    }
    return newArray;
}

concatArray([1,3],[3,5]); // zwróci [1,3,3,5]
