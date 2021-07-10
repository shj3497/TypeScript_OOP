{
  //! Enum
  // JavaScript
  // JS에서는 변경되지 않을 변수들을 대문자로 정의하곤 한다.
  const MAX_NUM = 6; 
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  //? freeze() : 수정 불가능
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2})
  console.log(DAYS_ENUM.MONDAY)

  // TypeScript
  // TS에서 enum은 가능한 사용하지 않는게 좋다.
  // Enum은 Union의 string literal로 대체해서 사용 가능하기 때문에 enum을 사용하지는 않는다.
  type Days0 = 'Monday' | 'Thuesday' | 'Wednesday'
  
  //? enum : 값을 정해주지 않으면 0부터 증가한다.
  console.log('Days')
  enum Days1{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days1.Monday) // 0
  console.log(Days1.Tuesday); // 1
  let day: Days1 = Days1.Saturday; 
  day = 10; //! 사용자가 변경이 가능하다?!
  console.log(day); // 5

  //? 값을 정해 줄 수도 있다.
  console.log('Days2');
  enum Days2{
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days2.Monday); // 1
  console.log(Days2.Tuesday); // 2

  //? 문자열도 값으로 정해줄 수 있다. 이때는 자동으로 할당 X, 수동으로 할당해야한다.
  console.log('Days3');
  enum Days3{
    Monday = 'monday',
    Tuesday = 'tuesday',
    Wednesday = 'wednesday',
    Thursday = 'thursday',
    Friday = 'friday',
    Saturday = 'saturday',
    Sunday = 'sunday'
  }
  console.log(Days3.Monday); // monday
  console.log(Days3.Tuesday); // tuesday
}