document.writeln('<div id="w3"></div>');
let div = document.getElementById("w3");
let divInnerHTML = `<a href="notesOnW3schoolsHTML.html">HTML</a>\n`;
divInnerHTML += `<a href="notesOnW3schoolsCSS.html">CSS</a>\n`;
divInnerHTML += `<a href="notesOnW3schoolsJavaScript.html">JavaScript</a>\n\n`;
divInnerHTML += `<a href="bestHTMLBooks.html">HTML Books</a>\n`;
divInnerHTML += `<a href="bestCSSBooks.html">CSS Books</a>\n`;
divInnerHTML += `<a href="bestJavaScriptBooks.html">JavaScript Books</a>\n`;
div.innerHTML = divInnerHTML;
