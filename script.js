let container = document.querySelector(".container");
function api(countries)
{
    fetch(`https://api.covid19api.com/live/country/${countries}`)
    .then(data=>data.json())
    .then(count=> displaycount(count));
    container.innerHTML="";
}
api("India");

//for displaying countries data
function displaycount(count)
{
    let card = document.createElement("div");
    card.innerHTML=`
    <h1 class="cases">Cases:${count[count.length-1].Confirmed}</h1>
    <h2 class="Deaths">Deaths:${count[count.length-1].Deaths}</h2>
    `;
    container.append(card);
}


//for menu animations
function burgertoggle()
{
   document.querySelector(".burger").classList.toggle("change");
   document.querySelector(".buttons").classList.toggle("change");
   document.querySelector("button").classList.toggle("change");
   document.querySelector(".background").classList.toggle("change");
}