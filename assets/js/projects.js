
const projects = [
        {
            rubrik: "Reseplaneraren - Lättanvänd?",
            body: "Kan UX-research användas för att förbättra <br> användarupplevelsen av Västtrafiks <br> Reseplanerare? <br> Vilken viktig information framkommer från <br> undersökningen för att optimera tjänsten?",
            img: "assets/img/projekt/ ToGovasstrafikHjartknapp.svg",
            url: "cv.html",
            alt: "Mobil med västtrafiks app"
        },

        {
            rubrik: "Reseplaneraren - Hjärtknappar",
            body: "Genom att ta fram prototyper på tre <br> förbättringsmöjligheter som framkommit <br> genom tidigare användbarhetstester, <br> förbättras tjänsten och gör den ännu mer <br> användarvänlig.",
            img: "assets/img/projekt/solfjäder ToGovasstrafikHjartknapp.svg",
            url: "länk url",
            alt: "Tre mobiler med västtrafiks app"
        },

        {
            rubrik: "Kundresor - Vad ger skrynkig mango <br> för intryck?",
            body: "Kundresor är en metod för att kartlägga <br> kundens interaktion och upplevelse med en <br> produkt eller tjänst över tid. <br><br> Genom att visualisera kundens resa - från att <br> inse sitt behov  till att köpa och använda <br> produkten eller tjänsten - kan man identifiera <br> möjliga förbättringsområden. <br> Som till exempel gammal mango <br> på fruktavdelningen.",
            img: "assets/img/projekt/kundresa.svg",
            url: "Skärmklipp på kundresa"
        },
        {
            rubrik: "Småtrollens kooperativ - <br> Från 00-tal till mobile first",
            body: "Småtrollens föräldrakooperativ behövde en <br> modern och <br> användarvänlig hemsida för <br> mobilanvändning. Vi tog fram ett nytt <br> designförslag med hjälp av prototyper för en <br> bättre användarupplevelse.",
            img: "assets/img/projekt/3smatrollen.svg",
            url: "Skärmklipp Småtrollen startsida"
        },
        {
            rubrik: "Praktik - Hur jobbar en lingvist?",
            body: "Åtta veckors praktik på en av Europas största företag för dubbing, undertexter och textmaterial för rörlig media: Plint AB",
            img: "assets/img/projekt/plintMockup.svg",
            url: "plint.html"
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
