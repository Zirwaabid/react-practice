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


// // 2
const products = {
    id: 101,
    name: "Laptop",
    price: 1200,
    brand: "HP",
    stock: 5
};
console.log(Object.keys(products))
console.log(Object.values(products))
console.log(Object.values(products).length);

// // 3
const student = {
    name: "Aisha",
    marks: { math: 80, science: 92, english: 75 }
};
for (const subject in student.marks) {

    console.log(subject + " ", student.marks[subject])

}
const marksArray = Object.values(student.marks)
const Sum = marksArray.reduce((sum, marks) => sum + marks)
const averageMarks = Sum / marksArray.length
console.log(averageMarks)

// 4
const employees = [
    { id: 1, name: "Zara", department: "Tech", salary: 60000 },
    { id: 2, name: "Ali", department: "HR", salary: 40000 },
    { id: 3, name: "Bilal", department: "Tech", salary: 55000 },
];
(employees.map((employee) =>
    console.log(employee.name)
))

const HrEmplyee = employees.find(emp => emp.department === "HR")
console.log(HrEmplyee)

const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0)
console.log(totalSalary)

const empName = employees.map((emp) =>
    emp.name
)
console.log(empName)

// 5
const order = {
    id: 999,
    customer: {
        name: "Zirwa Abid",
        address: {
            city: "Lahore",
            country: "Pakistan"
        }
    },
    items: [
        { name: "Book", price: 500 },
        { name: "Pen", price: 100 }
    ]
};
const customerCities = order.customer.address.city
console.log(customerCities)

const ItemsPrices = order.items.map((item) => {
    console.log(item.name + " " + item.price)
})

const totalPrice = order.items.reduce((sum, item) => sum + item.price, 0);
console.log(totalPrice)

order.items.push({ name: "Notebook", price: 300 });
console.log(order)

// 6
const userData = [
    ["name", "Zirwa"],
    ["age", 21],
    ["country", "Pakistan"]
];
const user = Object.fromEntries(userData)
console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user));

// 7

const employees1 = [
    { id: 1, name: "Zara", department: "Tech", salary: 60000 },
    { id: 2, name: "Ali", department: "HR", salary: 40000 },
    { id: 3, name: "Bilal", department: "Tech", salary: 55000 },
];

function getEmployeeWithHighSalary(employees1, minSalary) {
    const emp = (employees1.filter(emp =>
        emp.salary > minSalary
    ))
    console.log(emp)
}
getEmployeeWithHighSalary(employees1, 50000)