function dur(name) {
    var a = [
        name,
        this.ani_name, 'makes sound', this.sound].join(' ');
    console.log(a);
}

var ani= [
    { ani_name: 'dog', sound: 'bark' },
    { ani_name: 'cat', sound: 'meow' },
]
    

dur.apply(ani, 'hello');