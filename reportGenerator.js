// Task 2: Local Module to Format a Report
function generateReport(name, scores) {
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    const status = avg >= 10 ? 'PASS' : 'FAIL';
    return `Report for ${name}\nScores: ${scores.join(', ')}\nAverage: ${avg.toFixed(2)}\nStatus: ${status}`;
}

module.exports = { generateReport };