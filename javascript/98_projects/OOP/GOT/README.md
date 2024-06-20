# Game Of Thrones classes exercise

You will create a class structure in JS that reflects the following data model.

In Game of Thrones there are characters. All those characters have the following information:

## Properties

- Name
- Family to which it belongs
- Age
- Status (alive or dead, although everyone is initially alive)
  All characters can perform the die action, changing their status to dead.

## Behaviours

- All the characters belong to the same series, "Game of Thrones".
- All characters can take the communicate action
  - each type of character (not each character) communicates in a different way.
  - this method returns the string with the phrase, it does not print to the console.

## Characters

Each of those characters can be a `king`, a `fighter`, an `adviser`, or a `squire`.

### King

A `king`, in addition to the information that he has for being a character, has the following information:

- Years of reign
- When he communicates, he says: `"You are all going to die"`

### Fighter

A `fighter`, in addition to the information that he has for being a character, has the following information:

- Weapon that he uses
- Dexterity (a value between 0 and 10)
- When he communicates he says: `"First I hit and then I ask"`

### Adviser

An `adviser`, in addition to the information that he has for being a character, has the following information:

- Character that he advises (who can be king, fighter, advisor or squire)
- When he communicates he says: `"I don't know why, but I think I gonna die soon"`

### Squire

A `squire`, in addition to the information he has for being a character, has the following information:

- Character he serves (who can only be a fighter)
- Complacency level (a value between 0 and 10)
- When he communicates he says: `"I am a loser"`

## Execution

- Once the entire structure is made,

  - create Joffrey Baratheon (king)
  - create Jaime Lannister (fighter)
  - create Daenerys Targaryen (fighter)
  - create Tyrion Lannister (Daenerys' advisor)
  - create Bronn (Jaime's squire).

- Create an array with all the characters.

* Make a function that takes this array as input and returns an array with the messages that the fighters communicate.

* Print the name of the series to which the characters belong to the console.

* Loop through messages array and print them by console.

* Kill Jaime and Tyrion.
