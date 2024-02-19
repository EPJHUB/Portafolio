import language from "./language.json" assert {type: 'json'}
//navbar
const nav1 = document.getElementById('lan-nav1');
const nav2 = document.getElementById('lan-nav2');
const nav3 = document.getElementById('lan-nav3');
const nav4 = document.getElementById('lan-nav4');
const nav5 = document.getElementById('lan-nav5');
const nav6 = document.getElementById('lan-nav6');
//hero
const heroPhrase = document.getElementById('lan-hero-phrase');
const heroProfession1 = document.getElementById('lan-hero-profession-1');
const heroProfession2 = document.getElementById('lan-hero-profession-2');
//about-secction
const aboutSecctionTitle = document.getElementById('lan-about-section-title');
const aboutCardTitle1 = document.getElementById('lan-about-card-title1');
const aboutCardText1 = document.getElementById('lan-about-card-text1');
const aboutCardTitle2 = document.getElementById('lan-about-card-title2');
const aboutCardText2 = document.getElementById('lan-about-card-text2');
//milestones-secction
const msSecctionTitle = document.getElementById('lan-ms-section-title');
const msTlTitle1 = document.getElementById('lan-ms-tl-title1')
const msTlTitle2 = document.getElementById('lan-ms-tl-title2')






const setLanguage = (lan) => {
    //navbar
    nav1.innerText = language[lan].nav[1];
    nav2.innerText = language[lan].nav[2];
    nav3.innerText = language[lan].nav[3];
    nav4.innerText = language[lan].nav[4];
    nav5.innerText = language[lan].nav[5];
    nav6.innerText = language[lan].nav[6];
    //hero
    heroPhrase.innerText = language[lan].hero.phrase;
    heroProfession1.innerText = language[lan].hero.profession1;
    heroProfession2.innerText = language[lan].hero.profession2;

    aboutSecctionTitle.innerText = language[lan].about.secctionTitle;
    aboutCardTitle1.innerText = language[lan].about.cardTitle1;
    aboutCardText1.innerText = language[lan].about.cardText1;
    aboutCardTitle2.innerText = language[lan].about.cardTitle2;
    aboutCardText2.innerText = language[lan].about.cardText2;
}

export { setLanguage };
