function circumference(r,p) {
    return 2*p*r;
}

var cir_circle = circumference.bind(null, [p=3.141592]);
console.log(cir_circle(20));