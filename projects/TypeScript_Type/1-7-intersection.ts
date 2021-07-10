{
  //! Intersection Types: &(and)
  type Student = {
    name: string;
    score: number;
  }

  type Worker = {
    employeeId: number;
    work: () => void;
  }

  function internWork(person: Student & Worker){
    console.log(person.name, person.score, person.employeeId, person.work());
  }

  //? Intersection Types은  두가지 type을 모두 만족해야한다.
  internWork({
    name: 'hyeokjin',
    score: 100,
    employeeId: 123,
    work: ()=>{}
  })
}