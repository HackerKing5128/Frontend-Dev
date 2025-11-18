// Creating user class

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// prototype method to display user info
User.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
};

// Creating instances of User class
const user1 = new User("Alice", "alice@example.com");
const user2 = new User("Bob", "bob@example.com");

console.log(user1);
user1.displayInfo();