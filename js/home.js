// js/home.js
 
// ── FORM SUBMIT ──────────────────────────────────────────────
document.getElementById("moodForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
 
    const mood      = document.getElementById("mood").value;
    const companion = document.getElementById("companion").value;
 
    // Store in localStorage so explore.html can read them
    localStorage.setItem("selectedMood",      mood);
    localStorage.setItem("selectedCompanion", companion);
 
    // Redirect to explore page
    window.location.href = "explore2.html";
  });
 
 
// ── SURPRISE ME ──────────────────────────────────────────────
function surpriseMe() {
  const destinations = [
    "Maldives", "Japan", "Bali", "Switzerland",
    "Thailand", "Vietnam", "Singapore", "Paris",
    "Rome", "Tokyo", "Swiss Alps"
  ];
 
  const moods = ["Adventurous", "Relaxing", "Cultural", "Romantic", "Foodie"];
 
  // Pick a random destination and set a matching mood
  const randomPlace = destinations[Math.floor(Math.random() * destinations.length)];
  const randomMood  = moods[Math.floor(Math.random() * moods.length)];
 
  localStorage.setItem("selectedMood",      randomMood);
  localStorage.setItem("selectedCompanion", "");          // no companion filter
 
  alert(`🎉 Surprise! We're sending you to explore ${randomMood} destinations!`);
 
  window.location.href = "explore2.html";
}
 
 
// ── WISHLIST COUNT (for navbar badge) ────────────────────────
function updateWishlistCount() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const el = document.getElementById("wishlist-count");
  if (el) el.innerText = wishlist.length;
}