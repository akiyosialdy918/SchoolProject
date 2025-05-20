class MyClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const myInstance = new MyClass("Alice");
myInstance.greet();
