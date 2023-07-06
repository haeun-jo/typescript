{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // encapsulation을 이용해서 외부에서 이용하면 안되는, 설정하면 안되는 것을 가린다. 가리는 방법으로는 아래 3가지
  // public
  // private
  // protected: 나중에 상속 할 때 외부에선 접근 할 수 없지만 이 클래스를 상속한 자식 클래스에서만 접근이 가능하도록 설정 할 수 있음

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0; // 커피콩을 외부에서 직접적으로 채우면 안됨

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    // static 키워드를 사용하여 오브젝트를 만들 수 있는 함수를 제공한다면 이런 경우는 생성자를 사용해서 생성하는 것을 금지하는 경우이다.
    // 생성자 함수를 private 하게 만듬
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      // 이 함수를 통해서 커피콩이 채워지도록, 커피콩의 유효성 체크 또한 가능(안전성 높아짐)
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee baens!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeeMaker(32);
  CoffeeMaker.makeMachine(32);
  // maker.fillCoffeeBeans(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -34; // invalid
  // CoffeeMaker.BEANS_GRAMM_PER_SHOT; // 보이면 안됨

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 6;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) `에러메세지,,`;

      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Jo", "Haeun");
  console.log("user", user.fullName); // Jo Haeun
  // user.firstName = "Steve"; // Steve Haeun 으로 출력되지 않는 이유는 한번 할당되면 그대로 계속 지정되어 있다, 이럴 경우 Getter를 사용함
  console.log("user", user.fullName); // Jo Haeun
  user.age = 6;
}
