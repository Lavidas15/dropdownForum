let div = document.querySelector("#pick");
let list = document.querySelectorAll("li");
let body = document.querySelector("body");
let ul = document.querySelector("ul");
ul.style.visibility = "hidden";
colorHover();

function colorHover() {
  div.addEventListener("mouseover", () => {
    ul.style.visibility = "visible";
    list.forEach((item) => {
      div.style.backgroundColor = "red";
      item.style.visibility = "visible";
      if (div.innerHTML == item.innerHTML) {
        item.style.backgroundColor = "purple";
      } else {
        item.style.backgroundColor = "white";
        item.className = "wrong";
      }
      item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "purple";
        ul.style.visibility = "visible";
      });
      item.addEventListener("mouseout", () => {
        div.style.backgroundColor = "white";
        item.style.backgroundColor = "white";
        ul.style.visibility = "hidden";
      });
    });
  });
}

list.forEach((item) => {
  item.addEventListener("click", () => {
    div.innerHTML = item.innerHTML;
    item.className = "new";
    ul.style.visibility = "hidden";
  });
});
body.addEventListener("click", () => {
  list.forEach((item) => {
    item.style.visibility = "hidden";
    ul.style.visibility = "hidden";
  });
});
