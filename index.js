#!usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Person {
    personality;
    constructor(personality) {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extravert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a Mystery";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    _name;
    Name;
    constructor(_name, Name) {
        super("");
        this._name = "Default Private Name inside Class";
        this.Name = Name;
    }
    get() {
        return this._name;
    }
}
try {
    const userChoice = +prompt("Type 1 if you like to talk to others ans type 2 if you would rather keep to yourself: ");
    const myPerson = new Person("");
    myPerson.askQuestion(userChoice);
    console.log(myPerson.getPersonality());
    const userName = prompt("What is your name: ");
    const myStudent = new Student("", "");
    myStudent.Name = userName;
    console.log("Your Name is : " + myStudent.Name + " and your personality type is : " + myStudent.getPersonality());
    console.log(myStudent.get());
}
catch {
    console.log("Please insert the numeric value");
}
