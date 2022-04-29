const fib = (n) => ({
    [Symbol.iteration]: () => {
        let i=1;
        let old=0,nex=0;
        return{
            next: () => {
                    if(i++ <= n) {
                        [old,nex]=[n,(n+(n-1))|| 1] ;  
                        return {value:old,done:false};
                    }
                    else{
                        return {done:true}
                    }
            } 
        }
    }});
    console.log([...fib(0)]);