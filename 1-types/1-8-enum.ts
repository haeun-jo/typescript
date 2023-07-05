{
  /**
   * Enum - 관련된 상수값 관리
   *      - 가능하면 쓰지 않는 것이 좋음!!!!!!!!
   *      - 타입이 정확하게 보장되지가 않음
   */

  // Javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday, // 0 1부터 시작하고 싶으면 Monday = 1
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }
  // 값을 따로 정하지 않으면 자동으로 0부터 지정됨
  // 스트링 값은 각각 정해줘야함
  console.log(Days.Friday);
  let day = Days.Wednesday;
  console.log(day);
  day = 7; // 다른 값 할당 가능, 타입이 정확하게 보장되지가 않음

  type DaysOfWeek = // 차라리 Union Type으로 관리하기 -> 더 안전함

      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday"
      | "Sunday";
}
