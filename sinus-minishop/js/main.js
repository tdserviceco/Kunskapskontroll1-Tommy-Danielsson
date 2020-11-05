setup = () => {
    language = ['Welcome', 'Välkommen', '歡迎']
    console.log(`${language[Math.floor(Math.random() * 3)]}!`)

    clickThisButton()
    resetBack();
}


clickThisButton = () => {
    const mainElement = document.querySelector('main');
    const button = mainElement.children[0].children[4];
    button.addEventListener('click', () => {
        const img = document.querySelector('figure img')
        img.setAttribute('src', 'img/hoodie-forrest.png');

        const bg = document.querySelector('.art-1');
        bg.style.background = 'yellow';

        const text = document.querySelector('.art-2 p');
        text.textContent = language[Math.floor(Math.random() * 3)];

        const secondButton = document.querySelector('.art-2 button');
        secondButton.style.background = 'green';

        const removeItem = document.querySelector('.art-3 button');
        if (removeItem) {
            removeItem.remove()
        }
        createList();
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
        removeList()
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
    if (sectionFooterUl === null) {
        return;
    }
    else {
        sectionFooterUl.remove();
    }
}


createList = () => {
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