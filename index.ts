#!usr/bin/env node
import PromptSync from "prompt-sync";
const prompt=PromptSync();

class Person{
    private personality:string
    
constructor(personality:string)
{
this.personality = "Mystery";
}

public askQuestion(answer:number)
{
if(answer===1)
{
    this.personality="Extravert";
}else if(answer===2)
{
    this.personality="Introvert";
}else
{
    this.personality="You are still a Mystery";
}
}

public getPersonality()
{
return this.personality;
}
}

class Student extends Person{

private _name:string;
public Name:string;

constructor (_name:string, Name:string){
    super ("")
    this._name = "Default Private Name inside Class"
    this.Name = Name
}

public get () {
    return this._name;
}
}


try{
const userChoice=+prompt("Type 1 if you like to talk to others ans type 2 if you would rather keep to yourself: ");
const myPerson= new Person("");
myPerson.askQuestion(userChoice);
console.log(myPerson.getPersonality());
const userName=prompt("What is your name: ");
const myStudent = new Student("","");
myStudent.Name=userName;
console.log("Your Name is : " + myStudent.Name + " and your personality type is : " + myStudent.getPersonality());
console.log(myStudent.get());
}
catch
{
    console.log("Please insert the numeric value");
}

