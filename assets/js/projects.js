
const projects = [
        {
            rubrik: "Reseplaneraren - Lättanvänd?",
            body: "Kan UX-research användas för att förbättra användarupplevelsen av Västtrafiks Reseplanerare? Vilken viktig information framkommer från undersökningen för att optimera tjänsten?",
            img: "/assets/img/projekt/prj1_hearts.png",
            url: ""
        },

        {
            rubrik: "Reseplaneraren - Hjärtknappar",
            body: "Genom att ta fram prototyper på tre förbättringsmöjligheter som framkommit genom tidigare användbarhetstester, förbättras tjänsten och gör den ännu mer användarvänlig.",
            img: "/assets/img/projekt/prj1_hearts.png",
            url: "länk url"
        },

        {
            rubrik: "Reseplaneraren - Lättanvänd?",
            body: "Kan UX-research användas för att förbättra användarupplevelsen av Västtrafiks Reseplanerare? Vilken viktig information framkommer från undersökningen för att optimera tjänsten?",
            img: "/assets/img/projekt/prj1_hearts.png",
            url: ""
        },

        {
            rubrik: "Reseplaneraren - Lättanvänd?",
            body: "Kan UX-research användas för att förbättra användarupplevelsen av Västtrafiks Reseplanerare? Vilken viktig information framkommer från undersökningen för att optimera tjänsten?",
            img: "/assets/img/projekt/prj1_hearts.png",
            url: ""
        },

    ];

function populateProjects() {
   
    const vartProjectSkaLigga = document.getElementById("project");

    var peopleHTML = "<div class='persons'>";
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        peopleHTML += `
            <div class="person">
                <img src="${person.img}" alt="${person.name}">
                <h3>${person.name}</h3>
                <p>${person.title}</p>
            </div>
        `;
    }
    peopleHTML += "</div>";
    vartPeopleDivskaligga.innerHTML = peopleHTML;
}

populateContactUs();
