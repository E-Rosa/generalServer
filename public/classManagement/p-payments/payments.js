"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const href_js_1 = require("../modules/href.js");
let addClassBtn = document.getElementById("add-button");
addClassBtn.addEventListener("click", href_js_1.toAddPayment);
//tsc --module es6 ./public/p-payments/payments.ts
