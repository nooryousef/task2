/// <reference types= "cypress" />

describe('assignment', () => {
  // let array=[]
  // let arrayold=[]
 
    it('summation', () => {

      
      cy.visit('https://www.automationteststore.com/')
   let sumnew=0
  let sumold=0
      cy.get('#special > .container-fluid').find('.pricenew').each(($new_price) => {
  
  
          let price=parseFloat($new_price.text().replace('$',''))
  
          sumnew += price
  //  array.push(price)
  
  //  let summnew=array.reduce((a, b) =>{
  //   return a + b },0)
    cy.log(sumnew)
  
  
  
  })
  
  
  
  
  
      cy.get('#special > .container-fluid').find('.priceold').each(($old_price) => {
  
  
        let priceOld=parseFloat($old_price.text().replace('$',''))
  
        sumold += priceOld
  // arrayold.push(priceOld)
  //      let summold=arrayold.reduce((c, d) =>{
  //      return c + d })
        
       cy.log(sumold)
  
  
  
       }).then(() => {
        alert(`Hey, the sum of the old prices is $${sumold}, and the sum of the new prices is $${sumnew}`)
      });
  
    });
  });
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
  