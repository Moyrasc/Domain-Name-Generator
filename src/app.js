/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".es", ".us"];

  const domainNameGeneretor = (param1, param2, param3, param4) => {
    for (let i = 0; i < param1.length; i++) {
      for (let x = 0; x < param2.length; x++) {
        for (let j = 0; j < param3.length; j++) {
          for (let y = 0; y < param4.length; y++) {
            let newNameDomain = `${param1[i]}${param2[x]}${param3[j]}${param4[y]}`;

            console.log(newNameDomain);
          }
        }
      }
    }
  };
  domainNameGeneretor(pronoun, adj, noun, domain);
};
