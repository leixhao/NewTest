// function animal(){
//   this.type='动物',
//   this.eat =  () => {
//     console.log('我吃东西了')
//   }
// }

// let tager = new animal()
// // console.log(tager.type) //动物
// // console.log(tager.eat()) //我吃东西了
// console.log(tager.constructor)// function animal()   =>>   constructor指向了他的构造函数
// function cb(val) {
//   /* 渲染视图 */
//   console.log('视图更新啦～');
// }
// function gb() {
//   console.log('获取了~');
// }

// function defineReactive(obj, key, val) {
//   Object.defineProperty(obj, key, {
//     enumerable: true /* 属性可枚举 */,
//     configurable: true /* 属性可被修改或删除 */,
//     get: function reactiveGetter() {
//       gb();
//       return val; /* 实际上会依赖收集，下一小节会讲 */
//     },
//     set: function reactiveSetter(newVal) {
//       if (newVal === val) return;
//       cb(newVal);
//     },
//   });
// }

// function observer(value) {
//   if (!value || typeof value !== 'object') {
//     return;
//   }

//   Object.keys(value).forEach((key) => {
//     defineReactive(value, key, value[key]);
//   });
// }


// class Vue {
//   constructor(options) {
//     this._data = options.data;
//     observer(this._data);
//   }
// }

// let o = new Vue({
//   data: {
//       test: "I am test."
//   }
// });

// o._data.test = 'it is'
// o.test = o._data.test
// console.log(o)


