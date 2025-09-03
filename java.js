const hearts = document.getElementsByClassName("heart");
let heartCount = parseInt(document.getElementById("heart-count").innerText);
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    // console.log("clicked");
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
  });
}
const copys = document.getElementsByClassName("copy");

let copyCount = parseInt(document.getElementById("copy-count").innerText);
for (let copy of copys) {
  copy.addEventListener("click", function () {
    // console.log("clicked");

    copyCount++;
    alert("Number is copied");
    document.getElementById("copy-count").innerText = copyCount;
  });
}
document.querySelectorAll(".copy").forEach((button) => {
  button.addEventListener("click", () => {
    const numberEl = button.closest(".rounded-lg").querySelector(".num-copy");
    if (!numberEl) return;
    const number = numberEl.innerText.trim();
    navigator.clipboard.writeText(number);
  });
});

let coin = parseInt(document.getElementById("coin").innerText);
document.querySelectorAll(".call").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".rounded-lg");
    if (!card) return;

    const serviceName = card.querySelector("h2").innerText;
    const number = card.querySelector(".num-copy").innerText;

    if (coin < 20) {
      alert("Not enough coins to call");
      return;
    }

    coin = coin - 20;
    document.getElementById("coin").innerText = coin;

    alert(`📞 Calling ${serviceName} ${number}...`);
    let update = document.getElementById("update");
    const history = document.createElement("div");
    history.innerHTML = ` <div class="flex gap-2">
        <p>${serviceName} <br> ${number}</p>
        <p>${new Date().toLocaleTimeString()}</p>

    </div>`;
    update.appendChild(history);
  });
});
