document.getElementById('button').addEventListener('click', getJSON);
document.getElementById('reverse').addEventListener('click', getString)
document.body.style.backgroundColor= '#607D8B'
// document.getElementById('textArea').body.style.backgroundColor= '#ECEFF1'

function getJSON() {
    //fetch JSON from textbox and beautify
    try {

        var raw = document.getElementById('textArea').value.trim();

        if (raw.endsWith(",")) {
            raw = raw.substr(0, raw.length - 1).trim();
        }

        var parsed = JSON.parse(raw);
        if (typeof parsed === "string") {
            parsed = JSON.parse(parsed);
        }

        var beautified = JSON.stringify(parsed, null, 4);
        document.getElementById('textArea').value = beautified;
    }
    catch (ex) {
        document.getElementById('textArea').value = "Oops, we ran into an error :  " + ex.message;
    }


}

//function to create an escaped string from a formated JSON
function getString() {
    var t = document.getElementById('textArea').value;
    if (t[0] != '{') {
        document.getElementById('textArea').value = "Oops, we ran into an an error - please check the JSON and ensure all quotes and white spaces before the JSON are omitted";
    }
    else {
        try {
            var t = document.getElementById('textArea').value;
            var stringed = JSON.stringify(t, null, 4)
            document.getElementById('textArea').value = stringed
            console.log(stringed)
        }
        catch (err) {
            console.log(err.message);
            document.getElementById('textArea').value = "Oops, we ran into an an error - " + err.message;
        }
    }
}

function getSelection(selection) {
    //fetch JSON from textbox and beautify
    try {

        var raw = selection;

        if (raw.endsWith(",")) {
            raw = raw.substr(0, raw.length - 1).trim();
        }

        var parsed = JSON.parse(raw);
        if (typeof parsed === "string") {
            parsed = JSON.parse(parsed);
        }

        var beautified = JSON.stringify(parsed, null, 4);
        document.getElementById('textArea').value = beautified;
    }
    catch (ex) {
        document.getElementById('textArea').value = "Oops, we ran into an error :  " + ex.message;
    }


}


var contextMenuitem = {
  "id": "contextMenu",
  "title": "JSONBeautifier",
  "contexts" : ["selection"],
  "onclick": onClickHandler
}

chrome.contextMenus.removeAll(function() {
  chrome.contextMenus.create(contextMenuitem)});


chrome.runtime.onInstalled.addListener(function(){
  var id = chrome.contextMenus.create(contextMenuitem);
});


chrome.contextMenus.onClicked.addListener(onClickHandler);

// window.addEventListener("message", function(event){
//   if (event.source != window)
//          return;
//
//   if (event.data.type && (event.data.type == "FROM_PAGE")) {
//       getJSON(event.data.text)
//   }
// });

// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//     if (request.method == "getSelection")
//         sendResponse({data: window.getSelection().toString()});
//     else
//         sendResponse({}); // snub them.
// });

// The onClicked callback function.
function onClickHandler(info, tab) {
      console.log(info.selectionText)
      var selection = info.selectionText;
      console.log(selection)
      chrome.runtime.sendMessage({type: "FROM_PAGE", text : selection})

      var id = chrome.windows.create({'url': 'popup.html', 'type': 'popup', height: 460, width: 429}, function(newWindow) {
          var tab = newWindow.tabs[0].id;
          chrome.tabs.executeScript(newWindow.tabs[0].id, {}, 'background.js')

      });
      // id = chrome.windows.WINDOW_ID_CURRENT
  //   console.log(typeof(id))
  //   id.getElementById('textArea').value = getJSON(selection)
  // console.log("Context clicked")
}

convertJSON(selection)
{
    var k = selection.trim()
    if (k.endsWith(", ")) {
        k = k.substr(0, raw.length - 1).trim();
    }
    var parsed = JSON.parse(k)
    if (typeof parsed == "string") {
        parsed = JSON.parse(parsed)
        var beatified = JSON.stringify(parsed, null, 4)
        document.getElementById("textArea").value = beautified;
    }
}