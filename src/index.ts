class People {
  constructor(
    private name: string,
    private height: number,
    private width: number
  ) {
  }

  showPeople() {
    console.log(`Your name is ${this.name} and width and height is ${this.height}x ${this.width}`)
  }
}

const people = new People('Edson', 1.7, 60);

console.log(people)

people.showPeople();