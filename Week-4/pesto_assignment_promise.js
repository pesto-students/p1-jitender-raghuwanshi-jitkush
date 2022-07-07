function gen_rand() {
    let a = Math.random()+Math.random()*10;
    return new Promise((reslove,reject) => {
        if (a % 5 != 0) {
            var date = Date.now();
            reslove(a,Date.now());
        }
        else {
            var date= Date.now();
            reject(a,Date.now());
        }
    })
    };
gen_rand()
.then((res,d) => {console.log(res +` is not dividible by 5 hence reslove; coming from reslove block ` + d)})
.catch((rej,d) => {console.log(rej +` is divisible by 5 hence reject; coming from .catch block` + d)})
.finally(console.log(`the promise is fulfilled`));
