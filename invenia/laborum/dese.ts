// Define a class to encapsulate user properties and methods
class User {
  // Property to hold the user's name
  private name: string;

  // Constructor to set the user's name upon object creation
  constructor(name: string) {
    this.name = name;
  }

  // Method to get the user's name
  public getName(): string {
    return this.name;
  }

  // Method to set the user's name
  public setName(name: string): void {
    this.name = name;
  }
}

// Create a new User instance with the name 'Jobayer'
const user = new User('Jobayer');

// Output the user's name
console.log(user.getName());
