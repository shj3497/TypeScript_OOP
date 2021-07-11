{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  //? 커피 한잔당 들어가는 콩의 그램수
  const BEANS_GRAMM_PER_SHOT: number = 7;

  //? 현재 커피콩의 그램수
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    //? 현재 보유중인 커피콩의 그램수가 더 적다면 에러를 던진다. 
    if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT){
      throw new Error('Not enough coffee beans!');
    }

    coffeeBeans  = coffeeBeans - shots * BEANS_GRAMM_PER_SHOT;
    return{
      shots: shots,
      hasMilk: false
    }
  }

  coffeeBeans = coffeeBeans + 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(4);
  console.log(coffee)
}