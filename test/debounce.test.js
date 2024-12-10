const debounce = require('../src/debounce')

const fn = (arg)=>{
    console.log(arg);
}
let debounceFn = debounce(fn,500)

debounceFn('data1')

debounceFn('data2')

debounceFn('data3')

setTimeout(()=>{
    debounceFn('data4')
},1500)