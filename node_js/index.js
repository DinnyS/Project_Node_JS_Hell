const fs = require("fs");
const http = require("http");
const os = require("os");
const { data } = require("./data");

console.log("Hello Node.js");

console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(exports);
console.log(module.exports === exports);

// Blocking
const content = fs.readFileSync("./data.js", "utf8");
console.log(content);

console.log("-----Next operation-----");

// Non-blocking
fs.readFile("./data.js", "utf8", (err, content) => {
  console.log(content);
});

console.log(data);

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200);
        res.write("Hello Node.js \n ");
        res.write(os.uptime().toString() + "\n");
        res.write(os.cpus().toString() + "\n");
        res.write(os.homedir().toString() + "\n");
        break;
      case '/api/data':
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.write(JSON.stringify(data));
        break;
      case "/api/online":
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(200);
        res.write(os.uptime().toString());
        break;
    }
    res.end();
  })
  .listen(3000);

console.log("-----Listening on port 3000-----");
