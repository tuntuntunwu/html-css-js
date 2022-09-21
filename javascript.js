'use strict';

// how to run
// '<script src="./javascript.js"></script>' in .html
// 'node ./javascript.js' in shell

// switch
let switch_var = 2;
switch (switch_var) {
    case 1: 
        console.log(1);
        break;
    case 2: {
        console.log(2);
        break;
    }
    case 3: console.log(3); break;
    default:
        console.log('not in');
        break;
}

// closure simulated class
//...

// class
// ...

// closure simulated module

// iterator

// async iterator

// 元编程+proxy

let o = {
    hh: "hh",
    hehe() {
        return {
            name: this.hh
        }
    }
}
console.log(o.hehe().name);
