console.log('Scripts loaded');
//Footer
var currentYear = new Date().getFullYear();
var lastModified = document.lastModified;

console.log("Current Year:", currentYear);
console.log("Last Modified:", lastModified);

document.querySelector("footer p:first-child").innerHTML = "&copy" + currentYear + " - Pamela Pared - Argentina ";
document.querySelector("footer p:nth-child(2)").innerHTML = "Last modified: " + lastModified;

//Active
const navLinks = document.querySelectorAll('.nav a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

//Burger
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
  
    hamburger.addEventListener('click', () => {
      console.log('Hamburger clicked');
      nav.classList.toggle('active');
    });
  });
  
  //Cardrroussel
  document.addEventListener("DOMContentLoaded", () => {
    const cefrLevels = [
        { title: "A1", description: "Beginner: can understand and use basic phrases for everyday situations. Can introduce themselves and ask/answer simple questions.", ageRange: "Age range: 7–10 years old" },
        { title: "A2", description: "Elementary: can handle simple communication in familiar contexts, such as talking about daily routines or making purchases.", ageRange: "Age range: 10–12 years old" },
        { title: "B1", description: "Intermediate: can understand the main points of clear standard input and handle most travel situations. Can describe experiences and opinions.", ageRange: "Age range: 12–15 years old" },
        { title: "B2", description: "Upper Intermediate: can interact with fluency and spontaneity. Can produce clear, detailed text on a variety of subjects.", ageRange: "Age range: 15–18 years old" },
        { title: "C1", description: "Advanced: can express ideas fluently and spontaneously, with a high level of grammatical accuracy. Can produce well-structured and detailed writing.", ageRange: "Age range: 18+ years old" },
        { title: "C2", description: "Proficient: can understand virtually everything read or heard. Can express themselves spontaneously, very fluently, and precisely.", ageRange: "Age range: Adults" }
    ];

    let currentIndex = 0;
    const cardContainer = document.getElementById("card-container");

  
    function createCard(index) {
        const level = cefrLevels[index];
       
        cardContainer.innerHTML = `
            <button id="prev-card" style="visibility: ${index === 0 ? 'hidden' : 'visible'}">&lt;</button>
            <div class="card">
                <h2>${level.title}</h2>
                <p>${level.description}</p>
                <p class="age-range">${level.ageRange}</p>
            </div>
            <button id="next-card" style="visibility: ${index === cefrLevels.length - 1 ? 'hidden' : 'visible'}">&gt;</button>
        `;

        const prevButton = document.getElementById("prev-card");
        const nextButton = document.getElementById("next-card");

        nextButton.addEventListener("click", () => {
            if (currentIndex < cefrLevels.length - 1) {
                currentIndex++;
                createCard(currentIndex);
            }
        });

        prevButton.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                createCard(currentIndex);
            }
        });
    }
    createCard(currentIndex);
    
  });

//Certs
    document.addEventListener('DOMContentLoaded', () => {
      const certTitle = document.getElementById('cert-title');
      const certInfo = document.getElementById('cert-info');
      
      const certDetails = {
          ielts: {
              title: 'IELTS',
              info: 'The International English Language Testing System is an English proficiency test that measures your ability to communicate in English across all four language skills: listening, reading, writing, and speaking.'
          },
          toefl: {
              title: 'TOEFL',
              info: 'The Test of English as a Foreign Language assesses non-native English speakers’ proficiency. It’s required by many colleges and universities, especially in English-speaking countries.'
          },
          'first-cert': {
              title: 'First Certificate',
              info: 'The First Certificate in English (FCE) is an exam from Cambridge English that demonstrates an intermediate level of English proficiency, equivalent to a B2 level in the CEFR.'
          },
          'cambridge-advanced': {
              title: 'Cambridge Advanced',
              info: 'Cambridge Advanced English (CAE) is for upper-intermediate learners, showing a strong command of English in speaking, listening, reading, and writing.'
          },
          proficiency: {
              title: 'Cambridge Proficiency',
              info: 'The Cambridge Proficiency exam (CPE) is the highest-level exam offered by Cambridge English, proving you have near-native proficiency in English.'
          },
          toeic: {
            title: 'TOEIC',
            info: "The Test of English for International Communication assesses workplace English skills for non-native speakers. It evaluates reading, listening, speaking, and writing skills to determine a student's ability to use and understand English in an academic environment."
        },
      };

        const toeicLink = document.createElement('a');
        toeicLink.href = '#';
        toeicLink.textContent = 'TOEIC';
        toeicLink.setAttribute('data-cert', 'toeic');

        const certList = document.querySelector('.certification-list');
        certList.appendChild(toeicLink);

        const certLinks = document.querySelectorAll('.certification-list a');
  
        certLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const certType = e.target.getAttribute('data-cert');
                const certData = certDetails[certType];
              
                if (certData) {
                    certTitle.textContent = certData.title;
                    certInfo.textContent = certData.info;
                }
            });
        });
});
