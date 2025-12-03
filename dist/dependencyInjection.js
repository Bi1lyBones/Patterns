"use strict";
class User {
    constructor() {
        console.log("User created");
    }
}
class Post {
    constructor(user) {
        this.user = user;
        console.log("Post Created");
    }
}
class Product {
    constructor(user) {
        this.user = user;
        console.log("Product created");
    }
}
const user = new User();
const post = new Post(user);
const product = new Product(user);
console.log(post);
console.log(product);
