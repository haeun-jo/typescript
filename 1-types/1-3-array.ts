{
  // Array
  const fruits: string[] = ["tomato", "banana"];
  const scores: Array<number> = [1, 4, 5];
  function printArray(fruits: readonly string[]) {}
  // 주어진 데이터를 변경하거나 업데이트 할 수가 없을 수도 있다.
  // 이럴 때는 전달 된 인자를 함수 내부에서 변경하지 않도록 하기 위해서 타입으로 보장할 수 있는 방법이 있다.
  // readonly를 붙여준다. 인자를 변경 할 수 없고 데이터를 읽을 수만 있다.
  // 두가지 표현 방식에 있어서 차이점이 있다면 readonly는 string[] 앞에만 사용 가능하다.
  // 따라서 코드를 일관성있게 사용하려면 Array<number>보다는 string[] 을 추천한다.
  // object의 불변성을 유지 한다는 것은 굉장히 중요하다. 그래서 readonly가 많이 사용된다.

  // Tuple - 사용하는 것을 권장하지 않음!!!! interface, type alias, class로 대체하기!!!
  // 서로 다른 타입의 데이터를 담을 수 있다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
