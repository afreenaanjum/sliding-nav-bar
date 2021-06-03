//Throttling - eg: window-rezize, keypress events
//||||||||||||||||||
// A  100ms-wait H All teh functions inbetween A-H are cancelled
function throttle(func, wait) {
  let flag = true;
  return function (...args) {
    let context = this;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, wait);
    }
  };
}

const loggerFunc = () => {
  console.count("Throttled Function");
};

const betterLoggerFunction = throttle(loggerFunc, 1000);

window.addEventListener("resize", betterLoggerFunction);

// This is the normal Function without Throttling
//Check the console for the difference between the calls of Normal Function and the Throttled Function
const normalFunc = () => {
  console.count("Normal Function");
};

window.addEventListener("resize", normalFunc);
