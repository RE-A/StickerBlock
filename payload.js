// send the page title as a chrome message
var stickerArrayList = document.getElementsByClassName('se-sticker-image');
var stickerText, sendingMeg;
console.log(stickerArrayList);
for(i=1 ; i<stickerArrayList.length; i++ ){         //  steickerArrayList[0] is unidentified.
    stickerText += stickerArrayList[i].src;
}
sendingMeg = JSON.parse(JSON.stringify(stickerText));

chrome.runtime.sendMessage(sendingMeg);
    
    