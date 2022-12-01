const userInfo = require('./information');
//console.log(`Hi, my name is ${userInfo.name} and I'm in a ${userInfo.campus} campus`);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: (`Hi, my name is ${userInfo.name} and I'm in a ${userInfo.campus} campus`),
    e: "Oo",
    T: "U"
}));
