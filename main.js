// Task 2: Use the local reportGenerator module
const { generateReport } = require('./reportGenerator');

const name = 'Alice';
const scores = [12, 15, 8, 10];
const report = generateReport(name, scores);
console.log(report);