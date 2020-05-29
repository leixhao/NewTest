function animal(){
  this.type='动物',
  this.eat =  () => {
    console.log('我吃东西了')
  }
}

let tager = new animal()
// console.log(tager.type) //动物
// console.log(tager.eat()) //我吃东西了
console.log(tager.constructor)// function animal()   =>>   constructor指向了他的构造函数

