
//fetching value from html to javascript
let countValue=document.querySelector('#counter');

let decrement = ()=>{
    //gettting the value from UI nd converting it from string to integer
    let value=parseInt(countValue.innerText);
    //update the value
    value=value-1;
    //set updated value back to ui 
    countValue.innerText=value;
};

let increment = ()=>{
    let value=parseInt(countValue.innerText);
    value=value+1;
    countValue.innerText=value;
};