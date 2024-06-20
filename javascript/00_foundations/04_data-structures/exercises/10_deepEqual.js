/**
 * Write a function 'deepEqual' that takes two values and returns true only if they are the same value or are objects with the same properties,
 * where the values of the properties are equal when compared with a recursive call to deepEqual.
 */

function areStrictlyEqual(object1, object2) {
  return object1 === object2;
}

function isObjectAndNotNull(object) {
  return typeof object === "object" && object != null;
}

function getObjectKeysFrom(object) {
  return Object.keys(object);
}

function haveSameNumberOfKeys(keysA, keysB) {
  return keysA.length !== keysB.length;
}

function isKeyIncludedIn({ objectKeys, key }) {
  return objectKeys.includes(key);
}

function deepEqual(object1, object2) {
  if (areStrictlyEqual(object1, object2)) {
    return true;
  }

  if (isObjectAndNotNull(object1) && isObjectAndNotNull(object2)) {
    let keysA = getObjectKeysFrom(object1);
    let keysB = getObjectKeysFrom(object2);

    if (haveSameNumberOfKeys(keysA, keysB)) {
      return false;
    }

    for (let key of keysA) {
      if (!isKeyIncludedIn({ objectKeys: keysB, key })) {
        return false;
      }
    }

    for (let key of keysA) {
      if (!deepEqual(object1[key], object2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

const obj1 = { here: { is: "John" }, value: 2 };
const obj2 = { here: { is: "John" }, value: 2 };

console.log(deepEqual(obj1, obj2));
