
$(function(){
  var object = {
    "id": "save_to",
    "title": "Save to..",
    "contexts": ["link", "selection", "audio", "video", "image", "frame"]
  }

  chrome.contextMenus.create(object);

  chrome.contextMenus.onClicked.addListener(function (info){
    console.log(info);
    
    //send Message to Client.
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        chrome.tabs.sendMessage(tabs[0].id, {save_to: info}, function(response) {
        console.log(response);
        });

    });

  })

})



 
    // chrome.runtime.sendMessage({save_to: object}, function(response) {
    //     //   console.log(response.farewell);
    // });


    // chrome.runtime.onMessage.addListener(
    //     function(request, sender, sendResponse) {
    //       console.log(request);
    //       // if (request.save_to == "hello")
    //       //   sendResponse({farewell: "goodbye"});
    // });
 

