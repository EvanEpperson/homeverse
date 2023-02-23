'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 






// if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         var lat = position.coords.latitude;
//         var long = position.coords.longitude;
//         var point = new google.maps.LatLng(lat, long);
//         new google.maps.Geocoder().geocode(
//             {'latLng': point},
//             function (res, status) {
//                 var zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
//                 $("#location").val(zip);          
//             }
//         );
//     });
// }

url = 'http://api.weatherapi.com/v1/current.json?key=8817d7e82ef048e08dd213258232202&q=70714&aqi=no'

// var testing = fetch(url)

//   .then((response) => response.json())
//   .then((data) => console.log(data.location));


// console.log(testing)


// var testingName = document.getElementById("addressCoder");
// var testingName2 = testingName.innerText
// var testingName3 = testingName2.innerText = 'testing this dick'
// console.log(testingName2 + 'test');



function beautifulFunctionName(url) {
 return fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data.location));

  }
// console.log(beautifulFunctionName(url));


var addressTest = document.getElementById("addressCoder");
let newString = addressTest.innerHTML
document.getElementById("addressCoder").innerHTML = beautifulFunctionName(url)
console.log(addressTest);

