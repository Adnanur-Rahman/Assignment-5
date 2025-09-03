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
const calls = document.getElementsByClassName("call");
let coin = parseInt(document.getElementById("coin").innerText);
for (let call of calls) {
  call.addEventListener("click", function () {
    if (coin < 20) {
      alert("Not enough coin to call");
    } else {
      coin = coin - 20;
      document.getElementById("coin").innerText = copyCount;
      alert();
    }
  });
}
