export let popUpObj = {
    msg: '',
    color: '',
    display: (msg, func) => {
        let popUpContainer = document.createElement('div');
        let popUpText = document.createElement('span');
        let popUpYesButton = document.createElement('button');
        let popUpNoButton = document.createElement('button');
        let popUpButtonsContainer = document.createElement('section');
        popUpYesButton.id = 'popUp-yesButton';
        popUpNoButton.id = 'popUp-noButton';
        popUpContainer.id = 'popUp-container';
        popUpText.id = 'popUp-text';
        popUpButtonsContainer.id = 'popUp-buttonsContainer';
        popUpText.textContent = msg;
        popUpNoButton.textContent = 'No';
        popUpYesButton.textContent = 'Yes';
        document.body.appendChild(popUpContainer);
        popUpContainer.appendChild(popUpText);
        popUpContainer.appendChild(popUpButtonsContainer);
        popUpButtonsContainer.appendChild(popUpYesButton);
        popUpButtonsContainer.appendChild(popUpNoButton);
        popUpYesButton.addEventListener("click", () => {
            func();
            popUpContainer.remove();
        });
        popUpNoButton.addEventListener('click', () => {
            popUpContainer.remove();
        });
    }
};
