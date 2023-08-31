var buttonItem = document.getElementById("button");
var hiddenShowItem = document.getElementById("quote");

buttonItem.addEventListener("click", function () {
  if ((hiddenShowItem.style.display = "block")) {
    hiddenShowItem.style.display = "none";
  }
});


buttonItem.addEventListener("dblclick", function () {
  if ((hiddenShowItem.style.display = "none")) {
      hiddenShowItem.style.display = "block"; 
  }
});
