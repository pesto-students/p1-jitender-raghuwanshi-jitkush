function createStack() {
    var items=[];
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();   
        }
    };
}
const s = createStack();
s.push(10);
s.push(5);
console.log( s.pop());
console.log(s.items);