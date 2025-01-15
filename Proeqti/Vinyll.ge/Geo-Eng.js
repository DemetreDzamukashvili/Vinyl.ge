async function Enis_Shecvla(lang) {
    document.cookie = `lang=${lang}; samesite=none; secure`
    if (lang === "eng") {
        document.getElementById('GEO').src = "assetes/en-gb.png";
        const Res = await fetch("english.json");
        const Trans = await Res.json();
    
        const translatableElements = document.querySelectorAll('[data-i18n]');
    
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (Trans[key]) {
                element.innerHTML = Trans[key];
            }
        });
    } else if (lang === "geo") {
        location.reload();
    }
}
let lang;
let arr = document.cookie.split('; ')
arr.forEach(element => {
    if(element.startsWith('lang=')) {
        lang = element.split('=')[1];
        console.log(lang)
    } 
})

async function translate() {
    if (lang === "eng") {
        const Res = await fetch('english.json');
        const Trans = await Res.json();
        const translatableElements = document.querySelectorAll('[data-i18n]');
    
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (Trans[key]) {
                element.innerHTML = Trans[key];
            }
        });
    }
}


translate();