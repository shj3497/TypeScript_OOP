{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const score1: number[] = [1, 2, 3];
  const score2: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {
    // fruits.push('caca') : X
    // 파라미터로 받아온 fruits는 읽기 전용이다. 함수 내부에서 변경 불가능
  }

  // Tuple -> interface, type alias, class
  // 사용을 권장하지 않는다. >> class나 object로 대체해서 사용하는게 좋다.
  let student: [string, number];
  student = ['ShimHyeokJin', 28];
  console.log(student[0]);
  console.log(student[1]);
  const [name, age] = student;
  console.log(name);
  console.log(age);
}