var ImageOption = function(source, name){
  this.source = source;
  this.label = name;
  this.y = 0;
  this.voteCounter = function() {
    this.y = this.y + 1;
  }
}

images = []
images.push(new ImageOption("banana.jpg", "Banana"))
images.push(new ImageOption("boots.jpg", "Boots"))
images.push(new ImageOption("chair.jpg", "Chair"))
images.push(new ImageOption("cthulhu.jpg", "Cthulhu"))
images.push(new ImageOption("dragon.jpg", "Dragon"))
images.push(new ImageOption("pen.jpg", "Pen"))
images.push(new ImageOption("r2d2.jpg", "R2D2"))
images.push(new ImageOption("scissors.jpg", "Scissors"))
images.push(new ImageOption("shark.jpg", "Shark"))
images.push(new ImageOption("sweep.jpg", "Sweeper"))
images.push(new ImageOption("unicorn.jpg", "Unicorn"))
images.push(new ImageOption("usb.jpg", "USB"))
images.push(new ImageOption("water_can.jpg", "Water Can"))
images.push(new ImageOption("wine_glass.jpg", "Wine Glass"))


function addImage(imageObject) {
  var container = document.getElementById("image-container");
  var image = document.createElement("img");
  image.src = "images/" + imageObject.source;
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

var clickAmount = 0;

function recordClick(event) {
  var imageSource = event.target.src;
  var fullFileName = imageSource.split("images/")[1];
  var index = 0;
  var imageNodes = document.getElementsByTagName("img")[0];
  var imageNodes2 = document.getElementsByTagName("img")[1];
  var imageNodes3 = document.getElementsByTagName("img")[2];
  var sectionNode = document.getElementById("image-container")
  while (fullFileName !== images[index].source){
    index++
  };
  images[index].voteCounter();
  clickAmount+=1;
  console.log("Number of Votes for " + imageSource.split("images/")[1] + " so far = " + images[index].y)
  sectionNode.removeChild(imageNodes);
  sectionNode.removeChild(imageNodes2);
  sectionNode.removeChild(imageNodes3);
  //showImages();
  if (clickAmount < 15) {
    showImages();
  } else {
    showChart.render();
  }
}

  var showChart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "theme3",
        title:{
          text: "Voting Results Pie Chart"
        },
        data: [
          {
           type: "pie",
           dataPoints: images
         }
         ]
       });

window.addEventListener("load", showImages)
