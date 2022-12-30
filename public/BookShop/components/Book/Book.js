"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(bookTitle, bookDescription, bookPrice, bookImg) {
        this.bookTitle = bookTitle;
        this.bookDescription = bookDescription;
        this.bookPrice = bookPrice;
        this.bookImg = bookImg;
    }
    display(RBGrootContainer) {
        let RBGbookImage = document.createElement('div');
        RBGbookImage.className = 'RBG-book-image';
        this.bookImg ? RBGbookImage.style.backgroundImage = `url('${this.bookImg}')` : '';
        RBGrootContainer.appendChild(RBGbookImage);
        let RBGpriceTag = document.createElement('div');
        RBGpriceTag.className = 'RBG-price-tag';
        RBGpriceTag.textContent = `$${this.bookPrice}!`;
        RBGbookImage.appendChild(RBGpriceTag);
        let RBGverticalContainer = document.createElement('section');
        RBGverticalContainer.className = 'RBG-vertical-container';
        RBGrootContainer.appendChild(RBGverticalContainer);
        let RBGtitle = document.createElement('h1');
        RBGtitle.className = 'RBG-title';
        RBGtitle.textContent = this.bookTitle;
        RBGverticalContainer.appendChild(RBGtitle);
        let RBGdescription = document.createElement('p');
        RBGdescription.className = 'RBG-description';
        RBGdescription.textContent = this.bookDescription;
        RBGverticalContainer.appendChild(RBGdescription);
        let RBGseeMoreButton = document.createElement('button');
        RBGseeMoreButton.className = 'button RBG-see-more-button ';
        RBGseeMoreButton.textContent = 'See more!';
        RBGverticalContainer.appendChild(RBGseeMoreButton);
    }
}
exports.Book = Book;
