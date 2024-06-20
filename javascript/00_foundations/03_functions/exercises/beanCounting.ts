function splitWord(word: string): string[] {
  return word.split("");
}

function charCodeFrom(character: string): number {
  return character.charCodeAt(0);
}

function matchWith(charCode: number) {
  return function (character: string): boolean {
    return character.charCodeAt(0) === charCode;
  };
}

function pluralizeVerbFrom(count: number): string {
  return count === 1 ? "is" : "are";
}

function logResult(count: number, word: string, character: string = "B"): void {
  console.log(
    `🚀 There ${pluralizeVerbFrom(count)} ${count} '${character}' in ${word}.`
  );
}

/**
 * Write a function 'countBs' that takes a string as its only argument
 * and returns a number that indicates how many uppercase B characters there are in the string.
 */

type charCounter = {
  word: string;
  count: number;
  character?: string;
};

function countBs(word: string): charCounter {
  const charCode = charCodeFrom("B");
  const characters = splitWord(word);

  const filteredBeans = characters.filter(matchWith(charCode));

  return {
    word,
    count: filteredBeans.length,
  };
}

console.log("### countBs ###");

const { count: count1, word: word1 } = countBs("John Doe");
logResult(count1, word1);

const { count: count2, word: word2 } = countBs("NetBeans");
logResult(count2, word2);

const { count: count3, word: word3 } = countBs("ABRACADABRA");
logResult(count3, word3);

/**
 * Write a function called 'countChar' that behaves like count'Bs,
 * except it takes a second argument that indicates the character that is to be counted.
 * Rewrite countBs to make use of this new function.
 */

function countChar(word: string, character: string = "B"): charCounter {
  const charCode = charCodeFrom(character);
  const characters = splitWord(word);

  const filteredCharacters = characters.filter(matchWith(charCode));

  return {
    character,
    count: filteredCharacters.length,
    word,
  };
}

console.log("### countChar ###");

const { count: count4, word: word4 } = countChar("John Doe");
logResult(count4, word4);

const { count: count5, word: word5 } = countChar("NetBeans");
logResult(count5, word5);

const { count: count6, word: word6 } = countChar("ABRACADABRA");
logResult(count6, word6);

const {
  character: characterD,
  count: count7,
  word: word7,
} = countChar("John Doe", "D");
logResult(count7, word7, characterD);

const {
  character: characterZ,
  count: count8,
  word: word8,
} = countChar("NetBeans", "Z");
logResult(count8, word8, characterZ);

const {
  character: characterA,
  count: count9,
  word: word9,
} = countChar("ABRACADABRA", "A");
logResult(count9, word9, characterA);
