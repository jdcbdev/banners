// Make the red banner to turn green when hover can be implemented using CSS but let me use JS vanilla through DOM here

var bgRed = document.querySelector(".bg-red")
var h1 = document.querySelector("h1 span")

bgRed.addEventListener("mouseover", function(){
    bgRed.classList.add('bg-green')
})

bgRed.addEventListener("mouseout", function() {
    bgRed.classList.remove("bg-green");
});

h1.addEventListener("click", function() {
    if(h1.innerHTML == "Hello")
        h1.innerHTML = "Jaydee"
    else
        h1.innerHTML = "Hello"
});