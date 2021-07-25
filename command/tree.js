let fs = require('fs');
let path = require('path');
function treeFn(src) {

  if(src == undefined){
    treeCreate(process.cwd());
    return; 
  }
  else{
    let exist = fs.existsSync(src)
    if(exist){
      treeCreate(src);
      return;
    }else{
      console.log("Please provide a Valid Path");
      return;
    }

  }
  
}
function treeCreate(src){
  let isFile = fs.lstatSync(src).isFile();
  if(isFile){
    let fileName = path.basename(src);
    console.log("├──"+fileName);
  }else{
    let dirName = path.basename(src);
    console.log("└──"+dirName);
    let contentArray = fs.readdirSync(src);
    for(let i=0 ; i< contentArray.length ; i++){
      console.log("\t"+"├──"+contentArray[i]);
    }
  }
}

module.exports = {
  treefxn: treeFn
}