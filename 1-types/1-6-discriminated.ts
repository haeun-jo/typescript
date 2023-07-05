{
  // 차별화하는, 구분 할 수 있는

  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login2(id: string, password: string): LoginState {
    return {
      result: "success",
      response: {
        body: "Logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason

  function printLoginState2(state: LoginState) {
    state.result === "success"
      ? console.log(state.response.body)
      : console.log(state.reason);
    // if ("response" in state) console.log(state.response.body);
    // else console.log(state.reason);
    // if( Object.keys(state).includes('body')) console.log(state.response.body)
    // else console.log(state.reason);
  }
}
