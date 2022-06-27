function Person(name) {
    this.name=name;
}

Person.prototype.print_name= function () {
    return this.name;
}

function Teacher(name,subject) {
     Person.call(this, name);        // this is acting as a super()  
     this.subject=subject;
}

Teacher.prototype.print_subject= function () {
    return this.subject;
}
Object.setPrototypeOf(Teacher.prototype,Person.prototype);         // we are defining iheritance here
const e = new Teacher(`jit`, `JavaScript`);
console.log(e.print_name() + ` is teaching ` + e.print_subject());                    