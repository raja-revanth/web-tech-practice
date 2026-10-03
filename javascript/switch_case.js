let a=34,b=43,c=9;
console.log("1. Addition");
console.log("2. subtraction");
console.log("3. multiplication");
console.log("4. division");
console.log("5. modulus");
console.log("6. exit");
switch (c)
{ 
    case 1:
        console.log(a+b);
        break;
    case 2:
        console.log(a-b);
        break;
    case 3:
        console.log(a*b);
        break;
    case 4:
        console.log(a/b);
        break;
    case 5:
        console.log(a%b);
        break;
    default :
        console.log("exit the program");
}