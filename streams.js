///////////used to process data piece by piece without completing the whole read or write opretion and therfore without keeping all the data in memory////

const fs=require('fs')
const server=require('http').createServer()

server.on('request',(req,res)=>{
	///solution 1
	//     fs.readFile('test-file.txt', (err, data) => {
	// 			if (err) console.log(err);
	// 			res.end(data);
	// 		});
	///solution2:STREAMS
	// const readable = fs.createReadStream('test-file.txt')
	// readable.on('data',chunk=>{
	//     res.write(chunk)
	// })
	// readable.on('end',()=>{
	//     res.end()
	// });
	// readable.on('error',err=>{
	//     console.log(err);
	//     res.statusCode=500
	//     res.end('file not found')
	// })


	/////solution 3:PIPE OPERATOR
	//////attach a writeable stream to a readable stream allowing to pass the readable stream data to the writeable stream////////////

    const readable=fs.createReadStream('test-file.txt')
    readable.pipe(res)
    ///readableSource.pipe(writableDest)
})
server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening.....');
})