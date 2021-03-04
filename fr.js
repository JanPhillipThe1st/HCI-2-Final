const fs = require('fs');
export default class ReaderClass{
    constructor(){

        fs.createReadStream('./articles/sample.txt','utf-8',(err,file)=>{
            if(err){
                console.log(err);
            }
            else{
                this.text = file;
                console.log(file);
            }
        });
    }
}