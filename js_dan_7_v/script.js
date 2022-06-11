"use strict";

let number = 10.7;

console.log(-8 / 0); // Infinity => bu cheksizni ma'nosini bildiradi
console.log("Samardin" * 8); // NaN => bu notug'ri degan yani bu son emas digan ma'no beradi

// string
const cileantName = "Samardin va hokozlarlardan iborat suz"; // qoidasini bilasan

// Boolean => asaon true yoki false degan javob qaytaradi
const isMarriened = false;
const isCircleEarth = true;
// ---------------------------------------

// null
console.log(sasjadjas); // bu yerda ardoimim hech qanday uzgaruvchi yuq bulsa chiqarib beradi Null degan

// undefained
let und;
console.log(und); // bu yerda letda berlagan qiymat hechni yozmasak chiqadi

// object
const thief = {
  // bu yerda men thief tarjima ug'ri degan va bu shunchaki masala
  // "key: value"       "key;" => bu yerda kalit suzi yani (age, jacet, isLong) va "value" => yani (30, black, false) degani
  age: 30, // number
  jacket: "black", // string
  isLong: false, // boolean
};
console.log(thief);

// array
//  key =>        0       1        2     3   4   5     => bular kalit suzi har doim shunday buladi va array ishlatkanmizda
const colors = ["red", "yelov", "blue", 10, [], {}]; // bu yerda [] => bu belgi massiv {} => bu belgi obeyekt degan ma'no bildiradi
console.log(colors[(0, 1, 5, 4)]);

