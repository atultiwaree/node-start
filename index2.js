console.log("hello");
const os = require("os");

/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Operating System Module                                                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

 */

//Checkgin os name

console.log("OS Type", os.type());

//Checking os type

console.log("OS type", os.platform());

//CPU Arch

console.log("CPU Architecture", os.arch());

//CPU More Details

console.log("CPU INFO", os.cpus());

//Memory

console.log("Total memory", os.totalmem());

//PC Uptime

console.log("Uptime PC", os.uptime());

/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │                                     Events Module                                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

const Emitter = require("events");

const myEmitter = new Emitter();

myEmitter.on("oculus", (data) => {
  //Event Creation
  console.log("Event triggered...", data);
});

myEmitter.emit("oculus", "atul"); //Event Call
