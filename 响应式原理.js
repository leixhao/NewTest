function cb(val){
  console.log(val)
  console.log('视图更新了')
}

function defineReactive(obj, key, val){
  Object.defineProperty(obj, key, {
    enumerable: true, //设置属性可被枚举
    configurable: true, //设置属性可被修改和删除
    get:function reactiveGetter(){
      return val
    },
    set: function reactiveSetter(newVal){
      if( newVal === val ) return
      val = newVal
      cb(newVal)
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
    this._data = options.data;
    observer(this._data)
  }
}

let o = new Vue({
  data:{
    count: '这是数字'
  }
})
o._data.count = '123'
console.log(o._data.count)