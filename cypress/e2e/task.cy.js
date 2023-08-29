/// <reference types= "cypress" />

const { functions } = require("cypress/types/lodash");


// describe('Print the name of the first item and the last item ', () => {
//   it('first category - FEATURED', () => {
//         cy.visit("https://www.automationteststore.com/");

//         cy.get('#featured > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//           cy.log("first item inside the Featured Category is : ",the_text)
//         })

//         cy.get('#featured > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//           cy.log("last item inside the Featured Category is : ",the_text)

//         })
//   });

//   it('second category - latest products', () => {
//     cy.visit("https://www.automationteststore.com/");

//     cy.get('#latest > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//       cy.log("first item inside the latest Category is : ",the_text)
//     })

//     cy.get('#latest > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//       cy.log("last item inside the latest Category is : ",the_text)

//     })
// });
// });

// describe("this is to see the price multiply by 10 ", () => {
//   it("hey we need to see the price multiply by 10 for the first item inside best seller category", () => {
//     cy.visit("https://www.automationteststore.com/");
//     cy.get("#bestseller > .container-fluid")
//       .find(".oneprice")
//       .first()
//       .invoke("text")
//       .then((the_text) => {
//         // cy.log(the_text.replace("$", "") * 10);
// let ModifiedPrice = (the_text.replace("$",""))*10
// cy.log(ModifiedPrice)

//         // alert(`the price of the element multiplied by 10 is ${ModifiedPrice}`)


//       });
//   });
// });


describe('assigment ', () => {
  it('summation old price and new price  ', () => {
    cy.visit("https://www.automationteststore.com/");

    cy.get('#special > .container-fluid').find('.pricenew').invoke('text').then((new_price) => {
      cy.log(new_price)
      const num = []
      for (let i = 0; i <= new_price.length; i++) {
        if (typeof (new_price[i]) === "number") {
          num.push(new_price[i])
        }
      }
      let sum = 0

      for (let j = 0; j < num.length; j++) {
        sum += num[j];

      }
      cy.log(sum)


    })
    cy.get('#special > .container-fluid').find('.priceold').invoke('text').then((old_price) => {
      cy.log(old_price)
      const numold = []
      for (let a = 0; i <= old_price.length; a++) {
        if (typeof (old_price[a]) === "number") {
          numold.push(old_price[a])
        }
      }
      let sumold = 0

      for (let b = 0; b < num.length; b++) {
        sumold += numold[b];

      }
      cy.log(sumold)


    })

    alert(`hey the summation of new price is ${sum}  and the old price is ${sumold}`)


  });
});