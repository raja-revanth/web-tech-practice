const person={
    id:1,
    name:"revanth",
    course:"python"
};
const address=
{
    area:"rajiv nagar",
    city:"ongole",
    state:"AP"
};
const fullDetails={
    ...address,...address
}
console.log(person);
console.log(address);
console.log(fullDetails);
