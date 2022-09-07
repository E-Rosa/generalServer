export class RandomBookGenerator {
    constructor(booksArray) {
        this.booksArray = booksArray;
    }
    display(parent) {
        let RBGrootContainer = document.createElement('section');
        RBGrootContainer.className = 'RBG-container';
        parent.appendChild(RBGrootContainer);
        let RBGSubmitButton = document.createElement('button');
        RBGSubmitButton.className = 'RBG-submit-button button';
        RBGSubmitButton.textContent = 'Get a book recomendation!';
        RBGSubmitButton.addEventListener('click', () => {
            RBGSubmitButton.remove();
            let RBGbackButton = document.createElement('button');
            RBGbackButton.className = 'RBG-back-button';
            RBGbackButton.textContent = '<';
            RBGbackButton.addEventListener('click', () => {
                RBGrootContainer.remove();
                this.display(parent);
            });
            this.booksArray[0].display(RBGrootContainer);
            RBGrootContainer.appendChild(RBGbackButton);
        });
        RBGrootContainer.appendChild(RBGSubmitButton);
    }
}
