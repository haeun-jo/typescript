{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(stateType: ResourceLoadState) {
    switch (stateType.state) {
      case "loading":
        return `👀 ${stateType.state}...`;
      case "success":
        return `😃 ${stateType.response.body}`;
      case "fail":
        return `😱 ${stateType.reason}`;
    }
  }

  // printLoginState({ state: "loading" }); // 👀 loading...
  // printLoginState({ state: "success, response: { body: "loaded" } }); // 😃 loaded
  // printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
