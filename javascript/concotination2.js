const person={
    id:1,
    name:"revanth",
    course:"python"
};
console.log(person.id);
console.log(person.name);
console.log(person.course)


console.log(person["name"]);
person.course ="java"
console.log(person.course)
person["course"]="C"
console.log(person.course)