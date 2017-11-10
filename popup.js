document.getElementById('button').addEventListener('click', getJSON);
document.getElementById('reverse').addEventListener('click', getString)

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
