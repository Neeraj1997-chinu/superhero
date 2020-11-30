//get the current url 
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('id')); // "edit"
//get the id param from the url
let id=urlParams.get('id');
function onload(){
    $.ajax({
        type: "GET",
        url: "https://www.superheroapi.com/api.php/1230190087334410/"+id,
        success: function (data) {
            // var m=document.getElementById('superhero_image');
            // m.setAttribute("src", data.image.url);
            console.log(data);
            //set the super hero image
            $('#superhero_imag').attr("src",data.image.url);
            //set the super hero name
            $('#superhero_nam').text(data.name);
            //set the super hero power stats and append it into the powerastats div 
            $('<div></div>',{
                id:"power_stats",
                class:"center"
            }).appendTo('#power');
            $('<h1></h1>',{
                text:"Powerstats"
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Intelligence: "+data.powerstats.intelligence
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Strength: "+data.powerstats.strength
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Speed: "+data.powerstats.speed
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Durability: "+data.powerstats.durability
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Power: "+data.powerstats.power
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Combat: "+data.powerstats.combat
            }).appendTo('#power_stats');
            //get the biography of superhero and append  it into the biography div
            console.log(data.biography);
            $('<div></div>',{
                id:"hero_biography",
                class:"center"
            }).appendTo('#biography');
            $('<h1></h1>',{
                text:"Biography"
            }).appendTo('#hero_biography');
            $('<h4></h4>',{
                text:"Full-name: "+data.biography["full-name"]
            }).appendTo('#hero_biography');
            $('<h4></h4>',{
                text:"Alter-egos: "+data.biography["alter-egos"]
            }).appendTo('#hero_biography');
            $('<h4></h4>',{
                text:"aliases: "+data.biography.aliases
            }).appendTo('#hero_biography');
            $('<h4></h4>',{
                text:"place-of-birth: "+data.biography["place-of-birth"]
            }).appendTo('#hero_biography');
            $('<h4></h4>',{
                text:"first-appearance: "+data.biography["first-appearance"]
            }).appendTo('#hero_biography');
            $('<h4></h4>',{
                text:"Publisher: "+data.biography.publisher
            }).appendTo('#hero_biography');
            $('<h4></h4>',{
                text:"alignment: "+data.biography.alignment
            }).appendTo('#hero_biography');
            //get the apearance and its values from the url and append it into the html page
            $('<div></div>',{
                id:"hero_appearance",
                class:"center"
            }).appendTo('#appearance');
            $('<h1></h1>',{
                text:"Appearance"
            }).appendTo('#hero_appearance');
            $('<h3></h3>',{
                text:"Gender: "+data.appearance.gender
            }).appendTo('#hero_appearance');
            $('<h3></h3>',{
                text:"race: "+data.appearance.race
            }).appendTo('#hero_appearance');
            $('<h3></h3>',{
                text:"height: "+data.appearance.height
            }).appendTo('#hero_appearance');
            $('<h3></h3>',{
                text:"weight: "+data.appearance.weight
            }).appendTo('#hero_appearance');
            $('<h3></h3>',{
                text:"eye-color: "+data.appearance["eye-color"]
            }).appendTo('#hero_appearance');
            $('<h3></h3>',{
                text:"hair-color: "+data.appearance["hair-color"]
            }).appendTo('#hero_appearance');

            //get the rest basic info  like hero_relation from the json and append it into the div of html page
            $('<h3></h3>',{
                text:"ocuupation: "+data.work.occupation
            }).appendTo('#hero_info');
            $('<h3></h3>',{
                text:"group-affiliation: "+data.connections["group-affiliation"]
            }).appendTo('#hero_info');
            $('<h3></h3>',{
                text:"relatives: "+data.connections.relatives
            }).appendTo('#hero_info');
            
            
        }
    })
}

//call the onload function
onload();