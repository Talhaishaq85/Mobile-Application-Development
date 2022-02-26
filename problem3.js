var num="23617";
var l=num.length;
var arr=[];
for (let i = 0; i < l; i++) {
    arr.push(num[i]);
  }
const reducer = function (pv,cv){
  
  return pv+cv;


}

const sum=arr.filter((x)=>{return x%2==0;}).reduce(reducer);


console.log(sum);

