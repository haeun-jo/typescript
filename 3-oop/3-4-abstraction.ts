{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    // CoffeeMachine 이라는 클래스는 CoffeeMaker 인터페이스를 구현하는 아이이다.
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine,,,");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots},,,`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee baens!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }
    private preheat(): void {
      console.log("heating up,,,");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots,,,`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // maker의 타입은 CoffeeMaker, CoffeeMachine 둘 다 가능
  maker.makeCoffee(68);
  maker.fillCoffeeBeans(34);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  // 차이점은 CoffeeMaker라는 인터페이스에서 정의한 함수들만 사용 가능
  maker2.makeCoffee(68);
  // maker2.fillCoffeeBeans(34);

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker3.makeCoffee(68);
  maker3.fillCoffeeBeans(34);
  maker3.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(43);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(43);
      console.log(coffee);
      this.machine.clean();
      this.machine.fillCoffeeBeans(65);
      this.machine.makeCoffee(3);
    }
  }

  const maker5: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker5);
  const pro = new ProBarista(maker5);

  // 동일한 오브젝트의 인스턴스 일지라도 이 오브젝트는 두가지의 인터페이스를 제공하기 때문에 각각의 인터페이스에 규약된 함수들만 접근 가능하다
  amateur.makeCoffee();
  pro.makeCoffee();
}
