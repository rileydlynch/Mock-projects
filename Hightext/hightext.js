document.getElementById("demo").addEventListener("click", getSelectionText);

window.getSelection().anchorNode.parentNode

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
};

var hightext = getSelectionText();

alert(hightext);
