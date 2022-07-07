let employee = {
    details: function() {
        return this.name + " " + this.id;
    }
}
var emp1 = {
    name: "Jitender",
    id: "102023",
}
var emp2 = {
    name: "Asis",
    id: "203040",
}
console.log( employee.details.call(emp2));
console.log(employee.details.call(emp1));

