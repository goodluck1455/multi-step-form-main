
window.addEventListener('DOMContentLoaded', () => {
  var fullname = document.getElementById("fullname");
  var emmailAdress = document.getElementById("emmailAdress");
  var phoneNumber = document.getElementById("phoneNumber");

  // Retrieve stored data from Local Storage
  fullname.value = localStorage.getItem('fullname');
  emmailAdress.value = localStorage.getItem('emmailAdress');
  phoneNumber.value = localStorage.getItem('phoneNumber');
});



//variable declarations 
let errorMessage = document.querySelector(".validate");
let errorMessageB = document.querySelector("#error-2");
let errorMessageA = document.querySelector(".validate-2");

//varibale form display begins here
let display_One = document.querySelector(".display-one");
let display_Two = document.querySelector(".display-two");
let display_Three = document.querySelector(".display-three");
let display_four = document.querySelector(".display-four");
let returnAngle = document.querySelectorAll(".return-back-angle");

//variable decalaration for buttonSwitch
let buttonSwitch = document.querySelector(".switch");
let buttonSwitchB = document.querySelector(".switchB");
let monthlySwitch = document.querySelector(".monthly");
let yearlySwitch = document.querySelector(".yearly");
let monthlySwitchB = document.querySelector(".monthlyB");
let yearlySwitchB = document.querySelector(".yearlyB");
let yearlyPlanSection = document.querySelectorAll(".yearly-plan-section");
let marginForPlanSection = document.querySelectorAll(".plan-selection");
let PlanAmount = document.querySelectorAll(".plan-amount");
let onlineAmountUpdate = document.querySelectorAll(".onlineAmount");
let serviceAmountUpdate = document.querySelectorAll(".serviceAmountUpdate");
let selectedPlan = document.querySelectorAll(".selectedPlan");
let planSelected = document.querySelector(".planSelected");



//variable decalaration for circle indicator
let circleIndicator = document.querySelector("#circle-group-1");
let circleIndicatorB = document.querySelector(".circle-group-2");
let circleIndicatorC = document.querySelector(".circle-group-3");
let circleIndicatorD = document.querySelector(".circle-group-4");

//Variable declaration for next pages. 
let nextStepButton = document.querySelector("#pickAddons");
let nextStepButtonB = document.querySelector("#planAddon-4");







// function validateAndSubmitForm() {
//   function setBorderRed(element) {
//     element.style.border = '1px solid hsl(354, 84%, 57%)';
//   }

//   function setBorderBlue(element) {
//     element.style.border = '1px solid hsl(243, 100%, 62%)';
//   }

//   var isValid = true;

//   var fullname = document.getElementById("fullname");
//   if (fullname.value === '') {
//     setBorderRed(fullname);
//     errorMessage.style.display = 'block';
//     isValid = false;
//   } else {
//     errorMessage.style.display = 'none';
//     setBorderBlue(fullname);
//   }

//   var emmailAdress = document.getElementById("emmailAdress");
//   if (emmailAdress.value === '') {
//     errorMessageB.style.display = 'block';
//     setBorderRed(emmailAdress);
//     isValid = false;
//   } else {
//     errorMessageB.style.display = 'none';
//     setBorderBlue(emmailAdress);
//   }

//   var phoneNumber = document.getElementById("phoneNumber");
//   if (phoneNumber.value === '') {
//     errorMessageA.style.display = 'block';
//     setBorderRed(phoneNumber);
//     isValid = false;
//   } else {
//     errorMessageA.style.display = 'none';
//     setBorderBlue(phoneNumber);
//   }

//   if (isValid) {
//     // Store user input in Local Storage
//     localStorage.setItem('fullname', fullname.value);
//     localStorage.setItem('emmailAdress', emmailAdress.value);
//     localStorage.setItem('phoneNumber', phoneNumber.value);

//     circleIndicator.style.background = 'none';
//     circleIndicator.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color
//     circleIndicator.style.color = 'hsl(206, 94%, 87%)';
//     circleIndicatorB.style.background = 'hsl(206, 94%, 87%)';
//     circleIndicatorB.style.color = 'hsl(213, 96%, 18%)'; //marineBlue color
//     display_One.style.opacity = "0";
//     display_One.style.transition = "1s";

//     setTimeout(() => {
//       display_One.style.display = "none";
//       display_Two.style.display = "block";
//     }, 1000);
//   }

//   return false;
// }



  // returnAngle.addEventListener("click", function(){

  //   alert("check me well, am working");
  // });

//******Js code for previous form pages begins here*****
  returnAngle.forEach(function(button) {
    button.addEventListener('click', function() {
      
      var computedStyleOne = window.getComputedStyle(display_One);
      var computedStyleTwo = window.getComputedStyle(display_Two);
      var computedStyleThree = window.getComputedStyle(display_Three);
      var computedStyleFour = window.getComputedStyle(display_four);
  
      if (computedStyleTwo.display === "block") {
        if (computedStyleTwo.opacity === "1") {
          display_Two.style.opacity = "0";
          setTimeout(() => {
            display_One.style.display = "block";

           

            setTimeout(() => {
              display_One.style.opacity = "1";
              display_Two.style.display = "none";


              circleIndicator.style.background = 'hsl(206, 94%, 87%)';
              circleIndicator.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color
              circleIndicator.style.color = 'hsl(213, 96%, 18%)';
              circleIndicatorB.style.background = 'none';
              circleIndicatorB.style.color = 'hsl(206, 94%, 87%)'; 
              circleIndicatorB.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color

            }, 100);
          }, 110);
        }
      } else if (computedStyleThree.display === "block") {
        if (computedStyleThree.opacity === "1") {
          display_Three.style.opacity = "0";
          setTimeout(() => {
            display_Two.style.display = "block";


            setTimeout(() => {
              display_Two.style.opacity = "1";
              display_Three.style.display = "none";



              circleIndicatorB.style.background = 'hsl(206, 94%, 87%)';
              circleIndicatorB.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color
              circleIndicatorB.style.color = 'hsl(213, 96%, 18%)';
              circleIndicatorC.style.background = 'none';
              circleIndicatorC.style.color = 'hsl(206, 94%, 87%)'; 
              circleIndicatorC.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color

            }, 100);
          }, 110);
        }
      } else if (computedStyleFour.display === "block") {
        if (computedStyleFour.opacity === "1") {
          display_four.style.opacity = "0";
          setTimeout(() => {
            display_Three.style.display = "block";
            setTimeout(() => {
              display_Three.style.opacity = "1";
              display_four.style.display = "none";



              circleIndicatorC.style.background = 'hsl(206, 94%, 87%)';
              circleIndicatorC.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color
              circleIndicatorC.style.color = 'hsl(213, 96%, 18%)';
              circleIndicatorD.style.background = 'none';
              circleIndicatorD.style.color = 'hsl(206, 94%, 87%)'; 
              circleIndicatorD.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color

            }, 100);
          }, 110);
        }
      } else {
        if (computedStyleOne.opacity === "1") {
          display_One.style.opacity = "0";
          setTimeout(() => {
            display_four.style.display = "block";
            setTimeout(() => {
              display_four.style.opacity = "1";
              display_One.style.display = "none";
            }, 100);
          }, 110);
        }
      }
    });
  });
  
//******Js code for previous form pages ends here*****
   
  




//******Js code for buttonSwitch begins here*****

buttonSwitch.addEventListener("click", function() {
  const screenWidth = window.innerWidth;
  var switchElement = document.querySelector(".switch");
  var mainSwitch = window.getComputedStyle(switchElement, "::after");

  if (mainSwitch.getPropertyValue("left") === "4px") {
    switchElement.style.setProperty("--left-value", "16px");
    monthlySwitch.style.color = "hsl(231, 11%, 63%)";
    yearlySwitch.style.color = "hsl(213, 96%, 18%)";
    yearlyPlanSection.forEach(function(element) {
      element.innerHTML = "2 months free";
    });
    marginForPlanSection.forEach((margin) => {
      margin.style.marginTop = "2rem";
    });
    PlanAmount.forEach((amount, index) => {
      const textOptions = ["$90/yr", "$120/yr", "$150/yr"];
      amount.innerHTML = textOptions[index];
    });

    // if (screenWidth <= 375) {
    //   marginForPlanSection.forEach((margin) => {
    //     margin.style.marginTop = "0.4rem";
    //   });
    // }

  } else {
    switchElement.style.setProperty("--left-value", "4px");
    monthlySwitch.style.color = "hsl(213, 96%, 18%)";
    yearlySwitch.style.color = "hsl(231, 11%, 63%)";
    yearlyPlanSection.forEach(function(element) {
      element.innerHTML = "";
    });
    marginForPlanSection.forEach((margin) => {
      margin.style.marginTop = "3rem";
    });

    PlanAmount.forEach((amount, index) => {
      const textOptions = ["$9/mo", "$12/mo", "$15/mon"];
      amount.innerHTML = textOptions[index];
    });

    // if (screenWidth <= 375) {
    //   marginForPlanSection.forEach((margin) => {
    //     margin.style.marginTop = "0.4rem";
    //   });
    // }


  }
});






//form validation of users input goes here
  function validateAndSubmitForm() {
    function setBorderRed(element) {
      element.style.border = '1px solid hsl(354, 84%, 57%)';
    }
  
    function setBorderBlue(element) {
      element.style.border = '1px solid hsl(243, 100%, 62%)';
    }
  
    var isValid = true;
  
    var fullname = document.getElementById("fullname");
    if (fullname.value === '') {
      setBorderRed(fullname);
      errorMessage.style.display = 'block';
      isValid = false;
    } else {
      errorMessage.style.display = 'none';
      setBorderBlue(fullname);
    }
  
    var emmailAdress = document.getElementById("emmailAdress");
    if (emmailAdress.value === '') {
      errorMessageB.style.display = 'block';
      setBorderRed(emmailAdress);
      isValid = false;
    } else {
      errorMessageB.style.display = 'none';
      setBorderBlue(emmailAdress);
    }
  
    var phoneNumber = document.getElementById("phoneNumber");
    if (phoneNumber.value === '') {
      errorMessageA.style.display = 'block';
      setBorderRed(phoneNumber);
      isValid = false;
    } else {
      errorMessageA.style.display = 'none';
      setBorderBlue(phoneNumber);
    }
  
    if (isValid) {
      // Store user input in Local Storage
      localStorage.setItem('fullname', fullname.value);
      localStorage.setItem('emmailAdress', emmailAdress.value);
      localStorage.setItem('phoneNumber', phoneNumber.value);
  
      circleIndicator.style.background = 'none';
      circleIndicator.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color
      circleIndicator.style.color = 'hsl(206, 94%, 87%)';
      circleIndicatorB.style.background = 'hsl(206, 94%, 87%)';
      circleIndicatorB.style.color = 'hsl(213, 96%, 18%)'; //marineBlue color
  
      // Fade out display_One
      display_One.style.opacity = "0";
      display_One.style.transition = "opacity 0.1s";
  
      // Hide display_One after the transition
      setTimeout(() => {
        display_One.style.display = "none";
  
        // Display display_Two after a delay
        setTimeout(() => {
          display_Two.style.opacity = "1";
          display_Two.style.display = "block";
        }, 100);
      }, 200);
    }
  
    return false;
  }
  



//JS CODE FOR NEXT STEPS(PAGE THREE) goes here
nextStepButton.addEventListener("click", ()=>{
  var computedStyleOne = window.getComputedStyle(display_One);
  var computedStyleTwo = window.getComputedStyle(display_Two);
  var computedStyleThree = window.getComputedStyle(display_Three);
  var computedStyleFour = window.getComputedStyle(display_four);
  // var amountUpdate = PlanAmount.textContent;

 // console.log("it's working");

  if (computedStyleTwo.display === "block") {
    if (computedStyleTwo.opacity === "1") {
      display_Two.style.opacity = "0";
      setTimeout(() => {
        display_Three.style.display = "block";

       

        setTimeout(() => {
          display_Three.style.opacity = "1";
          display_Two.style.display = "none";


          circleIndicatorC.style.background = 'hsl(206, 94%, 87%)';
         circleIndicatorC.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color
          circleIndicatorC.style.color = 'hsl(213, 96%, 18%)';
          circleIndicatorB.style.background = 'none';
          circleIndicatorB.style.color = 'hsl(206, 94%, 87%)'; 
          circleIndicatorB.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color


          PlanAmount.forEach(function(amount) {
            if (amount.textContent.includes("/mo")) {
              // Do something if the PlanAmount has the specified value
              console.log(`The input contains the value '${amount.textContent}'`);
              // const textOptions = ["$9/mo", "$12/mo", "$15/mon"];
                // onlineAmountUpdate.innerHTML = textOptions[index];



              onlineAmountUpdate.forEach((amount, index) => {
                const textOptions = ["+$1/mo", "+$2/mo", "+$2/mon"];
                amount.innerHTML = textOptions[index];
              });

            } else {

              onlineAmountUpdate.forEach((amount, index) => {
                const textOptions = ["+$10/yr", "+$20/yr", "+$20/yr"];
                amount.innerHTML = textOptions[index];
              });
              // Do something if the PlanAmount does not have the specified value
              console.log(`The input does not contains the value '${amount.textContent}'`);
            }
          });

       //begins from here


 



//ends in here



        }, 100);
      }, 110);
    }
  }


});




//JS CODE FOR NEXT STEPS(PAGE FOUR) goes here
nextStepButtonB.addEventListener("click", ()=>{
  var computedStyleThree = window.getComputedStyle(display_Three);

 // console.log("it's working");

  if (computedStyleThree.display === "block") {
    if (computedStyleThree.opacity === "1") {
      display_Three.style.opacity = "0";
      setTimeout(() => {
        display_four.style.display = "block";

       

        setTimeout(() => {
          display_four.style.opacity = "1";
          display_Three.style.display = "none";


          circleIndicatorD.style.background = 'hsl(206, 94%, 87%)';
         circleIndicatorD.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color
          circleIndicatorD.style.color = 'hsl(213, 96%, 18%)';
          circleIndicatorC.style.background = 'none';
          circleIndicatorC.style.color = 'hsl(206, 94%, 87%)'; 
          circleIndicatorC.style.border = '1px solid hsl(206, 94%, 87%)'; //lightBlue color


          onlineAmountUpdate.forEach(function(amount) {
            if (amount.textContent.includes("/mo")) {
          
                serviceAmountUpdate.forEach((amount, index) => {
                const textOptions = ["$9/mo", "+$1/mo", "+$2/mon", "+$12/mo"];
                amount.innerHTML = textOptions[index];
              });

            } else {

              serviceAmountUpdate.forEach((amount, index) => {
                const textOptionB = ["$90/yr", "+$10/yr", "+$20/yr", "+$120/yr"];
                amount.innerHTML = textOptionB[index];
              });
              // Do something if the PlanAmount does not have the specified value
              // console.log(`The input does not contains the value '${amount}'`);
            }
          });

              
         





        }, 100);
      }, 110);
    }
  }


});











 // Get all plan elements with the specified class
const planElements = document.querySelectorAll('.plan-1, .plan-2, .plan-3');

// Attach click event listeners to each plan element
planElements.forEach(function(planElement) {
  planElement.addEventListener('click', function(event) {
    // Get the selectedPlan elements within the clicked plan element
    const selectedPlans = event.currentTarget.querySelectorAll('.selectedPlan');


    selectedPlans.forEach(function(selectedPlan) {
      // Get the text content of each selectedPlan element
      const planText = selectedPlan.textContent;

      PlanAmount.forEach((amount)=>{

        if (amount.textContent.includes("/mo")) {

                planSelected.innerHTML = `${planText} (Monthly)`;
                // console.log("Selected option value:", planText);
              } else{
                planSelected.innerHTML = `${planText} (Yearly)`;
                // console.log("Selected option yearly:", planText);
              }

      });
    });
  });
});




planElements.forEach(element => {
  element.addEventListener('click', () => {
    planElements.forEach(plan => {
      plan.classList.remove('active');
    });
    element.classList.add('active');
  });
});




//button switch for nobile deveice use 
buttonSwitchB.addEventListener("click", function() {
  const screenWidth = window.innerWidth;
  var switchElement = document.querySelector(".switchB");
  var mainSwitch = window.getComputedStyle(switchElement, "::after");

  if (mainSwitch.getPropertyValue("left") === "4px") {
    switchElement.style.setProperty("--mobile-value", "16px");
    monthlySwitchB.style.color = "hsl(231, 11%, 63%)";
    yearlySwitchB.style.color = "hsl(213, 96%, 18%)";
    yearlyPlanSection.forEach(function(element) {
      element.innerHTML = "2 months free";
    });
    marginForPlanSection.forEach((margin) => {
      margin.style.marginTop = "-0.2rem";
    });
    PlanAmount.forEach((amount, index) => {
      const textOptions = ["$90/yr", "$120/yr", "$150/yr"];
      amount.innerHTML = textOptions[index];
    });

    // if (screenWidth <= 375) {
    //   marginForPlanSection.forEach((margin) => {
    //     margin.style.marginTop = "0.4rem";
    //   });
    // }

  } else {
    switchElement.style.setProperty("--mobile-value", "4px");
    monthlySwitchB.style.color = "hsl(213, 96%, 18%)";
    yearlySwitchB.style.color = "hsl(231, 11%, 63%)";
    yearlyPlanSection.forEach(function(element) {
      element.innerHTML = "";
    });
    marginForPlanSection.forEach((margin) => {
      margin.style.marginTop = "0.4rem";
    });

    PlanAmount.forEach((amount, index) => {
      const textOptions = ["$9/mo", "$12/mo", "$15/mon"];
      amount.innerHTML = textOptions[index];
    });

    // if (screenWidth <= 375) {
    //   marginForPlanSection.forEach((margin) => {
    //     margin.style.marginTop = "0.4rem";
    //   });
    // }


  }
});







