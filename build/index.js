"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const CharacterCollection_1 = require("./CharacterCollection");
const LinkedList_1 = require("./LinkedList");
const numberCollection = new NumberCollection_1.NumberCollection([10, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data);
const characterCollection = new CharacterCollection_1.CharacterCollection('Xaayb');
characterCollection.sort();
console.log(characterCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
