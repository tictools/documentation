function speak(line) {
  globalThis.console.log(`The ${this.type} rabbit said: ${line}`);
}

const whiteRabbit = {
  type: "white",
  speak,
};

const hungryRabbit = {
  type: "hungry",
  speak,
};

const funnyRabbit = {
  type: "funny",
  speak,
};

whiteRabbit.speak("I'm fast!");
speak.apply(hungryRabbit, ["I'm faster than you!"]);
speak.call(funnyRabbit, ["I'm the fastest one!"]);

const finder = function () {
  return {
    find(collection) {
      return collection.some((value) => value === this.value);
    },
    value: 5,
  };
};

const customFinder = finder();
const containsValue = customFinder.find([1, 2, 3, 4, 5]);
console.log({ containsValue });

const boundFinder = function () {
  return {
    find(collection) {
      return collection.some(
        function (value) {
          return value === this.value;
        }.bind(this)
      );
    },
    value: 5,
  };
};

const customBoundFinder = boundFinder();
const containsBoundValue = customBoundFinder.find([1, 2, 3, 4]);
console.log({ containsBoundValue });
