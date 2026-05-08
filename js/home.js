// js/home.js

// FORM SUBMIT

document.getElementById("moodForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let mood =
    document.getElementById("mood").value;

    let companion =
    document.getElementById("companion").value;

    // STORE VALUES

    localStorage.setItem("mood", mood);

    localStorage.setItem("companion", companion);

    // REDIRECT

    window.location.href = "explore.html";

});


// SURPRISE BUTTON

function surpriseMe(){

    let destinations = [

        "Maldives",
        "Japan",
        "Bali",
        "Switzerland",
        "Thailand",
        "Vietnam",
        "Singapore"

    ];

    let randomPlace =
    destinations[Math.floor(Math.random()*destinations.length)];

    alert(
        "🎉 Surprise Destination: " + randomPlace
    );
}


// WISHLIST COUNT

function updateWishlistCount(){

    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    document.getElementById("wishlist-count")
    .innerText = wishlist.length;
}