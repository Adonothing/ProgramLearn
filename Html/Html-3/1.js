console.log("头像")
var currentIndex = 0; // 当前显示的图片索引号
var images = [
  "https://picture.adunas.top/BilibiliOpenA.webp", 
  "https://picture.adunas.top/BilibiliCloseA.webp", 
  "https://picture.adunas.top/HatsuneMikuA-1920-1200.jpg"
]; // 图片列表，根据实际情况修改

document.getElementById("image").addEventListener("click", function() {
  console.log("鼠标点击一次",image.src)
  currentIndex++; // 索引号加1
  if (currentIndex >= images.length) { // 超过图片总数，循环切换到第一张图片
    currentIndex = 0; // 重置索引号为0
  }
  image.src = images[currentIndex]; // 更新图片路径
});