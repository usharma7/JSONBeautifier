// /**
//  * Created by Utkarsh Sharma  on 11/10/17.
//  */
{
    var selection = info.selectionText;
    var k = selection.trim()
    if (k.endsWith(", ")) {
        k = k.substr(0, raw.length - 1).trim();
    }
    var parsed = JSON.parse(k)
    if (typeof parsed == "string") {
        parsed = JSON.parse(parsed)
        var beautified = JSON.stringify(parsed, null, 4)
        document.getElementById("textArea").value = beautified;
    }
}
//
// chrome.runtime.onMessage.addListener(function(response, sender, sendResponse ){
//     var id = chrome.windows.create({'url': 'popup.html', 'type': 'popup', height: 460, width: 429}, function() {
//
//             chrome.tabs.executeScript(newWindow.tabs[0].id,  function(){
//                 code : 'var k = selection.trim()' +
//                 + " if (k.endsWith(",")) { k = k.substr(0, raw.length - 1).trim();}"
//                 + 'var parsed = JSON.parse(k)'
//                 + 'if (typeof parsed== "string"){parsed = JSON.parse(parsed)'
//                 + 'var beatified = JSON.stringify(parsed, null, 4'
//                 + 'document.getElementById("textArea").value = beautified;'
//
//
//             })
//         }
//     );
// });
//
// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
//         sendServiceRequest(response.data);
//     });
// });
//
// function getJSON(selection) {
//     //fetch JSON from textbox and beautify
//     try {
//
//         var raw =selection
//
//         if (raw.endsWith(",")) {
//             raw = raw.substr(0, raw.length - 1).trim();
//         }
//
//         var parsed = JSON.parse(raw);
//         if (typeof parsed === "string") {
//             parsed = JSON.parse(parsed);
//         }
//
//         var beautified = JSON.stringify(parsed, null, 4);
//         document.getElementById('textArea').value = beautified;
//     }
//     catch (ex) {
//         document.getElementById('textArea').value = "Oops, we ran into an error :  " + ex.message;
//     }
//
//
// }
//
