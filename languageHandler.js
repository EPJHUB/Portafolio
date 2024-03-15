import language from "./language.json" assert {type: 'json'}
//navbar
const nav1 = document.getElementById('lan-nav1');
const nav2 = document.getElementById('lan-nav2');
// const nav3 = document.getElementById('lan-nav3');
const nav4 = document.getElementById('lan-nav4');
const nav5 = document.getElementById('lan-nav5');
const nav6 = document.getElementById('lan-nav6');
const lanBtn = document.getElementById('lan-btn');
//hero
const heroPhrase = document.getElementById('lan-hero-phrase');
const heroProfession1 = document.getElementById('lan-hero-profession-1');
const heroProfession2 = document.getElementById('lan-hero-profession-2');
const downloadCvBtn = document.getElementById('download-cv-btn');

const anchorCvAts = document.getElementById('anchor-cv-ats');
const anchorCv = document.getElementById('anchor-cv');

const pdfCvContainer = document.querySelector('.pdf-cv-container');
const pdfCvAtsContainer = document.querySelector('.pdf-cv-ats-container');
// console.log(pdfCvAtsContainer)

//about-secction
const aboutSecctionTitle = document.getElementById('lan-about-section-title');
const aboutCardTitle1 = document.getElementById('lan-about-card-title1');
const aboutCardText1 = document.getElementById('lan-about-card-text1');
const aboutCardTitle2 = document.getElementById('lan-about-card-title2');
const aboutCardText2 = document.getElementById('lan-about-card-text2');
//milestones-secction
// const msSecctionTitle = document.getElementById('lan-ms-section-title');
// const msTimeline1Title = document.getElementById('lan-ms-timeline1-title');
// const msDegree1 = document.getElementById('lan-ms-degree1')
// const msDegree1Init = document.getElementById('lan-ms-degree1-init')
// const msDegree1End = document.getElementById('lan-ms-degree1-end')
// const msDegree2 = document.getElementById('lan-ms-degree2')
// const msDegree2Init = document.getElementById('lan-ms-degree2-init')
// const msDegree2End = document.getElementById('lan-ms-degree2-end')
// const msDegree3 = document.getElementById('lan-ms-degree3')
// const msDegree3Init = document.getElementById('lan-ms-degree3-init')
// const msDegree3End = document.getElementById('lan-ms-degree3-end')

// const msTimeline2Title = document.getElementById('lan-ms-timeline2-title');
// const msJob1 = document.getElementById('lan-ms-job1')
// const msJob1Init = document.getElementById('lan-ms-job1-init')
// const msJob1End = document.getElementById('lan-ms-job1-end')
// const msJob2 = document.getElementById('lan-ms-job2')
// const msJob2Init = document.getElementById('lan-ms-job2-init')
// const msJob2End = document.getElementById('lan-ms-job2-end')
//project
const projectSecctionTitle = document.getElementById('lan-project-section-title');
//skills
const skillSecctionTitle = document.getElementById('lan-skill-section-title');
//contact
const contactSecctionTitle = document.getElementById('lan-contact-section-title');
const contactName = document.getElementById('name');
const contactEmail = document.getElementById('email');
const contactMessage = document.getElementById('message-label');
const contactSubmitBtn = document.getElementById('contact-submit-btn');
//footer
const footerText = document.getElementById('lan-footer');




const setWelcomeText = (lan)  => {
    const welcomeText = language[lan].welcomeText;
    return welcomeText;
}



const setLanguage = (lan) => {
    //navbar
    nav1.innerText = language[lan].nav[1];
    nav2.innerText = language[lan].nav[2];
    // nav3.innerText = language[lan].nav[3];
    nav4.innerText = language[lan].nav[4];
    nav5.innerText = language[lan].nav[5];
    nav6.innerText = language[lan].nav[6];
    //
    localStorage.setItem("epj-portfolio-lan",lanBtn.innerText);
    lanBtn.innerText = language[lan].nav.lan;
    //hero
    heroPhrase.innerText = language[lan].hero.phrase;
    heroProfession1.innerText = language[lan].hero.profession1;
    heroProfession2.innerText = language[lan].hero.profession2;
    downloadCvBtn.innerText = language[lan].hero.downloadBtn;

    anchorCv.setAttribute("href",language[lan].hero.anchorCv);
    anchorCvAts.setAttribute("href",language[lan].hero.anchorCvAts);

    pdfCvContainer.style.backgroundImage = language[lan].hero.bgImgCv;
    pdfCvAtsContainer.style.backgroundImage = language[lan].hero.bgImgCvAts;

    aboutSecctionTitle.innerText = language[lan].about.secctionTitle;
    aboutCardTitle1.innerText = language[lan].about.cardTitle1;
    aboutCardText1.innerText = language[lan].about.cardText1;
    aboutCardTitle2.innerText = language[lan].about.cardTitle2;
    aboutCardText2.innerText = language[lan].about.cardText2;
    //milestones
    // msSecctionTitle.innerText = language[lan].milestones.secctionTitle;
    // msTimeline1Title.innerText = language[lan].milestones.timelineTitle1;
    // msDegree1.innerText = language[lan].milestones.degree1;
    // msDegree1Init.innerHTML = language[lan].milestones.degree1init;
    // msDegree1End.innerHTML = language[lan].milestones.degree1end;
    // msDegree2.innerText = language[lan].milestones.degree2;
    // msDegree2Init.innerHTML = language[lan].milestones.degree2init;
    // msDegree2End.innerHTML = language[lan].milestones.degree2end;
    // msDegree3.innerText = language[lan].milestones.degree3;
    // msDegree3Init.innerHTML = language[lan].milestones.degree3init;
    // msDegree3End.innerHTML = language[lan].milestones.degree3end;
    // msTimeline2Title.innerText = language[lan].milestones.timelineTitle2;
    // msJob1.innerText = language[lan].milestones.job1;
    // msJob1Init.innerHTML = language[lan].milestones.job1init;
    // msJob1End.innerHTML = language[lan].milestones.job1end;
    // msJob2.innerText = language[lan].milestones.job2;
    // msJob2Init.innerHTML = language[lan].milestones.job2init;
    // msJob2End.innerHTML = language[lan].milestones.job2end;
    //projects
    projectSecctionTitle.innerText = language[lan].projects.secctionTitle;
    //skills
    skillSecctionTitle.innerText = language[lan].skills.secctionTitle;
    //contact
    contactSecctionTitle.innerText = language[lan].contact.secctionTitle;
    contactName.setAttribute("placeholder",language[lan].contact.contactName);
    contactEmail.setAttribute("placeholder",language[lan].contact.contactEmail);
    contactMessage.innerText = language[lan].contact.messageLabel;
    contactSubmitBtn.innerText = language[lan].contact.submitBtn;
    //footer
    footerText.innerHTML = language[lan].footer.text;
}

export { setLanguage, setWelcomeText };
