// 1
const add = (a, b) => {
    return (a + b)
}
console.log(add(2, 5))

// 2
const checkEven = (num) => {
    if (num % 2 == 0) {
        console.log("even")
    } else {
        console.log("odd")
    }

}
checkEven(5)

// 3
const Greet = (name) => {
    console.log("Hello" + " " + name)
}
Greet("Sohaye")

// 4
const Calculate = (a, b, operation) => {
    console.log(a + operation + b)
}
Calculate(2, 5, "+")

// 5
const numbers = [1, 2, 3, 4, 5];

const double = numbers.map(number => number * 2)

console.log(double)

const even = numbers.filter(num => num % 2 == 0)
console.log(even)

const sum = numbers.reduce((sum, num) => sum + num)
console.log(sum)

// 6
function fetchData(callback) {
    console.log("Fetching data...");

    // simulate API delay of 2 seconds
    setTimeout(() => {
        const users = ["Zirwa", "Ali", "Sara"];
        callback(users);
    }, 2000);
}

// callback function to handle data
function handleData(users) {
    console.log("Data received: " + users.join(", "));
}

// call the function
fetchData(handleData);

// 7
const performTask = (taskName, onSuccess, onError) => {
    taskName ? onSuccess(`Task Completed : ${taskName}`) : onError("task is missing")
}

performTask("BackUp database", (msg) => console.log("✅ " + msg), (err) => console.log("❌ " + err))