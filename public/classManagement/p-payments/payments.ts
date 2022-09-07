import { toAddPayment } from "../modules/href.js";

let addClassBtn: HTMLButtonElement = document.getElementById(
  "add-button"
) as HTMLButtonElement;

addClassBtn.addEventListener("click", toAddPayment);

//tsc --module es6 ./public/p-payments/payments.ts
