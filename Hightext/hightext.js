document.getElementById("button1").addEventListener("click", getSelectionText);

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString(); //assigns selected text to variable
		alert(text); //alerts selected text
		document.getElementById("mytext").innerHTML = document.getElementById("mytext").innerHTML.replace(text,"<mark>" + text + "</mark>"); //puts <mark> around selected text, thus highlighting text. https://stackoverflow.com/questions/31872270/javascript-replace-text-in-an-element
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
		alert(text);
		document.getElementById("mytext").innerHTML = document.getElementById("mytext").innerHTML.replace(text,"<mark>" + text + "</mark>");
    }
};



//document.getSelection()//.anchorNode.parentNode
