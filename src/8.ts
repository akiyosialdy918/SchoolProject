class User {
  id!: number;
  name!: string;
  age!: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const users = [
  new User(1, "John Doe", 32),
  new User(2, "Jane Doe", 27),
  new User(3, "Bob Smith", 45),
];
