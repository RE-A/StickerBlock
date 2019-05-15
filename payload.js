// send the page title as a chrome message
// https://blog.naver.com/webhouse73/220496881108
// https://blog.naver.com/ssyj963/221505966350

var stickerArrayList = document.getElementsByClassName('se-sticker-image');
$(".se-sticker-image").hide()
sendingMeg = JSON.parse(JSON.stringify(stickerArrayList.length));

chrome.runtime.sendMessage(sendingMeg);
    
    