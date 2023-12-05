"use strict";

function handleLikePost(step) {
    let likeCount = 0;
    return function addLike() {
        likeCount += step;
        return likeCount;
    }
}

const like = handleLikePost(2);
const doubleLike = handleLikePost(3)

console.log(like());
console.log(like());
console.log(like());
console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());

// 1) Closures are a property of JS functions
// 2) Execute function in a different scope than originally defined
// 3) Closures matter because they allow us to remember or keep track of certain values which is very powerful.
