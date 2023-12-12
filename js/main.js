document.addEventListener('DOMContentLoaded', ()=> {
    const title = document.querySelector('.wrapper--title');

    let locale = window.navigator.language || 'en';

    const spinner = document.querySelector('.spinner');

    locale = locale.substring(0,2).toLowerCase();

    locale = 'uk';

    if(!['en', 'uk'].includes(locale)) {
        locale = 'en';
    }

    fetch('https://raw.githubusercontent.com/FoXXXiT/hr_t_hub/master/messages.json').then((data)=> data.json()).then(data=> {

        if(!data[locale] && !data[locale].length) {
            return;
        }

        spinner.remove();

        const randomIndex = Math.round(Math.random() * (data[locale].length - 1));

        title.innerHTML = data[locale][randomIndex];
    });

    
});