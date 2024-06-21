
const reviews = [
  {
    id: 1,
    name: "Jinnat",
    job: "Doctor",
    img: "images/jinnat.jpeg",
    text: "As Doctor Jinnat, I am grateful for the trust and appreciation of my patients. I strive to deliver compassionate care, clear communication, and effective treatments. Your health and well-being are my priorities, and I am committed to providing you with the best possible medical care."
  },
  {
    id: 2,
    name: "Nancy Tyagi",
    job: "Fashion Blogger",
    img: "images/nancy-tyagi.jpeg",
    text: "As a fashion blogger, I curate stylish insights that blend elegance with practicality. From reviewing chic handbags to spotlighting seasonal trends like oversized knits, I aim to inspire versatile and sophisticated wardrobe choices. Join me in exploring the latest in fashion, from timeless staples to innovative runway collections."
  },
  {
    id: 3,
    name: "Samaya",
    job: "Web Designer",
    img: "images/samaya.jpeg",
    text: "As a web designer, I meticulously review designs with a focus on user experience and aesthetic appeal. Each project is crafted to harmonize functionality and creativity, ensuring seamless navigation and visual engagement. Let's elevate your digital presence with bespoke designs tailored to your unique vision and brand identity."
  },
  {
    id: 4,
    name: "Susant Rathore",
    job: "Business",
    img: "images/susant.jpeg",
    text: "As a businessman, I write reviews that highlight quality, reliability, and customer satisfaction. Each product/service review focuses on enhancing value and meeting client expectations. My reviews aim to inform and inspire confidence, reflecting a commitment to excellence and integrity in every business endeavor."
  },
  {
    id: 5,
    name: "Unnati",
    job: "Software Developer",
    img: "images/unnati1.jpeg",
    text: "As a software developer, I provide insightful reviews emphasizing efficiency, functionality, and user experience. I assess software solutions with a focus on performance, scalability, and innovation. My reviews aim to guide users and stakeholders toward optimized technology solutions that drive productivity and success."

  },
];

const img = document.getElementById("p1-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});

function showPerson(personIndex) {
  const item = reviews[personIndex];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function() {
  currentItem++;
  if (currentItem >= reviews.length) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * reviews.length);
  while (randomIndex === currentItem) {
    randomIndex = Math.floor(Math.random() * reviews.length);
  }
  currentItem = randomIndex;
  showPerson(currentItem);
});
