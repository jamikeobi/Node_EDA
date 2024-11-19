const fs = require("fs");
const http = require("http");

const CustomEvent = require("./Modules/eventEmitter");

const LargeFilePath = fs.createReadStream("../Files/largeFile.txt", "utf-8");

const Server = http.createServer();

Server.on("request", (request, response) => {
  let EventEmitter = new CustomEvent();

  LargeFilePath.on("data", (chunk) => {
    EventEmitter.emit("data", chunk);
  });

  LargeFilePath.on("end", () => {
    console.log("....File reading completed");
  });

  LargeFilePath.on("error", (error) => {
    console.log("An error ocurred: ", error.message);
  });

});


Server.listen(1000, '127.0.0.1', ()=>{
    console.log('Server is runninh on port 1000');
    
})