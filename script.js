// localStorage.setItem('nombre', 'andy');

// localStorage.removeItem('nombre')

// localStorage.clear();

// console.log(localStorage.getItem('nombre'));

// const people = [
//   {
//     name: "andy",
//     lastName: "ruz",
//     age: 19,
//   },
//   {
//     name: "facundo",
//     lastName: "real",
//     age: 20,
//   },
//   {
//     name: "diego",
//     lastName: "portales",
//     age: 59,
//   },
// ];

// localStorage.setItem("people", JSON.stringify(people));

// const data = JSON.parse(localStorage.getItem('people'));

// console.log(data);

const input = document.querySelector(".input");
const button = document.querySelector(".button");

let names = JSON.parse(localStorage.getItem("names")) || [];

button.addEventListener("click", () => {
  const inputValue = input.value;

  if (inputValue == "") {
    console.log("no");
    return;
  }

  names.push({
    name: inputValue,
  });

  localStorage.setItem("names", JSON.stringify(names));

  names.forEach((element) => {
    if (element.name == "andy" && inputValue == "andy") {
      alert("¡Bienvenido!");
    }
  });

  console.log(JSON.parse(localStorage.getItem("names")));
});

// localStorage.clear();

console.log(JSON.parse(localStorage.getItem("names")));

// localStorage.setItem('names', JSON.stringify(names))

// sessionStorage.setItem("nombre", "andy");

// console.log(sessionStorage.getItem('nombre'));
