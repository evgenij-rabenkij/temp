"use strict";

import {user} from "./user";

console.log("Object user was exported to terminal.js")
console.log(user.fullInfo);//User Igor Igorov, age 25.
console.log(user.accountSum)//1500
user.putOnSum(300);
console.log(user.accountSum)//1800
user.takeOffSum(400);
console.log(user.accountSum)//1400
