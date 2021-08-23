let container = document.querySelector(".container");
function api(countries)
{
    fetch(`https://api.covid19api.com/live/country/${countries}`)
    .then(data=>data.json())
    .then(count=> displaycount(count ,countries))
    .catch(err=>console.log(err));
    container.innerHTML="";
}
api("India");

//for displaying countries data
function displaycount(count,con)
{
    let card = document.createElement("div");
    card.className="card";
    if(count.length==0)
    {
        card.innerHTML=`<h2>Country is wrong</h2>`;
        container.append(card);
    }
    else{
        card.innerHTML=`
        <h1 class="cases">${con}</h1>
        <h1 class="cases">Cases:${count[count.length-1].Confirmed}</h1>
        <h2 class="Deaths">Deaths:${count[count.length-1].Deaths}</h2>
        `;
        container.append(card);
    }
   
   
}

function search()
{
    let country = document.querySelector(".input").value;
    api(country);
}
//for menu animations
function burgertoggle()
{
   document.querySelector(".burger").classList.toggle("change");
   document.querySelector(".buttons").classList.toggle("change");
   document.querySelector("button").classList.toggle("change");
   document.querySelector(".background").classList.toggle("change");
}