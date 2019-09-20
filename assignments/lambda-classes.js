// CODE here for your Lambda Classes

class Person {
    constructor(personAttr) {
        this.name = personAttr.name,
        this.age = personAttr.age,
        this.location = personAttr.location
    }
    speak() {
        return `Hello my name is ${this.name} I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructAttr) {
        super(instructAttr);
        this.specialty = instructAttr.specialty,
        this.favLanguage = instructAttr.favLanguage,
        this.catchPhrase = instructAttr.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} recieves perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground,
        this.className = studentAttr.className,
        this.favSubjects = studentAttr.favSubjects
    }
    listsSubjects() {
        return `My fav subjects are ${this.favSubjects[0]}, ${this.favSubjects[1]}, ${this.favSubjects[2]}`;
    }
    PRAssignment(subject) {
        return `${this.name} recieves perfect score on ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttr) {
        super(pmAttr)
        this.gradClassName = pmAttr.gradClassName,
        this.favInstructor = pmAttr.favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }

 }

 const person1 = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
 });
 const person2 = new Person({
    name: 'John',
    age: 30,
    location: 'Minneapolis'
 });

 const instructor1 = new Instructor({
    name: 'Lue',
    location: 'Miami',
    age: 35,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Don't learn to code, code to learn!`
});

const instructor2 = new Instructor({
    name: 'Nick',
    location: 'New York CIty',
    age: 22,
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Code to Think`
});

const student1 = new Student({
    name: 'Ryan',
    location: 'Los Angeles',
    age: 20,
    previousBackground: "plumber",
    className: "Web23",
    favSubjects: ["html", "css", "javascript"]
});

const student2 = new Student({
    name: 'Lue',
    location: 'Florida',
    age: 40,
    previousBackground: "accounting",
    className: "Web24",
    favSubjects: ["node.js", "css", "javascript"]
});

const pm1 = new ProjectManager({
    name: 'Henry',
    location: 'Florida',
    age: 39,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Coding is cool!`
})
const pm2 = new ProjectManager({
    name: 'Jay',
    location: 'Florida',
    age: 42,
    favLanguage: 'Node.js',
    specialty: 'Back-End',
    catchPhrase: `Looking good!`
})


console.log(person1.speak());
console.log(person2.speak());
console.log(student1.listsSubjects());
console.log(student2.listsSubjects());
console.log(student1.sprintChallenge("css"));
console.log(student2.sprintChallenge("css and less"));
console.log(student1.PRAssignment("html"));
console.log(student1.PRAssignment("node.js"));
console.log(instructor1.demo("html"));
console.log(instructor1.grade(student1,"css"));
console.log(instructor2.demo("less"));
console.log(instructor2.grade(student2,"java"));
console.log(pm1.standUp("web24"));
console.log(pm1.debugsCode(student1, "node.js"));
console.log(pm2.standUp("web22"));
console.log(pm2.debugsCode(student2, "react"));



