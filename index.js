const { error } = require("console");
const fs = require("fs");
const http = require("http");
const url = require("url");
const replacetemplate=require('./modules/replacetemplate')

//////////////////////////////////////////
/////////Files
//      8/05/2023-monday

//Blocking,Synchronous
// const textIn=fs.readFileSync('./starter/txt/input.txt','utf-8')
// console.log(textIn);

// const textOut=`this is what we know about the avacado:${textIn}.\on created on ${Date.now()}`
// fs.writeFileSync('./starter/txt/output.txt',textOut)
// console.log('file written!!!');

//Non-blocking,asynchronous

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
//       9 / 05 / 2023 - Tuesday

const tempOverview=fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,"utf-8");
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,"utf-8");
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  
 const{query,pathname}= url.parse(req.url,true);
 
////////////////////////////////
////////OVERVIEW PAGE

  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const cardHtml=dataObj.map(el=>replacetemplate(tempCard,el)).join('')
    const output=tempOverview.replace('{%PRODUCT_CARDS%}',cardHtml)
    // console.log(cardHtml);
    res.end(output);
  } 
  /////////////////////////////////
  ////////PRODUCT PAGE
  
  else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    const product=dataObj[query.id]
    const output=replacetemplate(tempProduct,product)
    res.end(output);
  }

  //////////////////////////////
  ////////API PAGE

   else if (pathname === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });
    // res.end('API')
  } 
  ////////////////////////////
  //////////PAGE NOT FOUND PAGE
  
  else {
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



