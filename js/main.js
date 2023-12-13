document.addEventListener('DOMContentLoaded', ()=> {
    const title = document.querySelector('.wrapper--title');

    console.log(window.navigator.language);
    
    let locale = window.navigator.language || 'en-US';

    console.log(locale);

    const spinner = document.querySelector('.spinner');

    locale = locale.substring(0,2).toLowerCase();

    if(!['en-US', 'ua-UA'].includes(locale)) {
        locale = 'en';
    }

    fetch('https://raw.githubusercontent.com/FoXXXiT/hr_t_hub/master/messages.json').then((data)=> data.json()).then(data=> {

        if(!data[locale] && !data[locale].length) {
            return;
        }
        
        setTimeout(()=> {
            spinner.remove();
        }, 500)
    

        const randomIndex = Math.round(Math.random() * (data[locale].length - 1));

        title.innerHTML = data[locale][randomIndex];
    });

    
});
