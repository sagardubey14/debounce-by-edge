const debounce = require('../src/debounce')

const fn = (arg)=>{
    console.log(arg);
}
let debounceFn = debounce(fn,500, true)

debounceFn('data1')

debounceFn('data2')

debounceFn('data3')

setTimeout(()=>{
    debounceFn('data4')
    debounceFn('data5')
    setTimeout(()=>{
        debounceFn('data6')
        debounceFn('data7')
    },1000)
},600)
