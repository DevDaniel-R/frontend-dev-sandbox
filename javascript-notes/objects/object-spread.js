// Merging two objects together with new method assign.

const user = {
    name: "",
    username: "",
    email: "",
    password: ""
};

const newUser = {
    username: "ReedBarger",
    email: "reedbarger@yahoo.com",
    password: "mypassword"
}

Object.assign({}, user, newUser);