// create and remove the element

// // create
const ul = document.querySelector("ul");

let button = document.querySelector(".clickMe");

button.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "something New Added";
  ul.append(li);
});

// removing

let element = document.querySelectorAll("li");

element.forEach(function (element) {
  element.addEventListener("click", (e) => {
    e.target.remove();
  });
});
