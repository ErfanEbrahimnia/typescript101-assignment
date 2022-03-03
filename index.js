
const studentJSON = '{ "name": "Sara", "age": 23, "gender": "Female", "department": "History", "car": "Honda" }';

function safeParseJSON(json) {
    try {
        return JSON.parse(json);
    } catch {
        throw new Error(`JSON couldn't be parsed`);
    }
}

class Student {
    name;

    age;

    gender;

    department;

    car;

    constructor(json) {
        const data = safeParseJSON(json);

        this.name = data.name;
        this.age = data.age;
        this.gender = data.gender;
        this.department = data.department;
        this.car = data.car;
    }
}

const student = new Student(studentJSON);

console.log(student);
