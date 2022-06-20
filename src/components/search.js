$("#search-field").keyup(function() {
    // Kontrollerar så att värdet i input-fältet innehåller fler tecken än 3
    console.log("test");
    if ($("#search-field").val().length >= 3) {
  
      // Skapar variabler som innehåller användarens söksträng respektive url:en till API:t
      let searchString = $("#search-field").val()
      /*let queryString = "http://www.omdbapi.com/?s=" + searchString + "&r=json&apikey=c5b91e23";*/
  
      $.ajax({
        url: queryString,
        dataType: "JSON"
      }).done(function(data) {
  
        //Loopar igenom varje resultat av söksträngen
        for (let i in data.Search) {
          //Skapar ett li-element för varje sökresultat och lägger till det i ul-elementet
          let liItem = $("<li>");
          $("#movie-list").append(liItem);
  
          // Lägger till varje sökresultats titel i  li-elementet
          liItem.text(data.Search[i].Title);
  
          // Sparar varje sökresultats bild i en variabel och lägger till det i li-elementet
          let picture = $("<img>").attr("src", data.Search[i].Poster);
          liItem.append(picture);
  
          // Sparar varje sökresultats utgivningsår och lägger till det till li-elementet
          let year = $("<span>").text(data.Search[i].Year);
          liItem.append(year);
        }
      });
  
      // Tömmer ul-elementet på barn (li-element) varje gång en ny söksträng skrivs in i input-fältet
      $("#movie-list").empty();
  
    // Ifall längen på sökresultatet är 0 tecken så töms listan
    } else if ($("#search-field").val().length == 0)  {
      $("#movie-list").empty();
    };
  });