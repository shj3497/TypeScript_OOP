{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (login: ResourceLoadState):void => {
    switch(login.state){
      case 'loading':
        console.log(`${login.state}`);
        break;
      case 'success':
        console.log(`😎 ${login.response.body}`);
        break;
      case 'fail':
        console.log(`😂 ${login.reason}`);
        break;
      default:
        throw Error('에러났당 ㅠ')
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
