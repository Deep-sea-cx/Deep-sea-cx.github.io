let clickCount = 0;
let lastClickTime = 0;

document.addEventListener('click', function(event) {
  const currentTime = Date.now();
  const timeSinceLastClick = currentTime - lastClickTime;

  // 检查是否在短时间内连续点击
  if (timeSinceLastClick <= 1000) {
    // 记录点击次数
    clickCount++;

    // 检查是否达到了五次点击
    if (clickCount === 5) {
      // 打开新页面
      window.open('./egg.html', '_blank');

      // 重置点击计数器
      clickCount = 0;
    }
  } else {
    // 如果时间间隔超过一秒，则重置计数器
    clickCount = 1;
  }

  // 更新最后点击的时间
  lastClickTime = currentTime;
});
