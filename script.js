"use strict";

let list = $("#myList");

function search_value() {
  let input = $("#searchbar").val();
  input = input.toLowerCase();
  let v = $(".val");
  let result = [];

  //1.reset list
  for (let i = 0; i < v.length; i++) {
    $(v[i]).hide();
  }
  //2. vérifier que l'utilisateur a entré qq chose (au cas ou il est revenu en arriere (backspace))
  if (input.length < 1) return;
  //3. créer nouvelle liste contenant seulement les éléments nécessaire (mettre lettres que celles saisie par l'utilisateur)
  for (let i = 0; i < valeurs.length; i++) {
    let listelem = valeurs[i].toLowerCase();
    if (listelem.startsWith(input)) {
      result.push(valeurs[i]);
    }
  }
  $(list).text("");
  console.log(result);

  result.forEach((item) => {
    let li = document.createElement("li");
    $(li).addClass("val");
    $(li).text(item);
    $(list).append(li);
    console.log(list.text());
  });

  //4. rendre visible les éléments qui correspondent à l'entrée utilisateur
  for (let y = 0; y < v.length; y++) {
    $(v[y]).show();
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
