console.log("头像")
var currentIndex = 0; // 当前显示的图片索引号
var newIndex = 0; // 下一张显示的图片索引号
var images = [
  "https://picture.adunas.top/BilibiliOpenA.webp", 
  "https://picture.adunas.top/BilibiliCloseA.webp", 
  "https://picture.adunas.top/HatsuneMikuA-1920-1200.jpg"
]; // 图片列表，根据实际情况修改

document.getElementById("image").addEventListener("click", function() {
  console.log("鼠标点击一次",image.src)
  while (newIndex === currentIndex) { // 新的索引号不能等于旧的索引号
    newIndex = Math.floor(Math.random() * images.length); // 随机生成新的索引号
  }
  currentIndex = newIndex;
  image.src = images[currentIndex]; // 更新图片路径
});