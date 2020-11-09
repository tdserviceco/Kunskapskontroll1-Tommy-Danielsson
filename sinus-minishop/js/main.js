//Setup hjärtat av allt
setup = () => {
    // Välkommen i de 3 språk jag kan.
    language = ['Welcome', 'Välkommen', '歡迎']
    console.log(`${language[Math.floor(Math.random() * 3)]}!`)

    clickThisButton() // Kallar event click när click är aktiv
    resetBack(); // Kallar också click fast när klick är aktiv, återställ allting
}


clickThisButton = () => {
    const mainElement = document.querySelector('main'); //Hämta main
    const button = mainElement.children[0].children[4]; //Dyk till barnbarn nr 4 och hämta elementen button
    button.addEventListener('click', () => {
        //Varför inte köra en ny function här? jag tyckte det var smått onödigt att ha mer funktioner för ett arbete.

        const img = document.querySelector('figure img')
        img.setAttribute('src', 'img/hoodie-forrest.png');

        const bg = document.querySelector('.art-1');
        bg.style.background = 'yellow';

        const text = document.querySelector('.art-2 p');
        text.textContent = language[Math.floor(Math.random() * 3)];

        const secondButton = document.querySelector('.art-2 button');
        secondButton.style.background = 'green';

        const removeItem = document.querySelector('.art-3 button');

        // OM remove knapp i art-3 finns då ta bort den annars skippa detta och gå direkt till createList()
        if (removeItem) {
            removeItem.remove()
        }
        createList(); // Skapa en Li lista som ska gå till en tom UL som jag la till i index.html
    })
}

resetBack = () => {
    const resetButton = document.querySelector('.reset-btn');
    resetButton.addEventListener('click', () => {

        const img = document.querySelector('figure img')
        img.setAttribute('src', 'img/hoodie-ash.png');

        const bg = document.querySelector('.art-1');
        bg.style.background = 'inherit';

        const text = document.querySelector('.art-2 p');
        text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!'

        const secondButton = document.querySelector('.art-2 button');
        secondButton.style.background = 'black';

        const addItem = document.querySelector('.art-3');
        const button = document.createElement('button');


        checkButtons = document.querySelectorAll('.art-3 button');
        removeList(); // Ta bort listan som skapades

        //Kolla hur många knappar reset gör åt en.. finns det mer än 1.. ta bort alla förutom 1 och FINNS det redan en.. gör inget då!
        if (checkButtons.length === 0) {
            addItem.appendChild(button);
            button.textContent = 'buy'
            return button;
        }
        else {
            return
        }

    })
};


removeList = () => {
    const sectionFooterUl = document.querySelector('footer section ul');
    // OM ul är tomt.. gör inget, finns det innehåll ta bort allt!
    if (sectionFooterUl === null) {
        return;
    }
    else {
        sectionFooterUl.remove();
    }
}


createList = () => {
    /* 
    
    Här blev jag lite överkomplex på mitt tänkande men det funkar!
    Poängen här är jag ska lägga till 3st items i min ul. 
    Ta bort klass .hide så listan syns när saker kommer till ul.
    Men först kollar vi om UL existeras. För när vi trycker på reset måste hela UL bort.

    */
    const sectionFooter = document.querySelector('footer');
    const lastSectionInFooter = sectionFooter.children[sectionFooter.children.length - 1].children[0];
    const list = ['Hej', 'Hi', '你好']
    if (lastSectionInFooter) {
        const removeHideFromSection = document.querySelector('footer');
        removeHideFromSection.children[sectionFooter.children.length - 1].classList.remove('hide');

        list.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element;
            lastSectionInFooter.appendChild(li);
            return;
        })
    }
    else {
        const newUl = document.createElement('ul');
        addNewUl = sectionFooter.children[sectionFooter.children.length - 1];
        addNewUl.appendChild(newUl);
        grabNewUl = document.querySelector('footer section ul');
        list.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element;
            grabNewUl.appendChild(li);
            return;
        })
    }
}

setup();