const path=require('path')
const rootDir=require('../util/path')
let products=[]
const fs=require('fs')
const p=path.join(rootDir,'data','saveProducts.json')
const productFetch=(cb)=>{
    fs.readFile(p,(err,data)=>{
        if (!err) {
            cb(JSON.parse(data))
        }else{
            cb([])
        }
    })
}
module.exports=class Product{
    constructor(p){
        this.title=p;
    }
    save(){
        productFetch(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err);
            })
        })
    }
    static fetchAll(cb){
        productFetch(cb)
        // return products; //this will return undefined bcz read file operation is async so the products become undefined
    }
}