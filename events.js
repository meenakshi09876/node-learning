//////////USing EventEmitters &&&& EventListeners////////
///        OBSERVER PATTERN           /////////

const EventEmitter=require('events')
const http=require('http')

class Sales extends EventEmitter{
    constructor(){
        super()
    }
}
const myEmitter=new Sales()
myEmitter.on('newSale',()=>{
    console.log('there was a new sale');
})
///on()///////observers

myEmitter.on('newSale',()=>{
 console.log('customer name:jhons');
})
myEmitter.on('newSale',stock=>{
 console.log(`there are new ${stock} items left in stock`);
})
/////////////////its the object emits the event///////
myEmitter.emit('newSale',9)

///////////////////////////////////////////////////////
///////////////EXAMPLE2//////////////////
const server=http.createServer()
server.on('request',(req,res)=>{
    console.log(req.url);
    console.log('Request received');
    res.end('Request received')
})

server.on('request',(req,res)=>{
    console.log('Another request😄')
})

server.on('close',()=>{
console.log('server closed');
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('waiting for requests......');
})