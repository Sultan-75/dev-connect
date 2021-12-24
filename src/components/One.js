import React from 'react'

var a ;
var b ;
const Sum = (a,b) =>{
    return (a+b);
}

const One = () => {
    return (
        <>
            <h1>Sum is = : {Sum(a=10,b=20)}</h1>
        </>
    )
}

export default One;
