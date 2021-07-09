{
  // function: login => success, fail
  // 1-5-union.ts 에서 가져온 예제
  
  // 유니온 타입을 사용 할 때 어떤 케이스든 공통적인 프로퍼티를 가지고 있음으로서
  // 조금 더 구분하기 쉽게 만든다.
  // result라는 공통적인 프로퍼티를 갖는 것 처럼
  type SuccessState = {
    result: 'success';
    response:{
      body: string;
    };
  }

  type FailState = {
    result: 'fail';
    reason: string;
  }

  type LoginState = SuccessState | FailState;

  function login2(id: string, pw: string): LoginState {
    return{
      result: 'success',
      response: {
        body: 'logged in!',
      }
    }
  }

  function printLoginState2(state: LoginState){
    
    if(state.result === 'success'){
      console.log(`🎉 ${state.response.body}`)
    }else{
      console.log(`😭 ${state.reason}`)
    }
  }
}