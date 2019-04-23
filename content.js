
$(function(){

    chrome.runtime.onMessage.addListener(

        function(request, sender, sendResponse) {
          console.log(request.save_to);

          if (request.save_to)
            sendResponse({info: "saved..."});
    });

})