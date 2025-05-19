 var obj = {name : "priya",dept: "maths"}

 for (var key in obj){
    console.log(key)
    console.log(obj[key])

}
// for(var key of arr){
//      console.log(key)
// }

// spread operator

var arr =[1, 2, 3, 4, 5]
var arr2 =[...arr, 6, 7, 8]
console.log(arr2)
// destructuring operator
var marks = [90, 97, 99, 98, 100]

var[m1, m2, m3, m4, m5] =marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)

//callback function
function saybye(){
    console.log("bye")
}
function demo(name, callback){
    console.log("hello" + name)
    callback()
}
demo("priya", saybye);

const btn = document.getElementById('btn');
btn.onclick = function(){
    window.open("https://www.instagram.com/")
}

