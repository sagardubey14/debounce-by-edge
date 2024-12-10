function debounce(fn, delay) {
    let timer;
    
    return function (...args) {
      const context = this;
  
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        // Invoke function after delay
        fn.apply(context, args);
      }, delay);
    };
  }
  
  module.exports = debounce;