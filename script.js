// Add event listener to detect scrolling
window.addEventListener("scroll", revealSection);

function revealSection() {
  // Get the height of Section A and Section B
  const sectionAHeight = document.querySelector(".section-a").offsetHeight;
  const sectionB = document.querySelector(".section-b");

  // Calculate the position where Section B should start revealing
  const revealPosition = sectionAHeight - window.innerHeight / 2;

  // Toggle the 'reveal' class based on the scroll position
  if (window.scrollY >= revealPosition) {
    sectionB.classList.add("reveal");
  } else {
    sectionB.classList.remove("reveal");
  }
}
