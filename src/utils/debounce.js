function debounce(fn, delay) {
  // scrolling , search event
  let timer;
  return function (...args) {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
