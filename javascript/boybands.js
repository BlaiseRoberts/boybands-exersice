var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var i = 0; i < loopCount; i+= 1) {

  // Add the band names into the correct <div>
  bandElement.innerHTML = bandElement.innerHTML + "<h3>" + bands[i] + "</h3>";
 
  // Add the veggie names into the correct <div>
  veggieElement.innerHTML = veggieElement.innerHTML + "<h5>" + vegetables[i] + "</h5>";
}