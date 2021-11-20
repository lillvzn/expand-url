"use strict";

const input = document.querySelector("#input");
const expandBtn = document.querySelector("#btn-expand");
const result = document.querySelector("#result-url");

expandBtn.addEventListener("click", () => {
  result.innerText = "Loading...";
  fetch(`/expand?shortUrl=${input.value}`)
    .then((res) => res.text())
    .then((text) => {
      result.innerText = text;
    })
    .catch((err) => {
      console.log(err);
      result.innerText = "Error";
    });
});
