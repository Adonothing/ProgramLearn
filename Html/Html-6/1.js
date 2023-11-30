console.log("头像")
var currentIndex = 0; // 当前显示的图片索引号
var newIndex = 0; // 下一张显示的图片索引号
var images = [
  "https://picture.adunas.top/BilibiliOpenA.webp", 
  "https://picture.adunas.top/BilibiliCloseA.webp", 
  "https://picture.adunas.top/HatsuneMikuA-1920-1200.jpg"
]; // 图片列表，根据实际情况修改，要求第一图像和配置文件_config.butterfly.yml里的相同。


//------检索所有容器，检测到鼠标点击后，同时切换所有地方的图片--------//
var ContainerIndex = 0;
var ContainerLength = document.getElementsByClassName("image").length;
while(ContainerIndex !== ContainerLength){ //每个容器都要检查

  var imageContainer = document.getElementsByClassName("image")[ContainerIndex];
  imageContainer.addEventListener("click", function() { // 检查该容器是否被鼠标单击
  // imageContainer.addEventListener("dblclick", function() { // 检查该容器是否被鼠标双击

    while (newIndex === currentIndex) { // 新的索引号不能等于旧的索引号
      newIndex = Math.floor(Math.random() * images.length); // 随机生成新的索引号
    }
    currentIndex = newIndex;

    var NewContainerIndex = 0;
    while(NewContainerIndex !== ContainerLength){ // 每个容器都要切换相同的图片
      var NewImageContainer = document.getElementsByClassName("image")[NewContainerIndex];
      var image = NewImageContainer.getElementsByTagName("img")[0];
      image.src = images[currentIndex]; // 更新图片路径
      NewContainerIndex ++;
    }
  });

  ContainerIndex ++;
}