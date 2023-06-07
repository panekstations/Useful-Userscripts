//Hides the element for recommended products not related to search query (Wardrobe Highlight)

function hideDivPeriodically() {
  // Get all elements with the specified class name
  const elements = document.getElementsByClassName("feed-grid__item feed-grid__item--full-row");

  // Loop through each element and hide it
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
}

// Run the function every 5 seconds
setInterval(hideDivPeriodically, 2000);
