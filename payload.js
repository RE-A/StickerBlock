var currenturl = location.href;

if(currenturl.indexOf("blog.naver.com") != -1){
    var mainFrame = document.getElementsByName('mainFrame');
    if(mainFrame[0] != null){
        var innerHtmlUrl = mainFrame[0].src;
        location.href = innerHtmlUrl;
    }
    else{
        hidestiker();
    }
}
else{
    var frameset = document.getElementsByName('screenFrame');
    if(frameset[0]!=null){
        var blogUrl = frameset[0].src;
        location.href = blogUrl;
    }
}

function hidestiker(){
    var stickerNum = 0 ;

    // img 형식으로 올라온 스티커를 제거하는 파트
    pics = document.getElementsByTagName('img');
    var re = /https\:\/\/storep-phinf\.pstatic\.net.*/
    for(var i = 0 ; i<pics.length;i++ ){
        imgsrc = pics[i].src;
        if(re.exec(imgsrc)){
            stickerNum++;
            pics[i].style.display='none';
        }
    }

    // sticker 클래스로 올라온 스티커를 제거하는 파트
    var stickerArrayList = document.getElementsByClassName('se-sticker-image');
    if(stickerArrayList.length > 0){
        $(".se-sticker-image").hide()
        stickerNum += stickerArrayList.length;
    }

    if(stickerNum>0){
        sendingMeg = JSON.parse(JSON.stringify(stickerNum));
        chrome.runtime.sendMessage(sendingMeg);
    }
}