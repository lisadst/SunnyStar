
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("form").classList.add("hidden");
    document.getElementById("remerciements").classList.remove("hidden");
  });