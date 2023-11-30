console.log("头像")
var imageContainer = document.getElementById("image-container");
var image = imageContainer.getElementsByTagName("img")[0];
 
imageContainer.addEventListener("click", function() {
  console.log("鼠标点击一次",image.src)
  // 本地图片
  // if (image.src === "file:///P:/01_Adunas/Private/Html/BilibiliOpenA.webp") { //奇怪读的时候是带路径的。
  // 图床图片
  if (image.src === "https://picture.adunas.top/BilibiliOpenA.webp") {
    console.log("点击的是图像A")
    // 本地图片
    // image.src = "BilibiliCloseA.webp";
    // 图床图片
    image.src = "https://picture.adunas.top/BilibiliCloseA.webp";
  } else {
    console.log("点击的是图像B")
    // 本地图片
    // image.src = "BilibiliOpenA.webp";
    // 图床图片
    image.src = "https://picture.adunas.top/BilibiliOpenA.webp";
  }
});