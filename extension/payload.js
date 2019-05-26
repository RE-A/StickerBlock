// send the page title as a chrome message
// https://blog.naver.com/webhouse73/220496881108
// https://blog.naver.com/ssyj963/221505966350
var currenturl = location.href;
if(currenturl.indexOf("blog.naver.com") != -1){
    var mainFrame = document.getElementsByName('mainFrame');
    if(mainFrame[0] != null){
        var innerHtmlUrl = mainFrame[0].src;
        location.href = innerHtmlUrl;
    }
    else{
        gettexts();
        getpicscount();
        hidestiker();
    }
}
else{
    var frameset = document.getElementsByName('screenFrame');
    if(frameset[0]!=null){
        var blogUrl = frameset[0].src;
        location.href = blogUrl;
    }else{
        alert("Can not parse");
    }
}
function gettexts(){
    //var texts = document.getElementsByClassName('se_textarea');
    var texts = document.getElementsByTagName('span');
    if(texts.length <1){
        console.log("no span tags");
        texts = document.getElementsByTagName('p');
    }
    for(i=0;i<texts.length;i++){
        console.log(texts[i].innerHTML);
    }
}
function getpicscount(){
    var pics = document.getElementsByClassName('se-image-resource');
    //var pics = document.getElementsByTagName('img');
    //console.log(pics[1].src);
    console.log(pics.length);
    //chrome.runtime.sendMessage(JSON.parse(JSON.stringify(pics.length)));
}
function hidestiker(){
    var stickerArrayList = document.getElementsByClassName('se-sticker-image');
    if(stickerArrayList.length > 0){
        $(".se-sticker-image").hide()
        sendingMeg = JSON.parse(JSON.stringify(stickerArrayList.length));
        chrome.runtime.sendMessage(sendingMeg);
    }
    else{
        alert("no sticker");
    }
}