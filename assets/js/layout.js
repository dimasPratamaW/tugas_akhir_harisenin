const navbar = document.querySelector("nav");
const navToggler = document.querySelector("[data-toggler-nav]");
const logo = document.querySelector("[data-logo]");
const listItem = document.querySelectorAll("[data-list-footer]");

// function menu navbar
function handleToggler(e) {
  console.log(e);
  if (e.name === "menu") {
    e.name = "close";
    navbar.classList.remove("hidden");
  } else {
    e.name = "menu";
    navbar.classList.add("hidden");
  }
}
//List item Footer ketika di hoover
listItem.forEach((e) => {
  e.childNodes.forEach((elm) => {
    elm.addEventListener("mouseover", () => {
      elm.classList.add("text-gray-200");
    });
    elm.addEventListener("mouseout", () => {
      elm.classList.remove("text-gray-200");
    });
  });
});
// console.log(item);
// logo social media footer
const logoHover = logo.childNodes;
logoHover.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.classList.add("text-gray-200");
  });
  e.addEventListener("mouseout", () => {
    e.classList.remove("text-gray-200");
  });
});

const toggleButton = document.getElementById("toggleButton");
const content = document.getElementById("content");

// Add click event listener to the link
toggleButton.addEventListener("click", function (event) {
  // Prevent default link behavior
  event.preventDefault();

  // Toggle the visibility of the content div
  content.classList.toggle("hidden");
});
