AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/ever.png",
    place: "Ever Creative",
    time: "(August, 2021 - December,2021)",
    desp: "<li>Worked at Ever Creative to focus on the companies News website.</li> <li>Made changes in the current progressive web app of EverCreative to allow the site to copy news from other sources and post it on the companies wesite.</li> <li>Created a wriswatch AD for one of the companies clients.</li>",
  },
  {
    title: "Animation, product visualizer and AR Developer",
    cardImage: "assets/images/experience-page/studio.png",
    place: "Studio Nurbs",
    time: "(August - january, 2022)",
    desp: "<li>Worked with Studio Nurbs as 3d creative intern.</li><li>worked on visualizing 3d models/products on the web for clients</li><li>Creating Product configurator on the web for clients</li><li>Building different AR usecases in business.</li>",
  },
  {
    title: "3d Animation Facilitator",
    cardImage: "assets/images/experience-page/tlia.png",
    place: "TLIA",
    time: "(August 1st - August 10th, 2022)",
    desp: "<li>I taught a few students about the basics of design and animations.</li><li>I also presented them with examples and praticals to mamke it a fun and amazing experience.</li>",
  },
  {
    title: "Administrative Assistant",
    cardImage: "assets/images/experience-page/hiti.jpg",
    place: "Raomaz Integrated",
    time: "(June 2020 - September, 2020)",
    desp: "<li>Type documents such as correspondence, bank statements, drafts, memos, and emails.</li><li>Opened, sorted, and distributed incoming messages and correspondence.</li><li>Helped with social media prescence, Instagram and facebook advertising</li><li>Delivered packages to buyers.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Short Game for a Short film",
    subtitle: "Unity Developer",
    image: "assets/images/experience-page/uplift.png",
    desp: "I created a unity game intro that was required for a screen play in a short film.",
  },
  {
    title: "Pwnisher 3d moving meditation challenge",
    subtitle: "3d atist",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "I participated in the challenge alongside great 3d /2d artist all over the world.",
  },
  {
    title: "Venture By ALU",
    subtitle: "Participant",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "Completed the Venture ALU course for enterpreneurs.",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
