console.log("头像")
document.getElementById("image").addEventListener("click", function() {
  console.log("鼠标点击一次",image.src)
  if (image.src === "https://picture.adunas.top/BilibiliOpenA.webp") {
    console.log("点击的是图像A")
    image.src = "https://picture.adunas.top/BilibiliCloseA.webp";
  } else {
    console.log("点击的是图像B")
    image.src = "https://picture.adunas.top/BilibiliOpenA.webp";
  }
});