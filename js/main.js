function degreeFunction(num,degree){

    if(degree === 0)
    return 1;

    else 
    return num * degreeFunction(num,degree - 1);
}

console.log(degreeFunction(7,7));