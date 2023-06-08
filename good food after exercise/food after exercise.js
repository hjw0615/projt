const list = document.querySelectorAll(".item");
const $modal = document.getElementById("modal");
const ins = document.querySelector(".in");
const down = document.querySelector(".close");

const toJSON = (response) => response.json();
const $fetch = (path) => fetch(path).then(toJSON);

const food = await $fetch("food.json");

$modal.addEventListener("click", function (event) {
  if (event.target === $modal) {
    // $modal.style.
    $modal.close();
  }
});

list.forEach((e, idx) => {
  e.addEventListener("click", function () {
    $modal.showModal();
    console.log(idx);
    if (e) {
      ins.textContent = food[idx].explanation;
    }
  });
});
