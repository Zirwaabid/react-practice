const user = {
    name: "Zirwa",
    age: 21,
    country: "Pakistan",
    skills: ["HTML", "CSS", "React"]
};
user.isActive = true;
user.skills.push("Javascript");
user.age = 22
delete user.country


// 2
const products = {
    id: 101,
    name: "Laptop",
    price: 1200,
    brand: "HP",
    stock: 5
};
console.log(Object.keys(products))
console.log(Object.values(products))
