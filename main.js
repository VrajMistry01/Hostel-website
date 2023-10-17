list = document.querySelectorAll(".nav-link");

list.forEach((item) => {
  item.addEventListener("click", () => {
    list.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
    // Ensure that index is within valid bounds before scrolling
  });
});
// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.classList.add("fly-in"); // Apply the CSS animation class
    }
  });
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Initial check when the page loads
handleScroll();

const boxes = document.querySelectorAll(".box");
// console.log(boxes);
const checkboxes = () => {
  const triggerbottom = (window.innerHeight / 10) * 4;
  boxes.forEach((ele) => {
    const boxtop = ele.getBoundingClientRect().top;
    if (boxtop < triggerbottom) {
      ele.classList.add("show");
    } else {
      ele.classList.remove("show");
    }
  });
};
window.addEventListener("scroll", checkboxes);
checkboxes();
