# Node.js Application: Built-in, Local, and Third-Party Modules

[![Node](https://img.shields.io/badge/Node-18%2B-43853d?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Modules](https://img.shields.io/badge/Modules-Built--in%2C%20Local%2C%20Third--Party-blue)](#)
[![Nodemailer](https://img.shields.io/badge/Email-nodemailer-green)](https://www.nodemailer.com/)

## What You're Aiming For
Apply your knowledge of Node.js modules by using built-in, local, and third-party modules in hands-on coding exercises.

---

## Tasks
### 1. Use a Built-in Module (fs)
- Read the contents of `message.txt` and print to console.
- See: `readFile.js`, `message.txt`

### 2. Create and Use a Local Module
- `reportGenerator.js`: Exports a function to generate a report for a student.
- `main.js`: Imports and uses the report generator.

### 3. Use a Third-Party Module (nodemailer)
- `emailSender.js`: Sends an email using nodemailer (configure your Gmail/app password).

---

## Usage
```bash
# Task 1: Read file
node readFile.js

# Task 2: Generate report
node main.js

# Task 3: Send email (edit credentials first)
node emailSender.js
```

---

## Files
- `message.txt`: File to read
- `readFile.js`: Reads and prints file content
- `reportGenerator.js`: Local module for reports
- `main.js`: Uses reportGenerator
- `emailSender.js`: Sends email with nodemailer

---

*Edit emailSender.js with your Gmail and app password before running Task 3.*