{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // class 안에서는 let이나 const, function과 같은 키워드 작성 X
    // 내 class 안에 있는 멤버변수에 접근하려면 변수 앞에 this.를 작성해줘야함
    static BEANS_GRAMM_PER_SHOT: number = 7;
    // class level : class와 연결이 되어 있기 때문에 오브젝트마다 만들어지거나 생성되지 않음, this 대신에 앞에 클래스이름을 붙여줌
    coffeeBeans: number = 0; // instance (object) level

    constructor(beans: number) {
      this.coffeeBeans = beans;
    } // constructor 함수는 이 클래스를 가지고 오브젝트, 인스턴스를 생성할 때 항상 호출되는 함수

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      // class level 에서 바로 함수 호출하고 싶을 때 static 사용
      return new CoffeeMaker(coffeeBeans);
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

  const maker = new CoffeeMaker(7);
  const maker2 = CoffeeMaker.makeMachine(32);
}
