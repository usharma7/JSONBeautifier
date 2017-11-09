document.getElementById('button').addEventListener('click', getJSON);

function getJSON(){
  //fetch JSON from textbox and beautify
  try{
  var t = document.getElementById('textArea').value;
  var beautified = JSON.parse(t)
  beautified= JSON.stringify(beautified, null, 4)
  document.getElementById('button').value = beautified;


    }
    catch (Exception ex){

    }

}
