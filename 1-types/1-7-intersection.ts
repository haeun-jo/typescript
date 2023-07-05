{
  /**
   *  Intersection Types: &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWorker(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.score, person.work());
  }

  internWorker({
    name: "haeun",
    score: 100,
    employeeId: 19002518,
    work: () => {
      console.log("work!!!!");
    },
  });
}
