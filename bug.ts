function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //This will raise an error because the function expects a string not an array of strings