class Instructor {
  constructor(name) {
    this.name = name
  }

  grade(student) {
    let score = Math.random();
    
    if (student.grade > 70 && student.grade > 0) {
      student.graduate();
    } else if( student.grade < 0) {
      student.grade = 20;
      console.log(`${student.name}'s grade reset to ${student.grade}`);
      this.grade(student);
    } else if (score > 0.5) {
      student.grade += Math.floor(Math.random()*25);
      console.log(`${student.name}'s grade raised to ${student.grade}`);
      this.grade(student);
    } else {
      student.grade -= Math.floor(Math.random()*25);
      console.log(`${student.name}'s grade lowered to ${student.grade}`);
      this.grade(student);
    }
  }
}

class Student {
  constructor(attrs) {
    this.name = attrs.name;
    this.grade = 20;
  }
  
  graduate() {
    if(this.grade > 70) {
      console.log(`${this.name} has somehow graduated! weeeeee`);
    } else {
      sensei.grade();
    }
  }
}

const sensei = new Instructor({
  name: 'Osada Sensei'
})

const seito = new Student({
  name: 'Jesse'
})

sensei.grade(seito);