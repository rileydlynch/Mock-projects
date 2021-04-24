document.getElementById("button1").addEventListener("click", getSelectionText);

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
		alert(text);
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
		alert(text);
    }
};
