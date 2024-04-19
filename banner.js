// Make the red banner to turn green when hover can be implemented using CSS but let me use JS vanilla through DOM here

var bgRed = document.querySelector(".bg-red")

bgRed.addEventListener("mouseover", function(){
    bgRed.classList.add('bg-green')
})

bgRed.addEventListener("mouseout", function() {
    bgRed.classList.remove("bg-green");
});