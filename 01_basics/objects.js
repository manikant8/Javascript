const mySym = Symbol("key1")

const userObj = {
    name: "Manikant",
    "full name":"Manikant Sharma",
    location: "bhubaneswar",
    isLoggedIn: false,
    [mySym] : "mykey1"  //wrong,

};
console.log(userObj.name); //when . is used, it takes key as string internally
console.log(userObj["name"]); //when [] is usede we have to pass key as string
console.log(userObj["full name"]);
// console.log(userObj[mySym]);

userObj.location = "odissa"   //changing key value 
// console.log(userObj);

// freeze() will not allow to change object
// Object.freeze(userObj)

userObj.isLoggedIn = true   //changing key value 
// console.log(userObj);


// adding new property(function)
userObj.greeting = function(){
    console.log(`hello! ${this.name}`);
}
console.log(userObj.greeting());
