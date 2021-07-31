
type Student = {
  passed: boolean;
}

const students: Student[] = [{passed: true}, {passed: true}, {passed: false}]
//? every() 함수는 하나라도 false가 존재한다면 즉각 false를 리턴한다. 
const result = students.every(student => {
  return student.passed
})
console.log(result); // false

class Animal{}
class Cat extends Animal{
  isCat: boolean = true;
}

class Dog extends Animal{
  isDog: boolean = false;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()]
function isCat(animal: Animal): animal is Cat{
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat))