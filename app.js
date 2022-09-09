// function abc(a, b, c) {
//   return a + b + c;
// }

// function xyz(a) {
//   console.log(a);
// }

// xyz(abc(1, 2, 3));

// function abc (){
//     function xyz(){

//     }
// }
// xyz()

// var a = ["", 1, 0, -1, undefined, true, false, null, " "];

// if ([]) {
//   console.log("if Works");
// }

// var
// reinitializable (y)
// redeclaration (y)
// hoisting (y)
// block scope (n)

// let
// reinitializable (n)
// redeclaration (y)
// hoisting (n)
// block scope (y)

// const
// reinitializable (n)
// redeclaration (n)
// hoisting (n)
// block scope (y)

// var a = "ABC";
// var a = "XYZ";

// console.log(a);

// let a = "ABC";
// let a = "XYZ";
// console.log(a);

// const a = "ABC";
// const a = "XYZ";
// console.log(a);

// var a = "abc";
// a = 123;
// console.log(a);

// let a = "abc";
// a = 123;
// console.log(a);

// const a = "abc";
// a = 123;
// console.log(a);

// if (true) {
//   var a = "ABC";
// }
// console.log(a);

// abc();
// function abc() {
//   var a = "ABC";
// }
// console.log(a);

// if (true) {
//   var b = "XYZ";
// }
// console.log(b);

// if (true) {
//   let a = "abc";
// }
// console.log(a);

//=================== template literals ====================

//=================== Ternary Operators ====================

// if (true) {
//   if (true) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// } else {
//   console.log("parent false");
// }
// true
//   ? true
//     ? console.log("true")
//     : console.log("false")
//   : console.log("parent false");

// let bool = true;
// let num1 = undefined;
// let num2 = 20;
// let a = bool ? "abc" : "xyz";
// console.log(a);

// let b = bool && "ABC";
// let c = num1 + num2 || 0;

// console.log(b);
// console.log(c);
// console.log(typeof c);

//=================== Pass by Value ====================
//=================== Pass by Refrence ====================

// let a = "abc";
// a = 123;

// console.log(a);

// const a = "abc";
// a = "xyz";

// const a = ["xyz"];

// a[0] = "abc";

// console.log(a);

// let a = [1, 2, 3];

// let b = a;
// b.splice(1, 1);

// // b[0] = 123;

// console.log(a);

// const a = {
//   id: 1,
//   name: "ABC",
//   abc : function(){

// };

// const b = a;

// b.name = "XYZ";

// console.log(a);

//=================== Spread Operators ====================

// const a = [1, 2, 3];
// const c = { name: "abc" };
// const b = [...a];
// // const b = new Array(...a);
// b.splice(1, 1);
// console.log(b);
// console.log(a);

// e.g

// let a = [{ id: 1 }, { id: 2 }, { id: 3 }];

// // let b = [...a];
// let b = JSON.parse(JSON.stringify(a));
// b[0].name = "ABC";

// console.log(b[1]);
//=================== Rest Operators ====================
// let b =[...arr]
// function abc(a, ...rest) {
//   console.log(a);
//   console.log(rest);
// }
// abc(1, 2, 3, 4, 5, 6, 3, 5);

// function abc(a, ...abc) {
//   console.log(abc);
// }
// abc(123, 456, 789, 123, 456, 789);

//=================== Array functions ====================
//=================== map ====================
let a = [
  {
    id: 1,
    name: "ABC",
    category: "A",
    isApproved: false,
  },
  {
    id: 2,
    name: "MNO",
    category: "A",
    isApproved: false,
  },
  {
    id: 3,
    name: "POI",
    category: "A",
    isApproved: true,
  },
  {
    id: 4,
    name: "XYZ",
    category: "A",
    isApproved: false,
  },
];

let numArr = [10, 20, 30, 40, 50, 60];
// a.map(function (x, i, lst) {
//   console.log(x);
//   console.log(i);
// });

//=================== filter ====================

// let b = a.filter(function (x, i) {
//   if (x.category == "A") {
//     console.log(i);
//     x.in = i;
//     return x;
//   }
// });
// console.log(b);

//=================== forEach ====================

// a.forEach(function (x, i) {
//   x.inst = "SAIMS";
// });
// console.log(a);

//=================== some ====================

// let b = a.some(function (x, i) {
//   if (x.isApproved) {
//     return x;
//   }
// });

// console.log(b);

//=================== find ====================

// let b = a.find(function (x, i) {
//   if (x.id == 3) {
//     return x;
//   }
// });

// console.log(b);
let mobiles = [
  {
    id: 1,
    companyName: "Iphone",
    Model: "Iphone X",
    Ram: "3 GB",
    Rom: "64 GB",
    Price: "$218",
  },
  {
    id: 2,
    companyName: "Iphone",
    Model: "Iphone 12",
    Ram: "4 GB",
    Rom: "128 GB",
    Price: "$799",
  },
  {
    id: 3,
    companyName: "Iphone",
    Model: "Iphone 13",
    Ram: "4 GB",
    Rom: "128 GB",
    Price: "$1699",
  },
  {
    id: 4,
    companyName: "Samsung",
    Model: "Galaxy Note 5",
    Ram: "4 GB",
    Rom: "32 GB",
    Price: "$101",
  },
  {
    id: 5,
    companyName: "Samsung",
    Model: "Galaxy Note 8",
    Ram: "6 GB",
    Rom: "64 GB",
    Price: "$419",
  },
  {
    id: 6,
    companyName: "Samsung",
    Model: "Galaxy S22",
    Ram: "8 GB",
    Rom: "128 GB",
    Price: "$799",
  },
  {
    id: 7,
    companyName: "Oppo",
    Model: "Reno 8",
    Ram: "8 GB",
    Rom: "128 GB",
    Price: "$399",
  },
  {
    id: 8,
    companyName: "Oppo",
    Model: "A36",
    Ram: "8 GB",
    Rom: "256 GB",
    Price: "$353",
  },
  {
    id: 9,
    companyName: "Oppo",
    Model: "K10",
    Ram: "6 GB",
    Rom: "128 GB",
    Price: "$220",
  },
  {
    id: 10,
    companyName: "Google",
    Model: "Pixel 6",
    Ram: "8 GB",
    Rom: "128 GB",
    Price: "$599",
  },
  {
    id: 11,
    companyName: "Google",
    Model: "Pixel 7",
    Ram: "8 GB",
    Rom: "128 GB",
    Price: "$400",
  },
  {
    id: 12,
    companyName: "Google",
    Model: "Pixel 8",
    Ram: "8 GB",
    Rom: "256 GB",
    Price: "$600",
  },
  {
    id: 14,
    companyName: "Infinix",
    Model: "Hot 11",
    Ram: "4 GB",
    Rom: "64 GB",
    Price: "$128",
  },
  {
    id: 15,
    companyName: "Infinix",
    Model: "Note 11",
    Ram: "6 GB",
    Rom: "128 GB",
    Price: "$229",
  },
  {
    id: 16,
    companyName: "Xiaomi",
    Model: "Redmi 10",
    Ram: "4 GB",
    Rom: "64 GB",
    Price: "$173",
  },
  {
    id: 17,
    companyName: "Xiaomi",
    Model: "Redmi Note 10",
    Ram: "4 GB",
    Rom: "128 GB",
    Price: "$182",
  },
  {
    id: 18,
    companyName: "Xiaomi",
    Model: "Redmi K50",
    Ram: "8 GB",
    Rom: "128 GB",
    Price: "$368",
  },
];

// let filteredArray = [];
// function init() {
//   let a = mobiles.map(function (x) {
//     return x.companyName;
//   });
//   let b = [...new Set(a)];
//   console.log(b);
// }
// function searchMob(a) {
//   filteredArray = mobiles
//     .map(function (x) {
//       if (x.companyName == a) {
//         return x["Model"];
//       }
//     })
//     .filter(Boolean);
//   console.log(filteredArray);
// }

// init();
// searchMob("Oppo");

//=================== findIndex ====================

// let i = mobiles.findIndex(function (x) {
//   return x.id == 16 ? x : null;
// });
// console.log(i);

//=================== functions ====================

// 1: Arrow
// 2: Callback
// 3: higher order
// 4: Closures



//=================== arrow functions ====================
// function abc(a) {
//   console.log(a);
// }
// abc("Message");

// let abc = (a) => {
//   console.log(a);
// };
// abc(a);

// let abc = a => {
//   console.log(a);
// };
// abc(a);

// let abc = a => {
//   return a
// } 
// console.log(abc('Message'))



// let abc = (_) => _
// console.log(abc('Message'))

// let bool = false

// let c = bool && ""

// let arr = mobiles.filter(x=>x.companyName == "Xiaomi")
// console.log(arr)


//=================== higher order & callback function ====================
// let abc = (a)=>{
  //   return a
  // }
  
  // let xyz = (a)=>{
    //   return a*2
    // }
    

// console.log(xyz(abc(10)))


// let abc = ()=>{
  //   console.log('abc')
  //   return ()=>{
    //     console.log("xyz")
//   }
// }



// abc()()













//=================== De Structuring ====================

let ab = ['a','b','c','d']
let obj = {
  id:1,
  name:'ABC',
  category:"A"
}



//=================== Promise ====================
//=================== async await ====================
// var a=undefined
// let a;
// console.log(a);
// a = "sad";
// a = "sad";
// console.log(a);
//let
//const
// var
// function
// class
// const arr = [1, 23, 3, [2, 3], [3, 2, 3]]; //
// const a = [...arr];
// console.log(a);
