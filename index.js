

const fs=require('fs')

const superagent=require('superagent')

const readfilePro=file=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
            if(err) reject('i couldnt find this file😉')
            resolve(data)
        })
    })
}

const writeFilePro=(file,data)=>{
return new Promise((resolve,reject)=>{
    fs.writeFile(file,data,err=>{
        if(err) reject('i could not write the file 😛')
        resolve('success')
    })
})
}

/////////////using promises

const getDogPic=async()=>{
    try{
    const data = await readfilePro(`${__dirname}/dog.txt`);
    console.log(`Breed:${data}`);

    const res=await superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)

    console.log(res.body.message);


    await writeFilePro('dog-img.txt', res.body.message);
    console.log('random dog image saved to file!!!');
    } catch(err){
      console.log(err);
    };
}
getDogPic()
/*
readfilePro(`${__dirname}/doggg.txt`).then((data) => {
  console.log(`Breed:${data}`);

return superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
})
.then((res) => {
      console.log(res.body.message);

      writeFilePro('dog-img.txt', res.body.message);

    //   fs.writeFile('dog-img.txt', res.body.message, (err) => {
    //     console.log('random dog image saved to file!!!');
    //   });
    }).then(()=>{
        console.log('random dog image saved to file');
    })
    .catch((err) => {
      console.log(err);
    });

*/