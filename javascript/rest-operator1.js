//traditional function
function sum(arg1,...rest)
{
    let sum= arg1;
    for(i=0;i<rest.length;i++)
    {
        sum=sum+rest[i];
    }
    return(sum);
}
console.log(sum(23,43,54,83,28));
console.log(sum(23,43,54,83,28,56,26,75,24,897,77));
console.log(sum(34,76,34));
