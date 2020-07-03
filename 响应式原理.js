// function cb(val){
//   console.log(val)
//   console.log('视图更新了')
// }

class Dep{
  constructor(){
    this.subs = []
  }
  addSub(sub){
    this.subs.push(sub)
  }
  notify(){
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

class Watcher{
  constructor(){
    Dep.target = this
  }

  update(){
    console.log('视图已经更新')
  }
}

function defineReactive(obj, key, val){
  // 创建一个订阅者
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true, //设置属性可被枚举
    configurable: true, //设置属性可被修改和删除
    get:function reactiveGetter(){
      // 为每一个获取该属性的对象 添加依赖
      dep.addSub(Dep.target)
      return val
    },
    set: function reactiveSetter(newVal){
      if( newVal === val ) return
      val = newVal
      // cb(newVal)
      dep.notify()
    }
  })
}

function observer(value){
  if(!value || (typeof value !== 'object')){
    return;
  }
  Object.keys(value).forEach((key) =>{
    defineReactive(value, key, value[key])
  })
}

class Vue{
  constructor(options){
    console.log(this._data)
    this._data = options.data;
    observer(this._data)
    // 新建一个watcher观察者对象，这个时候观察者中的Dep会指向这个Watcher对象
    new Watcher()
    console.log('render~',this._data.count)
  }
}

let o = new Vue({
  data:{
    count: '这是数字'
  }
})
o._data.count = '123'
console.log(o._data.count)