const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
    console.log('setTimeout');
}, 0);

// nextTick
// task queue 제일 앞 부분에 해당 콜백함수를 넣어줌
process.nextTick(() => {
    console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
    console.log('for loop');
};