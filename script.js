document.writeln('<div id="w3"></div>');
let div = document.getElementById("w3");
let divInnerHTML = `<a href="notesOnW3schoolsHTML.html">HTML</a>\n`;
divInnerHTML += `<a href="notesOnW3schoolsCSS.html">CSS</a>\n`;
divInnerHTML += `<a href="notesOnW3schoolsJavaScript.html">JavaScript</a>`;
div.innerHTML = divInnerHTML;
