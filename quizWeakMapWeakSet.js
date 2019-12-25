"use strick";

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let isRead = new WeakSet();

function read(message) {
    isRead.add(message);
}


read(messages[0]);

alert(isRead.has(messages[0]));