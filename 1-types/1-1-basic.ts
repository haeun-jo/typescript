{
  /**
   * JavaScript
   * Primitive: number, string, boolean, symbol, bigint, null, undefined
   * Object: function, array ...
   */

  // number
  const num: number = 5;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined - 주로 optional type일때 사용, 단독적으로 사용하진 않음
  // data type이 있거나 아직 결정되지 않았을 때 null과 undefined 중에서는 주로 undefined 사용
  let name: undefined; // 사용 X
  let age: number | undefined;
  age = 1;
  age = undefined;
  function find(): number | undefined {
    return 1;
    // return undefined;
  }

  // null
  let person: null; // 사용 X
  let person2: string | null;

  // unknown - 웬만하면 사용 X
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any - 웬만하면 사용 X
  let anything: any = 0;
  anything = "hello";

  // void - return 값이 없을 때
  function print(): void {
    console.log("print");
    return;
  }

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    // while(true) {};
  }
  let neverEnding: never; // 사용 X

  // object
  let obj: object; // 웬만하면 사용 X, 좀 더 명확하고 세부적으로 명시
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "haeun" });
  acceptSomeObject([1, 4, 5]);
}
