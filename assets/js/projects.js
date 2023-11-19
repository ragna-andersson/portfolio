
const projects = [
        {
            rubrik: "Reseplaneraren - Lättanvänd?",
            body: "Kan UX-research användas för att förbättra användarupplevelsen av Västtrafiks Reseplanerare? Vilken viktig information framkommer från undersökningen för att optimera tjänsten?",
            img: "/assets/img/projekt/prj1_hearts.png",
            url: "cv.html"
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
   
    const vartProjectSkaLigga = document.getElementById("projects");

    var projectHTML = ""
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        // style används för att varje projekt ska få en egen rad. (Första projektet får grid-row: 2)
        projectHTML += `
        <article class="col1-2 grid-container-2-col" style="grid-row:${i+2};"> 
            <img class="col1 project_img" src="${project.img}" alt="screenshot of västrafik app" />

            <div class="col2">
                <h3 class="left-align">${project.rubrik}</h3>
                <p>${project.body}</p>
                <a class="project_button" href="${project.url}">Läs mer 
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                    </svg>
                </a>
            </div>
        </article>
        `;
    }
    vartProjectSkaLigga.innerHTML += projectHTML;
}

populateProjects();
