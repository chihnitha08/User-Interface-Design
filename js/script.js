const destinations = [
{ id:1, name:"Bali", country:"Indonesia", continent:"Asia", mood:"Relaxing", companion:["Solo","Friends"], img:"images/bali.jpg"},
{ id:2, name:"Tokyo", country:"Japan", continent:"Asia", mood:"Cultural", companion:["Solo","Friends"], img:"images/tokyo.jpg"},
{ id:3, name:"Swiss Alps", country:"Switzerland", continent:"Europe", mood:"Adventurous", companion:["Friends","Family"], img:"images/swiss.jpg"},
{ id:4, name:"Paris", country:"France", continent:"Europe", mood:"Romantic", companion:["Couple","Friends"], img:"images/paris.jpg"},
{ id:5, name:"Rome", country:"Italy", continent:"Europe", mood:"Cultural", companion:["Family","Friends"], img:"images/rome.jpg"},
];

// FORM SUBMIT
document.getElementById("moodForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    let mood = document.getElementById("mood").value;
    let companion = document.getElementById("companion").value;

    localStorage.setItem("selectedMood", mood);
    localStorage.setItem("selectedCompanion", companion);

    window.location.href="explore.html";
});

// SURPRISE
function surpriseMe(){
    let r = destinations[Math.floor(Math.random()*destinations.length)];
    localStorage.setItem("selectedDestination", JSON.stringify(r));
    window.location.href="details.html";
}

// LOAD EXPLORE
function loadExplore(){
    let grid = document.getElementById("destinationsGrid");
    if(!grid) return;

    grid.innerHTML="";
    let mood = localStorage.getItem("selectedMood");

    destinations.filter(d=>!mood || d.mood===mood)
    .forEach(d=>{
        grid.innerHTML+=`
        <div class="card">
            <img src="${d.img}">
            <h3>${d.name}</h3>
            <p>${d.country}</p>
            <button onclick="viewDetails(${d.id})">View</button>
            <button onclick="saveToWishlist(${d.id})">Save</button>
        </div>`;
    });
}

// VIEW DETAILS
function viewDetails(id){
    let d = destinations.find(x=>x.id===id);
    localStorage.setItem("selectedDestination", JSON.stringify(d));
    window.location.href="details.html";
}

function loadDetails(){
    let d = JSON.parse(localStorage.getItem("selectedDestination"));
    let c = document.getElementById("detailsContainer");
    if(!d) return;

    c.innerHTML=`
        <h2>${d.name}</h2>
        <img src="${d.img}" width="400">
        <p>Country: ${d.country}</p>
        <p>Mood Match: ${d.mood}</p>
        <button onclick="saveToWishlist(${d.id})">Save to Wishlist</button>
    `;
}

// FILTERS
function applyFilters(){
    let cont = document.getElementById("continentFilter").value;
    let mood = document.getElementById("moodFilter").value;

    let grid = document.getElementById("destinationsGrid");
    grid.innerHTML="";

    destinations
    .filter(d=>(!cont || d.continent===cont) && (!mood || d.mood===mood))
    .forEach(d=>{
        grid.innerHTML+=`
        <div class="card">
            <img src="${d.img}">
            <h3>${d.name}</h3>
            <button onclick="viewDetails(${d.id})">View</button>
        </div>`;
    });
}

// WISHLIST
function saveToWishlist(id){
    let list = JSON.parse(localStorage.getItem("wishlist")) || [];
    if(!list.includes(id)){
        list.push(id);
        localStorage.setItem("wishlist", JSON.stringify(list));
        alert("Added to wishlist");
        updateWishCount();
    }
}

function loadWishlist(){
    let list = JSON.parse(localStorage.getItem("wishlist")) || [];
    let c = document.getElementById("wishlistContainer");
    c.innerHTML="";

    list.forEach(id=>{
        let d = destinations.find(x=>x.id===id);
        c.innerHTML+=`
        <div class="card">
            <h3>${d.name}</h3>
            <button onclick="removeFromWishlist(${id})">Remove</button>
        </div>`;
    });
}

function removeFromWishlist(id){
    let list = JSON.parse(localStorage.getItem("wishlist"));
    list = list.filter(x=>x!==id);
    localStorage.setItem("wishlist", JSON.stringify(list));
    loadWishlist();
    updateWishCount();
}

function updateWishCount(){
    let list = JSON.parse(localStorage.getItem("wishlist")) || [];
    let el = document.getElementById("wishCount");
    if(el) el.textContent = list.length;
}
let selectedContinent = "";
let selectedCountry = "";

function initExplore(){
    document.getElementById("countrySection").innerHTML="";
    document.getElementById("destinationsGrid").innerHTML="";
}

// STEP 1 — Continent
function selectContinent(cont){
    selectedContinent = cont;
    selectedCountry = "";

    let countries = [...new Set(
        destinations
        .filter(d=>d.continent===cont)
        .map(d=>d.country)
    )];

    let section = document.getElementById("countrySection");
    section.innerHTML="";
    document.getElementById("countryTitle").innerText =
        "Step 2: Select Country in " + cont;

    countries.forEach(c=>{
        section.innerHTML += `
        <div class="card fade-in">
            <h3>${c}</h3>
            <button onclick="selectCountry('${c}')">Explore</button>
        </div>`;
    });
}

// STEP 2 — Country
function selectCountry(country){
    selectedCountry = country;

    let mood = localStorage.getItem("selectedMood");
    let companion = localStorage.getItem("selectedCompanion");

    let filtered = destinations.filter(d=>
        d.country===country &&
        (!mood || d.mood===mood) &&
        (!companion || d.companion.includes(companion))
    );

    let grid = document.getElementById("destinationsGrid");
    grid.innerHTML="";
    document.getElementById("destTitle").innerText =
        "Step 3: Destinations in " + country;

    filtered.forEach(d=>{
        grid.innerHTML += `
        <div class="card fade-in">
            <img src="${d.img}">
            <h3>${d.name}</h3>
            <p>Mood: ${d.mood}</p>
            <button onclick="viewDetails(${d.id})">View</button>
            <button onclick="saveToWishlist(${d.id})">Save</button>
        </div>`;
    });

    if(filtered.length===0){
        grid.innerHTML = "<p>No destinations match your mood & companion.</p>";
    }
}

// SEARCH PAGE LOGIC
function loadAllDestinations(){
    let grid = document.getElementById("searchGrid");
    if(!grid) return;

    grid.innerHTML="";
    destinations.forEach(d=>{
        grid.innerHTML += createCard(d);
    });
}

function applySearchFilters(){
    let cont = document.getElementById("continentFilter").value;
    let mood = document.getElementById("moodFilter").value;
    let comp = document.getElementById("companionFilter").value;

    let grid = document.getElementById("searchGrid");
    grid.innerHTML="";

    let filtered = destinations.filter(d=>
        (!cont || d.continent===cont) &&
        (!mood || d.mood===mood) &&
        (!comp || d.companion.includes(comp))
    );

    filtered.forEach(d=>{
        grid.innerHTML += createCard(d);
    });
}

// reusable card
function createCard(d){
    return `
    <div class="card fade-in">
        <img src="${d.img}">
        <h3>${d.name}</h3>
        <p>${d.country}</p>
        <button onclick="viewDetails(${d.id})">View</button>
        <button onclick="saveToWishlist(${d.id})">Save</button>
    </div>`;
}