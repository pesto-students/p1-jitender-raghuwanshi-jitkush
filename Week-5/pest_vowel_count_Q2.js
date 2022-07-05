const checkVowel = (word) => {
    let str = word.toLowerCase();
    let isVowel=new Map();
    let i=0;
    let count = 1;
    for(i ; i < word.length; i++)
    if (str[i] == `a`|| str[i] == `A`|| str[i] == `e`|| str[i] ==`E`|| str[i] == `i`||str[i] == `I`||str[i] == `o`||str[i] == `O`||str[i] == `u`||str[i] == `U`){
        if(isVowel.has(str[i])) {
            isVowel.set(str[i],isVowel.get(str[i]) + 1)
        }
        else {
            isVowel.set(str[i], count);
        }
    }else {

    }

    return isVowel;
    }


const d = checkVowel(`aeiouAEIOUfhgahghheghgihhjodjdjujdjdjjdjdskkskskkkAEIOUaeiou`);
console.log(d);