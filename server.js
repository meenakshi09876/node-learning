
//Nodejs email Module

var nodemailer=require('nodemailer')

var transpoter=nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'emeena53062@gmail.com',
		pass:'M@1234'

	}
})

var options = {
	from: 'emeenameena53062@gmail.com',
	to:'mi.e@atop.com',
	subject:'Testing Email',
	Text:'thats easy to use'
};

transpoter.sendMail(options,(err,info)=>{
	if(err){
		console.log(err);
	}else{
		console.log('Email is sent'+info.response);
	}

})


/*

NPM MODULE

var http=require('http')
const uc=require('upper-case')

http.createServer((req,res)=>{
	res.write(uc.upperCase('Hello world'))
	res.end()
}).listen(8000,()=>{console.log('server running on 8000');})

*/

/*
var adrs='http://localhost:8000/home.html?year=2018&month=feb'
var q=url.parse(adrs,true)
console.log(q.search);
*/


//ABOUT FS MODULE

/*var http = require('http');
	// file system is for reading,writing,modifying,deleting files
var fs=require('fs')

/*
http.createServer((req,res)=>{
	WRITFILE//will replace the existing content with current content.we can also create file

	fs.writeFile('test.txt','nodejs',(err,data)=>{
		res.write(data);
		res.end()
	})

	/*
	APPEND FILE
Appendfile	if we want add content we use appendfile (it takes 3 arguments whatever the content we want add that need to pass as a argument)
	
fs.appendFile('test.txt','thank you',(err,data)=>{
		res.write(data);
			res.end()
	})

	/*
	DELETE FILE
Unlink // if we want to delete the file  we will use unlink

	fs.unlink('test.txt',(err)=>{
		if(err) throw err
		console.log('file deleted');
	})

/*
READ FILE
fs.readFile  => for reading the file


 fs.readFile('test.txt',(err,data)=>{
		res.write(data);
		res.end()
	 })	
/*
listen(8000,()=>{
        console.log('server running on port 8000');
    })
	*/
/*


about HTTP MODULE

http
	.createServer((req, res) => {
		res.write(req.url);
		res.end();
       
	})
	.listen(8000,()=>{
        console.log('server running on port 8000');
    })
*/