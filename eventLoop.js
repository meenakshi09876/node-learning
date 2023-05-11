
///////////ALL ABOUT EVENT LOOP/////
///         11/05/2023-thursday      ///


const fs=require('fs')
/////// crypto is for password encryption/////
const crypto=require('crypto')
const start=Date.now()

process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(()=>console.log('timer 1 finished'),0)
setImmediate(()=>console.log('immediate 1 finised'))

fs.readFile('test-file.txt',()=>{
    console.log('I/o finished');
    console.log("===========");

    setTimeout(() => console.log('timer 2 finished'), 0);
    setTimeout(() => console.log('timer 3 finished'), 3000);

    //////////////its get excuted ones per a tick

		setImmediate(() => console.log('immediate 2 finised'));

        ////////////it is a part of micro task queue its get excuted after each phase.
        ////////////it happens before the next loop phase
        process.nextTick(()=>console.log('process.nextTick'))

////////////////////////////////////////
/////////////SYNCHRONOUS EVENT LOOP(BLOCKING)

        crypto.pbkdf2Sync('password','salt',100000,1024,'sha512')
         console.log(Date.now() -start,"password encrypted");
        

        crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');    
         console.log(Date.now() - start, 'password encrypted');


          crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
          console.log(Date.now() - start, 'password encrypted');


           crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
			console.log(Date.now() - start, 'password encrypted');


             crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
             console.log(Date.now() - start, 'password encrypted');



             ////////////////////////////////////////////
             /////////ASYNCHRONOUS EVENT LOOP(NON_BLOCKING)

        // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		// 			console.log(Date.now() - start, "password encrypted");
		// 		});


        // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		// 			console.log(Date.now() - start, "password encrypted");
		// 		});


        // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		// 	console.log(Date.now() - start, "password encrypted");
		// 		});
																														
})
console.log('hello from the top level code');