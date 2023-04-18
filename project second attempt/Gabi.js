
console.log("hello world");

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("samkerr")) {
        image.src = "australia football pic.jpg";
    }
    else {
        image.src = "samkerr.jpg";
    }
}

    