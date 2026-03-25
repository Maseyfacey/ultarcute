const loader = document.getElementById("loader");
const main = document.getElementById("main");

setTimeout(() => {
  loader.style.display = "none";
  main.classList.remove("hidden");
}, 1000);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let input = document.getElementById("input").value;

  if (!input.startsWith("http")) {
    input = "https://www.google.com/search?q=" + encodeURIComponent(input);
  }

  const encoded = __uv$config.encodeUrl(input);

  window.location.href = "/service/" + encoded;
});