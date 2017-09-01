var imageTallies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

var ImageOption = function(name){
  this.name = name;
  this.fileName = name + ".jpg";
  this.numberOfVotes = 0;
  this.voteCounter = function() {
    this.numberOfVotes = this.numberOfVotes + 1;
  }
}

images = []
images.push(new ImageOption("banana"))
images.push(new ImageOption("boots"))
images.push(new ImageOption("chair"))
images.push(new ImageOption("cthulhu"))
images.push(new ImageOption("dragon"))
images.push(new ImageOption("pen"))
images.push(new ImageOption("r2d2"))
images.push(new ImageOption("scissors"))
images.push(new ImageOption("shark"))
images.push(new ImageOption("sweep"))
images.push(new ImageOption("unicorn"))
images.push(new ImageOption("usb"))
images.push(new ImageOption("water_can"))
images.push(new ImageOption("wine_glass"))


function addImage(imageObject) {
    var container = document.getElementById("image-container");
    var image = document.createElement("img");
    image.src = "images/" + imageObject.fileName;
    image.addEventListener("click",recordClick);
    container.appendChild(image);
}

function showImages() {
  var index = Math.floor(Math.random() * 14)
  addImage(images[index]);
  var indexTwo = Math.floor(Math.random() * 14)
  while(indexTwo == index) {
      indexTwo = Math.floor(Math.random() * 14);
  }
  addImage(images[indexTwo]);
  var indexThree = Math.floor(Math.random() * 14)
  while(indexThree == indexTwo || indexThree == index){
      indexThree = Math.floor(Math.random() * 14);
  }
  addImage(images[indexThree]);
}

function recordClick(event) {
  var imageSource = event.target.src
  var fullFileName = imageSource.split("images/")[1]
  var index = 0;
  var imageNodes = document.getElementsByTagName("img")[0];
  var imageNodes2 = document.getElementsByTagName("img")[1];
  var imageNodes3 = document.getElementsByTagName("img")[2];
  var sectionNode = document.getElementById("image-container")
      do{
      index++
    } while (fullFileName !== images[index].fileName);
    images[index].voteCounter();
    sectionNode.removeChild(imageNodes);
    sectionNode.removeChild(imageNodes2);
    sectionNode.removeChild(imageNodes3);
    console.log(images[index])
    showImages();
    // alert("You clicked " + imageSource.split("images/")[1] + "! Keep choosing!")
   }

window.addEventListener("load", showImages)
