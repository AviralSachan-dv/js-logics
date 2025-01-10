const data = [
    { name: "ram", age: 21, state: "MP" },
    { name: "shyam", age: 18, state: "MP" },
    { name: "hera lal", age: 28, state: "UP" },
];

const state ="MP";
const age = 22;

const result = data.filter((item) => {
    if (item.age >= age && item.state === state|| state === "") {
        return true;
    }
    
});

console.log(result);
