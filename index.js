var outerDiv = document.getElementById('outer');
var innerDiv = document.getElementById('inner');
var colorButton = document.getElementById('btn-1');
var shapeButton = document.getElementById('btn-2');

colorButton.addEventListener('click', function () {
    outerDiv.style.backgroundColor = "green";
});

shapeButton.addEventListener('click', function () {
    innerDiv.classList.add("triangle");
});