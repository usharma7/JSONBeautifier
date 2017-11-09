function getJSON(){
  //fetch JSON from textbox and beautify
  var t = document.getElementById('textArea').getvalue;
  // var beautified = JSON.parse(t)
  document.getElementById('textArea').value = t + "Clicked!";
      console.log("Clicked!")

}

document.getElementById('button').addEventListener('click', getJSON());
