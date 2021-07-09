{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'hyeokjin';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  }

  const student: Student = {
    name: 'ShimHyeokJin',
    age: 28
  }
  console.log(student);

  /**
   * String Literal Types
   * type이 아닌 문자열로 alias해주면 해당 문자열만 값을 가질수 있다.
   */
  type Name = 'name';
  let hyeokjinName: Name;
  hyeokjinName = 'name';
  
  type JSON = 'json';
  const json: JSON = 'json';
}