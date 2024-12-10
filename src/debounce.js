function debounce(fn, delay = 300, immediate = false) {
    let timer;
    
    return function (...args) {
      const context = this;
      
      if (immediate && !timer) {
        fn.apply(context, args);
      }
  
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }
  
  module.exports = debounce;
  