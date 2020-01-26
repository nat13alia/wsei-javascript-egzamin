function bigestSumOfTwoElements(array){
    if(array.length == 0){
        return false;
    } else if (array.length == 1){
        return array[0];
    } else {
        array.sort((a,b) => a - b);
        array.reverse();
        return array[0]+array[1];
        
    }
}

bigestSumOfTwoElements([1,2,3,4]) // => 7
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23,45,17,12]) // => 68
