document.getElementById('reverse').addEventListener('click', popup.js.getJSON)
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
  try {

      var raw = selection[0];

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

});

function getJSON(selection) {
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

c
