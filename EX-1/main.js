import fs from "fs";


fs.writeFileSync("./hello.txt", "Hello World helooo");
let content = fs.readFileSync("./hello.txt", "utf-8");
console.log(content);