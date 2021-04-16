Function.prototype.myThrottle = function (interval1) {
  let tooSoon = false;
  let that = this;
  return function throttledfunction() {
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(function () {
        tooSoon = false;
      }, interval1);
      that();
    }
  };
};

// class Neuron {
//   fire() {
//     console.log("Firing!");
//   }
// }

// const neuron = new Neuron();
// // When we create a new Neuron,
// // we can call #fire as frequently as we want

// // The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// // You can use clearInterval to stop the firing:
// clearInterval(interval);

// // // Using Function#myThrottle, we should be able to throttle
// // // the #fire function of our neuron so that it can only fire
// // // once every 500ms:

// neuron.fire = neuron.fire.myThrottle(500);

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// // This time, if our Function#myThrottle worked correctly,
// // the Neuron#fire function should only be able to execute
// // every 500ms, even though we're still trying to invoke it
// // every 10ms!

// // If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//   constructor() {
//     this.fire = this.fire.myThrottle(500);
//   }

//   fire() {
//     console.log("Firing!");
//   }
// }


Function.prototype.myDebounce = function(interval) {
  let timeout;

  return (...args) => {

    const func = () => {
      timeout = null;
      this(...args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(func, interval);
  }
  // let that = this;

  // return function anonFunc() {
  //   // setTimeout(that, interval);
  //   console.log(that, this);
  // }


}

// let newFunc = new Function ();
// console.log(newFunc.myDebounce(1000));

class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}

const searchBar = new SearchBar();

searchBar.search = searchBar.search.myDebounce(500);

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};

queryForHelloWorld();

// searchBar.search = searchBar.search.myDebounce(500);