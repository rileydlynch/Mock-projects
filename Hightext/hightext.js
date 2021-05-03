document.getElementById("button1").addEventListener("click", getSelectionText);

function getSelectionText() {

	
    if (window.getSelection) {
		var selected = document.getSelection();
		var selecttext = "";
		var docparent;
		var anchornode = document.getSelection().anchorNode;
		var wholetext = anchornode.wholeText;
		var importantindex = document.getSelection().anchorOffset;
		var newinnerHTML  = wholetext.slice(2,importantindex).concat("<mark>" + document.getSelection().toString() + "</mark>",wholetext.slice(document.getSelection().focusOffset,wholetext.length));
        selecttext =selected.toString(); //assigns selected text to variable
		docparent = anchornode.parentNode
		anchornode.parentNode.innerHTML = newinnerHTML; //selects the first instance of text selected, need to make sure it selects the correct instance.
    }
	else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
		alert(text);
		document.getElementById("mytext").innerHTML = document.getElementById("mytext").innerHTML.replace(text,"<mark>" + text + "</mark>");
    }
};



//document.getSelection()//.anchorNode.parentNode
