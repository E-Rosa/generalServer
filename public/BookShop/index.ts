import { RandomBookGenerator } from "./components/RandomBookGenerator/RandomBookGenerator.js";
import {Book} from "./components/Book/Book.js";

let book = new Book(
  'Siddartha',
  'Siddhartha, the handsome and respected son of a Brahmin, lives with his father in ancient India. Everyone in the village expects Siddhartha to be a successful Brahmin like his father. Siddhartha enjoys a near-idyllic existence with his best friend, Govinda, but he is secretly dissatisfied. He performs all the rituals of religion, and he does what religion says should bring him happiness and peace. Nonetheless, he feels something is missing. His father and the other elders have still not achieved enlightenment, and he feels that staying with them will not settle the questions he has about the nature of his existence. Siddhartha believes his father has already passed on all the wisdom their community has to offer, but he longs for something more.',
  12,
  './assets/images/books/siddartha.png'
);
let book2 = new Book(
  'Siddartha 2',
  'Siddhartha, the handsome and respected son of a Brahmin, lives with his father in ancient India. Everyone in the village expects Siddhartha to be a successful Brahmin like his father. Siddhartha enjoys a near-idyllic existence with his best friend, Govinda, but he is secretly dissatisfied. He performs all the rituals of religion, and he does what religion says should bring him happiness and peace. Nonetheless, he feels something is missing. His father and the other elders have still not achieved enlightenment, and he feels that staying with them will not settle the questions he has about the nature of his existence. Siddhartha believes his father has already passed on all the wisdom their community has to offer, but he longs for something more.',
  12,
  './assets/images/books/siddartha.png'
);
let RBG = new RandomBookGenerator([book, book2])
RBG.display(document.body);
