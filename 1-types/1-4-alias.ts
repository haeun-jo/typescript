{
  /**
   * Type Aliases
   * 원하는 타입을 정의
   */
  type Text = string;
  const name: Text = "haeun";
  const address: Text = "songpagu";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    // animal: 'dog',  안됨
    name: "haeun",
    age: 20,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let haeunName: Name;
  haeunName = "name";
  type Json = "json";
  const json: Json = "json";
  type Boal = true;
}
