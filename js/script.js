// js/script.js
 
// ── DESTINATIONS DATA ─────────────────────────────────────────
// Expand this array to add more destinations.
// mood options   : "Adventurous" | "Relaxing" | "Cultural" | "Romantic" | "Foodie"
// companion array: any combo of "Solo","Friends","Family","Partner","Pets","Couple"
 
const destinations = [
  // ── ASIA ──────────────────────────────────────────────────
  { id:1,  name:"Bali",        country:"Indonesia",    continent:"Asia",   mood:"Relaxing",    companion:["Solo","Friends","Couple"],        img:"IMAGES/bali.jpg",    description:"Tropical paradise of lush rice terraces, surf-ready beaches and ancient Hindu temples." },
  { id:2,  name:"Tokyo",       country:"Japan",        continent:"Asia",   mood:"Cultural",    companion:["Solo","Friends","Family"],         img:"IMAGES/tokyo.jpeg",   description:"A dazzling blend of neon-lit modernity, centuries-old shrines and world-class cuisine." },
  { id:3,  name:"Kyoto",       country:"Japan",        continent:"Asia",   mood:"Romantic",    companion:["Couple","Solo"],                   img:"IMAGES/kyoto.webp",   description:"Timeless geisha districts, bamboo groves and thousands of lantern-lit temples." },
  { id:4,  name:"Maldives",    country:"Maldives",     continent:"Asia",   mood:"Romantic",    companion:["Couple","Partner"],                img:"IMAGES/maldives.webp",description:"Overwater bungalows, bioluminescent beaches and the clearest lagoons on Earth." },
  { id:5,  name:"Singapore",   country:"Singapore",    continent:"Asia",   mood:"Foodie",      companion:["Friends","Family","Solo"],         img:"IMAGES/singapore.webp",description:"A food lover's utopia — hawker centres, Michelin stars and flavours from across Asia." },
  { id:6,  name:"Bangkok",     country:"Thailand",     continent:"Asia",   mood:"Adventurous", companion:["Friends","Solo"],                  img:"IMAGES/bangkok.jpg", description:"Electrifying street life, golden palace complexes and legendary night markets." },
  { id:7,  name:"Hoi An",      country:"Vietnam",      continent:"Asia",   mood:"Cultural",    companion:["Solo","Couple","Friends"],         img:"IMAGES/hoian.webp",   description:"Lantern-draped ancient town, tailor shops and some of Vietnam's finest street food." },
  { id:8,  name:"Kerala",      country:"India",        continent:"Asia",   mood:"Relaxing",    companion:["Family","Couple","Solo"],          img:"IMAGES/kerela.webp",  description:"Serene backwaters, spice-scented air, houseboat sunsets and Ayurvedic retreats." },
  { id:9,  name:"Dubai",       country:"UAE",          continent:"Asia",   mood:"Adventurous", companion:["Friends","Family","Couple"],       img:"IMAGES/dubai.webp",   description:"Desert dunes, record-breaking skyscrapers, indoor ski slopes and luxury shopping." },
  { id:10, name:"Seoul",       country:"South Korea",  continent:"Asia",   mood:"Foodie",      companion:["Friends","Solo"],                  img:"IMAGES/seoul.jpg",   description:"K-BBQ alleys, 24-hour street food stalls and a buzzing youth culture like no other." },
 
  // ── EUROPE ────────────────────────────────────────────────
  { id:11, name:"Swiss Alps",  country:"Switzerland",  continent:"Europe", mood:"Adventurous", companion:["Friends","Family"],                img:"IMAGES/swiss.jpeg",   description:"Dramatic mountain peaks, glacier hikes and the world's most scenic train routes." },
  { id:12, name:"Paris",       country:"France",       continent:"Europe", mood:"Romantic",    companion:["Couple","Partner","Friends"],      img:"IMAGES/paris.jpg",   description:"The city of love — Eiffel Tower sunsets, candlelit bistros and Louvre masterpieces." },
  { id:13, name:"Rome",        country:"Italy",        continent:"Europe", mood:"Cultural",    companion:["Family","Friends","Solo"],         img:"IMAGES/rome.webp",    description:"Walk through 2,700 years of history — Colosseum, Vatican and perfect espresso." },
  { id:14, name:"Barcelona",   country:"Spain",        continent:"Europe", mood:"Foodie",      companion:["Friends","Couple","Solo"],         img:"IMAGES/barcelona.jpg",description:"Gaudí's surreal architecture, tapas on Las Ramblas and Barceloneta beach vibes." },
  { id:15, name:"Santorini",   country:"Greece",       continent:"Europe", mood:"Romantic",    companion:["Couple","Partner"],                img:"IMAGES/santorini.jpg",description:"Whitewashed clifftop villages, volcanic sunsets and Aegean blue everywhere you look." },
  { id:16, name:"Amsterdam",   country:"Netherlands",  continent:"Europe", mood:"Cultural",    companion:["Friends","Solo","Couple"],         img:"IMAGES/amsterdam.jpg",description:"Canal-laced streets, world-class museums, cycling culture and liberal charm." },
  { id:17, name:"Vienna",      country:"Austria",      continent:"Europe", mood:"Cultural",    companion:["Solo","Couple","Family"],          img:"IMAGES/vienna.jpg",  description:"Imperial palaces, Mozart concerts, Sachertorte and Europe's grandest coffee houses." },
 
  // ── AFRICA ────────────────────────────────────────────────
  { id:18, name:"Serengeti",   country:"Tanzania",     continent:"Africa", mood:"Adventurous", companion:["Friends","Family","Couple"],       img:"IMAGES/serengeti.webp",description:"Witness the Great Migration — millions of wildebeest crossing vast golden plains." },
  { id:19, name:"Marrakech",   country:"Morocco",      continent:"Africa", mood:"Cultural",    companion:["Friends","Couple","Solo"],         img:"IMAGES/marrakech.webp",description:"Maze-like souks, spice markets, rooftop riads and the magic of Djemaa el-Fna." },
  { id:20, name:"Cape Town",   country:"South Africa", continent:"Africa", mood:"Adventurous", companion:["Friends","Solo","Couple"],         img:"IMAGES/capetown.webp", description:"Table Mountain hikes, penguin beaches, world-class wine routes and ocean sunsets." },
 
  // ── NORTH AMERICA ─────────────────────────────────────────
  { id:21, name:"New York",    country:"USA",          continent:"North America", mood:"Cultural",    companion:["Solo","Friends","Family"],  img:"IMAGES/newyork.jpg",  description:"The city that never sleeps — Broadway shows, iconic skyline and global street food." },
  { id:22, name:"Banff",       country:"Canada",       continent:"North America", mood:"Adventurous", companion:["Friends","Family","Couple"],img:"IMAGES/banff.jpg",    description:"Turquoise glacier lakes, elk-dotted meadows and the Canadian Rockies at their finest." },
  { id:23, name:"Cancún",      country:"Mexico",       continent:"North America", mood:"Relaxing",    companion:["Friends","Couple","Family"],img:"IMAGES/banff.webp",   description:"Caribbean blue waters, ancient Mayan ruins and all-inclusive beach bliss." },
 
  // ── SOUTH AMERICA ─────────────────────────────────────────
  { id:24, name:"Machu Picchu",country:"Peru",         continent:"South America", mood:"Adventurous", companion:["Solo","Friends","Couple"], img:"IMAGES/machupicchu.jpg",description:"The Lost City of the Incas — misty mountain citadel surrounded by Andean peaks." },
  { id:25, name:"Rio de Janeiro",country:"Brazil",     continent:"South America", mood:"Foodie",      companion:["Friends","Couple"],        img:"IMAGES/riodejaneiro.jpg",      description:"Samba rhythms, Copacabana sunsets, açaí bowls and Christ the Redeemer above it all." },
 
  // ── OCEANIA ───────────────────────────────────────────────
  { id:26, name:"Sydney",      country:"Australia",    continent:"Oceania",       mood:"Adventurous", companion:["Friends","Family","Solo"], img:"IMAGES/sydney.jpg",   description:"Opera House, Bondi Beach surf, harbour bridge climbs and laid-back Aussie culture." },
  { id:27, name:"Queenstown",  country:"New Zealand",  continent:"Oceania",       mood:"Adventurous", companion:["Friends","Solo","Couple"], img:"IMAGES/queenstown.jpg",description:"The adventure capital of the world — bungee jumping, skiing and fjord boat rides." },
];
 
 
// ════════════════════════════════════════════════════════════
//  HOME PAGE
// ════════════════════════════════════════════════════════════
 
// Form submit on index.html (handled in home.js — but kept here as fallback)
document.getElementById("moodForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("selectedMood",      document.getElementById("mood").value);
  localStorage.setItem("selectedCompanion", document.getElementById("companion").value);
  window.location.href = "explore2.html";
});
 
// Surprise Me
function surpriseMe() {
  const moods = ["Adventurous","Relaxing","Cultural","Romantic","Foodie"];
  localStorage.setItem("selectedMood", moods[Math.floor(Math.random() * moods.length)]);
  localStorage.setItem("selectedCompanion", "");
  window.location.href = "explore2.html";
}
 
 
// ════════════════════════════════════════════════════════════
//  EXPLORE PAGE  —  mood-based suggestion grid
// ════════════════════════════════════════════════════════════
 
function initExplore() {
  const mood      = localStorage.getItem("selectedMood")      || "";
  const companion = localStorage.getItem("selectedCompanion") || "";
 
  // Update the page heading to reflect the selected mood
  const heading = document.getElementById("exploreHeading");
  if (heading) {
    heading.textContent = mood
      ? `✈️ ${mood} Destinations Just for You`
      : "✈️ All Destinations";
  }
 
  // Show active mood badge
  const badge = document.getElementById("moodBadge");
  if (badge) {
    badge.textContent   = mood ? `Mood: ${mood}` : "";
    badge.style.display = mood ? "inline-block" : "none";
  }
 
  const companionBadge = document.getElementById("companionBadge");
  if (companionBadge) {
    companionBadge.textContent   = companion ? `Companion: ${companion}` : "";
    companionBadge.style.display = companion ? "inline-block" : "none";
  }
 
  renderExploreGrid(mood, companion);
}
 
function renderExploreGrid(mood, companion) {
  const grid = document.getElementById("exploreGrid");
  if (!grid) return;
 
  const filtered = destinations.filter(d =>
    (!mood      || d.mood === mood) &&
    (!companion || d.companion.includes(companion))
  );
 
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <p>😔 No destinations match your filters.</p>
        <button onclick="clearFilters()">Clear Filters</button>
      </div>`;
    return;
  }
 
  grid.innerHTML = filtered.map(d => createExploreCard(d)).join("");
}
 
function createExploreCard(d) {
  return `
  <div class="dest-card fade-in">
    <div class="dest-img-wrap">
      <img src="${d.img}" alt="${d.name}" onerror="this.src='images/placeholder.jpg'">
      <span class="mood-tag">${d.mood}</span>
    </div>
    <div class="dest-info">
      <h3>${d.name}</h3>
      <p class="dest-country">📍 ${d.country}</p>
      <p class="dest-desc">${d.description}</p>
      <div class="dest-actions">
        <button class="btn-view"  onclick="viewDetails(${d.id})">View Details</button>
        <button class="btn-save"  onclick="saveToWishlist(${d.id})" title="Save to Wishlist">♥</button>
      </div>
    </div>
  </div>`;
}
 
// Clear all home-page filters and reload
function clearFilters() {
  localStorage.removeItem("selectedMood");
  localStorage.removeItem("selectedCompanion");
  initExplore();
}
 
 
// ════════════════════════════════════════════════════════════
//  DESTINATION DETAILS PAGE
// ════════════════════════════════════════════════════════════
 
function viewDetails(id) {
  const d = destinations.find(x => x.id === id);
  if (!d) return;
  localStorage.setItem("selectedDestination", JSON.stringify(d));
  window.location.href = "details.html";
}
 
function loadDetails() {
  const d = JSON.parse(localStorage.getItem("selectedDestination"));
  const c = document.getElementById("detailsContainer");
  if (!d || !c) return;
 
  c.innerHTML = `
    <div class="details-wrap">
      <img src="${d.img}" alt="${d.name}" class="details-img"
           onerror="this.src='images/placeholder.jpg'">
      <div class="details-text">
        <h2>${d.name}</h2>
        <p class="details-country">📍 ${d.country} · ${d.continent}</p>
        <span class="mood-tag">${d.mood}</span>
        <p class="details-desc">${d.description}</p>
        <p><strong>Best for:</strong> ${d.companion.join(", ")}</p>
        <button class="btn-view" onclick="saveToWishlist(${d.id})">♥ Save to Wishlist</button>
      </div>
    </div>`;
}
 
 
// ════════════════════════════════════════════════════════════
//  SEARCH & FILTERS PAGE
// ════════════════════════════════════════════════════════════
 
function loadAllDestinations() {
  const grid = document.getElementById("searchGrid");
  if (!grid) return;
  grid.innerHTML = destinations.map(d => createCard(d)).join("");
}
 
function applySearchFilters() {
  const cont = document.getElementById("continentFilter")?.value || "";
  const mood = document.getElementById("moodFilter")?.value      || "";
  const comp = document.getElementById("companionFilter")?.value || "";
 
  const filtered = destinations.filter(d =>
    (!cont || d.continent === cont) &&
    (!mood || d.mood      === mood) &&
    (!comp || d.companion.includes(comp))
  );
 
  const grid = document.getElementById("searchGrid");
  if (!grid) return;
 
  grid.innerHTML = filtered.length
    ? filtered.map(d => createCard(d)).join("")
    : `<p class="no-results-msg">No destinations match these filters.</p>`;
}
 
// Generic card used in search & explore fallback
function createCard(d) {
  return `
  <div class="card fade-in">
    <img src="${d.img}" alt="${d.name}" onerror="this.src='images/placeholder.jpg'">
    <h3>${d.name}</h3>
    <p>${d.country}</p>
    <span class="mood-tag">${d.mood}</span>
    <div class="card-actions">
      <button onclick="viewDetails(${d.id})">View</button>
      <button onclick="saveToWishlist(${d.id})">♥ Save</button>
    </div>
  </div>`;
}
 
 
// ════════════════════════════════════════════════════════════
//  WISHLIST
// ════════════════════════════════════════════════════════════
 
function saveToWishlist(id) {
  let list = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (list.includes(id)) {
    showToast("Already in your wishlist ♥");
    return;
  }
  list.push(id);
  localStorage.setItem("wishlist", JSON.stringify(list));
  showToast("Added to Wishlist ♥");
  updateWishCount();
}
 
function removeFromWishlist(id) {
  let list = JSON.parse(localStorage.getItem("wishlist")) || [];
  list = list.filter(x => x !== id);
  localStorage.setItem("wishlist", JSON.stringify(list));
  loadWishlist();
  updateWishCount();
}
 
function loadWishlist() {
  const list = JSON.parse(localStorage.getItem("wishlist")) || [];
  const c    = document.getElementById("wishlistContainer");
  if (!c) return;
 
  if (list.length === 0) {
    c.innerHTML = `
      <div class="empty-wishlist">
        <p>💔 Your wishlist is empty.</p>
        <a href="explore.html" class="btn-view">Start Exploring</a>
      </div>`;
    return;
  }
 
  c.innerHTML = list.map(id => {
    const d = destinations.find(x => x.id === id);
    if (!d) return "";
    return `
    <div class="card fade-in">
      <img src="${d.img}" alt="${d.name}" onerror="this.src='images/placeholder.jpg'">
      <h3>${d.name}</h3>
      <p>${d.country}</p>
      <span class="mood-tag">${d.mood}</span>
      <div class="card-actions">
        <button onclick="viewDetails(${d.id})">View</button>
        <button onclick="removeFromWishlist(${d.id})">Remove</button>
      </div>
    </div>`;
  }).join("");
}
 
function updateWishCount() {
  const list = JSON.parse(localStorage.getItem("wishlist")) || [];
  // Update all elements that show wishlist count
  document.querySelectorAll("#wishCount, #wishlist-count")
    .forEach(el => { el.textContent = list.length; });
}
 
 
// ════════════════════════════════════════════════════════════
//  UTILITY
// ════════════════════════════════════════════════════════════
 
function showToast(msg) {
  // Remove existing toast
  const old = document.getElementById("toast");
  if (old) old.remove();
 
  const toast = document.createElement("div");
  toast.id = "toast";
  toast.textContent = msg;
  toast.style.cssText = `
    position:fixed; bottom:30px; left:50%; transform:translateX(-50%);
    background:#333; color:#fff; padding:12px 24px; border-radius:30px;
    font-size:14px; z-index:9999; opacity:0;
    transition: opacity .3s ease;
  `;
  document.body.appendChild(toast);
 
  // Fade in
  requestAnimationFrame(() => { toast.style.opacity = "1"; });
 
  // Fade out after 2.5s
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
 