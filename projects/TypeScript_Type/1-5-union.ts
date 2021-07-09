{
  /**
   * Union Types: OR
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction){
    console.log(direction);
  }
  move('right');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  // 예제
  // function: login => success, fail
  type SuccessState = {
    response:{
      body: string;
    }
  }

  type FailState = {
    reason: string;
  }

  type LoginState = SuccessState | FailState;

  function login(id: string, pw: string): LoginState {
    return{
      response: {
        body: 'logged in!',
      }
    }
  }

  function printLoginState(state: LoginState){
    // 좋은 방법은 아니다. 이어지는 1-6-discriminated.ts 참고
    if('response' in state){
      console.log(`🎉 ${state.response.body}`)
    }else{
      console.log(`😭 ${state.reason}`)
    }
  }
  
}