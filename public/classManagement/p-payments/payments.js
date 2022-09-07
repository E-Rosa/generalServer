import { toAddPayment } from "../modules/href.js";
let addClassBtn = document.getElementById("add-button");
addClassBtn.addEventListener("click", toAddPayment);
//tsc --module es6 ./public/p-payments/payments.ts
