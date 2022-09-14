var mess_a = document.getElementById("cau-a");
var mess_b = document.getElementById("cau-b");
var mess_c = document.getElementById("cau-c");

var users = [
  {
    id: 1,
    first_name: "Eamon",
    last_name: "Harhoff",
    email: "eharhoff0@imageshack.us",
    gender: "Male",
    age: 76,
    salary: 18888,
  },
  {
    id: 2,
    first_name: "Laney",
    last_name: "Whittam",
    email: "lwhittam1@issuu.com",
    gender: "Female",
    age: 39,
    salary: 15018,
  },
  {
    id: 3,
    first_name: "Lynett",
    last_name: "Twinberrow",
    email: "ltwinberrow2@gov.uk",
    gender: "Female",
    age: 99,
    salary: 13343,
  },
];

var myFilter = users.filter((value) => {
  return value.gender.toLowerCase() == "female" && value.age < 40;
});

console.log("- Cac users la Male va tuoi nho hon 40:");
show(myFilter);

//lay ten day du cua user
var myMap = users.map((value) => {
  return value.first_name + " " + value.last_name;
});
console.log("- Ten day du cua cac user:");
show(myMap);

//tinh trun gbinh do tuoi cac user
var myReduce = users.reduce((acc, currValue) => {
  return acc + currValue.age;
}, 0);

var medium = myReduce / users.length;
console.log("- Do tuoi trung binh cac users:");
console.log(medium.toFixed(2));

//hien thi thong tin trong mang
function show(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}
