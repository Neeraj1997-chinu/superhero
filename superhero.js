// let url='https://superheroapi.com/api/access-token/character-id';

//function load thhe list of the super hero name
function load() {
  for (let i = 1; i <= 731; i++) {
    $.ajax({
      //method
      type: "GET",
      // contentType: "application/json; charset=utf-8",
      // dataType: "dataType",
      //url of the superhero that gives json response back to us
      url: "https://www.superheroapi.com/api.php/1230190087334410/" + i,

      success: function (data) {
        // console.log(data.name);
        //creating and appending the  list attribute into the list
        $(
          `<li class='superhero' 
                onclick='get_superhero(${i})' 
                id='superhero_list${i}'><img src="${data.image.url}" style="height:40px; width:40px"> <a id="superhero_name" title="Click to see full bio" href="superhero_bio.html?id=${i}" target="_blank" >${data.name}</a></p></li>`,
          {}
        ).appendTo("#superhero_list");
        $("<button></button>", {
          text: "add to fav",
          onclick: "Add_to_fav(" + i + ")",
          class: "list_fav_button",
        }).appendTo("#superhero_list" + i);
      },
    });
  }
  document.getElementById("superhero_list").style.display = "none";
}

load();

function search() {
  var input = document.getElementById("search_superhero");
  var flter = input.value.toUpperCase();
  var superheroes = document.getElementsByClassName("superhero");
  console.log(superheroes[0].childNodes[2].innerHTML);
  var a;
  for (var i = 0; i < superheroes.length; i++) {
    a = superheroes[i].childNodes[2].innerHTML;
    if (a.toUpperCase().indexOf(flter) > -1) {
      superheroes[i].style.display = "";
    } else {
      superheroes[i].style.display = "none";
    }
  }

  if (flter === "") {
    document.getElementById("superhero_list").style.display = "none";
  } else {
    document.getElementById("superhero_list").style.display = "";
  }
}

//add to fav function
function Add_to_fav(i) {
  $.ajax({
    type: "GET",
    url: "https://www.superheroapi.com/api.php/1230190087334410/" + i,
    success: function (data) {
      // var m=document.getElementById('superhero_image');
      // m.setAttribute("src", data.image.url);

      //add the list attribute into the fav superhero list
      $("<li></li>", {
        id: "superhero" + i,
        class: "fav_superhero",
      }).appendTo("#fav_super");
      //get the image
      $("<img>", {
        src: data.image.url,
        class: "fav_superhero_image",
      }).appendTo("#superhero" + i);
      //get the name
      $(
        `<h3><a id="superhero_name" title="Click to see full bio" href="superhero_bio.html?id=${i}" target="_blank" >${data.name}</a></h3>`,
        {
          text: ``,
          // class:"fav_superhero_image",
        }
      ).appendTo("#superhero" + i);
      //button to  remove the super hero from favorite
      $("<button></button>", {
        text: "remove",
        onclick: `document.getElementById("superhero${i}").remove()`,
        class: "button",
        // class:"fav_superhero_image",
      }).appendTo("#superhero" + i);
    },
  });
}
