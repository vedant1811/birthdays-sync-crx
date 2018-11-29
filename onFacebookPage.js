/*
Birthday with age HTML structure:
  #birthdays_content
    #birthdays_today_card
    div
      ul
        li
          ...
            div
              div
                a {name}
              div {age}


Birthday without age HTML structure:
  #birthdays_content
    #birthdays_today_card
    div
      ul
        li
          ...
            div
              a {name}
            form

*/


(function todaysBirthdays() {
  console.log('todaysBirthdays');

  var hash = {};

  var list = birthdays_today_card.nextSibling.querySelector('ul').children;

  for (listItem of list) {
    var profileAnchor = listItem.querySelector('a');
    var name = profileAnchor.textContent;
    var ageString = profileAnchor.parentNode.nextSibling.textContent; // can be blank
    console.log(name + " is " + ageString);
    hash[name] = ageString;
  }

  return hash;
}) ();
