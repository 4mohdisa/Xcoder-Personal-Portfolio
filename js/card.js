const card = document.getElementById("work-card");
const card1 = document.getElementById("work-card1");
const card2 = document.getElementById("work-card2");
const card3 = document.getElementById("work-card3");
const card4 = document.getElementById("work-card4");
const card5 = document.getElementById("work-card5");

function CardClick() {
  if (card.classList.contains("active")) {
    card.classList.remove("active");
  } else {
    card.classList.add("active");
  }
}

card.addEventListener("click", CardClick);

function CardClick1() {
  if (card1.classList.contains("active")) {
    card1.classList.remove("active");
  } else {
    card1.classList.add("active");
  }
}

card1.addEventListener("click", CardClick1);

function CardClick2() {
  if (card2.classList.contains("active")) {
    card2.classList.remove("active");
  } else {
    card2.classList.add("active");
  }
}

card2.addEventListener("click", CardClick2);

function CardClick3() {
  if (card3.classList.contains("active")) {
    card3.classList.remove("active");
  } else {
    card3.classList.add("active");
  }
}

card3.addEventListener("click", CardClick3);

function CardClick4() {
  if (card4.classList.contains("active")) {
    card4.classList.remove("active");
  } else {
    card4.classList.add("active");
  }
}

card4.addEventListener("click", CardClick4);

function CardClick5() {
  if (card5.classList.contains("active")) {
    card5.classList.remove("active");
  } else {
    card5.classList.add("active");
  }
}

card5.addEventListener("click", CardClick5);
