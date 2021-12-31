"use strict";

function search_value() {
  let input = $("#searchbar").val();
  input = input.toLowerCase();
  let v = $(".val");

  //1.reset list
  for (let i = 0; i < v.length; i++) {
    $(v[i]).hide();
  }
  //2. véeifier que l'utilisateur a entré qq chose (au cas ou il est revenu en arriere (backspace))
  if (input.length < 1) return;
  //3. rendre visible les éléments qui correspondent à l'entrée utilisateur
  for (let i = 0; i < v.length; i++) {
    let listelem = v[i].innerHTML.toLowerCase();
    if (listelem.startsWith(input)) {
      $(v[i]).show();
    }
  }
}

let valeurs = [
  "Beauty",
  "Birth",
  "Chastity",
  "Chivalry",
  "Courage",
  "Enthusiasm",
  "Faith",
  "Fertility",
  "Gentleness",
  "Glory",
  "Greed",
  "Grief",
  "Hope",
  "Immortality",
  "Intelligence",
  "Joy",
  "Justice",
  "Knowledge",
  "Labor",
  "Light",
  "Longevity",
  "Love",
  "Loyalty",
  "Luck",
  "Magnanimity",
  "Majesty",
  "Merit",
  "Obediance",
  "Parenthood",
  "Patiente",
  "Peace",
  "Power",
  "Prophecy",
  "Prosperity",
  "Protection",
  "Prudence",
  "Purity",
  "Sacrifice",
  "Secrecy",
  "Sovereignty",
  "Spirit",
  "Strenght",
  "Temperance",
  "Victory",
  "Vigilance",
  "Virility",
  "Virtue",
  "Warrior",
  "Wealth",
  "Widsom",
];

let list = $("#myList");

const loadList = function () {
  valeurs.forEach((item) => {
    let li = document.createElement("li");
    $(li).addClass("val");
    $(li).text(item);
    list.append(li);
  });
};

window.onload = loadList();
