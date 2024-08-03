const codeing = ["js", "ruby", "java", "python", "cpp"];

// const mappedCodeing = codeing.map(language => language.toUpperCase());

// console.log(mappedCodeing);

// console.log(codeing);

// codeing.forEach(function (item) {
//   console.log(item);
// });

// codeing.forEach((item) => {
//   console.log(item);
// });

// function printMe (item) {
//     console.log(item);
// }

// codeing.forEach(printMe)

codeing.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [

  {
    languageName: "javsascript",
    languageFileName: "Js",
  },
  {
    languageName: "Typescript",
    languageFileName: "Ts",
  },
  {
    languageName: "Python",
    languageFileName: "Py",
  },
  {
    languageName: "Ruby",
    languageFileName: "Ry",
  },
  
];

myCoding.forEach((item) => {
    console.log(item.languageName);
})
