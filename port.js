// JavaScript for Breaking News Ticker
const newsTicker = [
  "All Type of Government Services",
  "All Type of Banking Services",
  "All Type Of Insurance Services",
  "All Type Of Examination Forms"
];

let tickerIndex = 0;

function updateTicker() {
  document.getElementById("breaking-news-ticker").textContent = newsTicker[tickerIndex];
  tickerIndex = (tickerIndex + 1) % newsTicker.length;
}

// Update ticker every 5 seconds
setInterval(updateTicker, 5000);

// Initialize the first ticker item
updateTicker();
