const { error } = require("console");
const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////////////////////////////////
/////////Files

//Blocking,Synchronous
// const textIn=fs.readFileSync('./starter/txt/input.txt','utf-8')
// console.log(textIn);

// const textOut=`this is what we know about the avacado:${textIn}.\on created on ${Date.now()}`
// fs.writeFileSync('./starter/txt/output.txt',textOut)
// console.log('file written!!!');

//Non-blocking,hronous

// fs.readFile('./starter/txt/start.txt','utf-8',(err,data1)=>{
//     if(err) return console.log('Error 🌟');
//   fs.readFile(`./starter/txt/${data1}.txt`,'utf-8',(err,data2)=>{
//     console.log(data2);
//     fs.readFile('./starter/txt/append.txt','utf-8',(err,data3)=>{
//         console.log(data3);
//         fs.writeFile('./starter/txt/final.txt',`${data2}\n${data3}`,'utf-8',err=>{
//             console.log('your file has been written!!😀');
//         })
//     })
//   })
// })
// console.log('will read the file');

///////////////////////////////////////////
///////Server

// const data = fs.readFile(`${__dirname}/dev-data/data.json`);
// const dataObj = JSON.parse(data);




const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("this is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("this is the PRODUCT");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });
    // res.end('API')
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>page not found!!!</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});

// const server = http.createServer((req, res) => {
//   const pathName = req.url;
//   if (pathName === "/" || pathName === "/overview") {
//     res.end("this is OVERVIEW");
//   } else if (pathName === "/product") {
//     res.end("this is the PRODUCT");
//   } else if (pathName === "/api") {

//    fs.readFile(`${__dirname}./dev-data/data.json`, "utf-8",(err, data) => {
//       const productData =  JSON.stringify(data);
//       console.log(productData);
//       res.end(data)
//     });
//     res.end("API");
//   } else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//       "my-own-header": "hello world",
//     });
//     res.end("<h1>page not found!!!!!</h1>");
//   }
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("listening to request on port 8000");
// });
