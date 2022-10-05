//w3c validator
import { w3cHtmlValidator } from "w3c-html-validator";

const options = { filename: "../index.html" };
w3cHtmlValidator.validate(options).then(w3cHtmlValidator.reporter);
//Verification page Hobbie
const optionsHobbie = { filename: "../hobbies.html" };
w3cHtmlValidator.validate(optionsHobbie).then(w3cHtmlValidator.reporter);
//Verification Formation
const optionsFormation = { filename: "../formation.html" };
w3cHtmlValidator.validate(optionsFormation).then(w3cHtmlValidator.reporter);
