let nums=[1,2,3,4,5,45,6,7];
console.log("using forEach")
nums.forEach((num)=>console.log(num));
console.log("using maps");
let mapeddata=nums.map((num)=>
{
    if(num%2==0)
    {
        return(num);
    }
});
console.log(mapeddata)
console.log("using filter")
let filterdata=nums.filter((num)=>{
    if(num%2!=0)
        return num;
});
console.log(filterdata);