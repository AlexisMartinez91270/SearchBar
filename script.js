"use strict";

function search_value() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let v = document.getElementsByClassName("val");

  //1.reset list
  for (let i = 0; i < v.length; i++) {
    v[i].style.display = "none";
  }
  //2. véeifier que l'utilisateur a entré qq chose (au cas ou il est revenu en arriere (backspace))
  if (input.length < 1) return;
  //3. rendre visible les éléments qui correspondent à l'entrée utilisateur
  for (let i = 0; i < v.length; i++) {
    let listelem = v[i].innerHTML.toLowerCase();
    if (listelem.startsWith(input)) {
      v[i].style.display = "list-item";
    }
  }
}
