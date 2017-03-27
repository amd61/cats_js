var app = function() {
    // get the section of cats
    var list  = document.getElementById('cats');
    // make a new ul for this cat
    var newCat = document.createElement('ul');
    // now add a li for name
    var newCatName = document.createElement('li');
    // put in the name
    newCatName.innerText = "Name: Cat McDog";
    // now add a li for food
    var newCatFood = document.createElement('li');
    // put in the fav food
    newCatFood.innerText = "Favourite food: Cat litter";
    // now add a li for the picture
    var newCatPic = document.createElement('li');
    // and an img for the pic itself
    var catImg = document.createElement('img');
    // set image width to 500
    catImg.width = "500";
    // put in the image address
    catImg.src = "http://i.imgur.com/RmnFVAq.png";
    // add cat name li to ul
    newCat.appendChild(newCatName);
    // add cat fav food li to ul
    newCat.appendChild(newCatFood);
    // add cat image to the picture li
    newCatPic.appendChild(catImg);
    // add picture li to the ul
    newCat.appendChild(newCatPic);
    // finally add the new cat to the main section
    list.appendChild(newCat);


}

window.onload = app;