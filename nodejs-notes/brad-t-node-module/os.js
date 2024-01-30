const os = require('os')

// arch()
console.log(os.arch());

// platform()
console.log(os.platform());

if (os.platform() === 'darwin') {
    console.log('You must be on a mac machine')
} else if (os.platform() === 'win32'){
    console.log('You must be on a Windows Machine')
}

// cpus()
// console.log(os.cpus());

// freemem()
// console.log(os.freemem());
console.log(`Free Memory: ${os.freemem() / 1024 /1024 /1024} GB`);

// totalmem()
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir()
console.log(os.homedir());

// uptime()
console.log(os.uptime());
const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24 );
const hours = Math.floor(uptime / 60 / 60) % 24;
const mins = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;

console.log(`Uptime: ${days} days, ${hours} hours, ${mins} minutes, ${seconds} seconds`);