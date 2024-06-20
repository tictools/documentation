const quickSort = function <T>(collection: T[]): T[] {
  const pivot = collection[0];
  const left = [];
  const right = [];

  if (collection.length <= 1) {
    return collection;
  }

  for (let index = 1, lng = collection.length; index < lng; index++) {
    if (collection[index] <= pivot) left.push(collection[index]);
    if (collection[index] > pivot) right.push(collection[index]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

export default quickSort;
