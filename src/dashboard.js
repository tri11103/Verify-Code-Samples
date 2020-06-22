$(document).ready (() => {
    $("#tables").append('<h3 id="file-name">FILE NAME</h3>');        
    $("#tables").append('<hr/>');
    $("#tables").append('<div id="message-panel" class="panel modifier-class"></div>')

    if (json.length != 0) {
        $("#message-panel").last().append('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 45 45" class="svg-icon"><path fill="#e4a793" d="M21.605 8l2.406 2.402-5.602 5.599 5.602 5.601L21.605 24l-5.598-5.599L10.405 24l-2.394-2.398 5.598-5.601-5.598-5.599L10.405 8l5.602 5.601L21.605 8zM32 10.6v10.801l-8.594 10.6H8.605L0 21.401V10.6L8.605 0h14.801L32 10.6zm-2.4 10.585V10.816l-6.822-8.415H9.235l-6.834 8.417v10.365L9.235 29.6h13.543l6.822-8.415z"/></svg>');
        $("#message-panel").last().append('<span class="trailer-0">File contains issues.</span>');
        $("#message-panel").last().append('<button id="fix-now" class="btn modifier-class" style="float: right;"> Fix Now </button>');
        $("#tables").append('<table id="information-table" class="table"></table>');        
        $("#information-table").last().append('<th style="background-color: #c4bcdc; color: white;">Issue Type</th>');
        $("#information-table").last().append('<th style="background-color: #c4bcdc; color: white;">Description</th>');
        $("#information-table").last().append('<th style="background-color: #c4bcdc; color: white;">Path</th>');
        $("#information-table").last().append('<th style="background-color: #c4bcdc; color: white;">Line:Column</th>');  

        for (var i = 0; i < json.length; i++) {    
            $("#file-name").text(json[i].path.substr(json[i].path.lastIndexOf("\\")+1, json[i].length));        
            var row = $("#information-table").last().append("<tr></tr>");    
            row.append("<td>" + json[i].type + "</td>");                
            row.append("<td>" + json[i].message + "</td>");
            row.append("<td>" + json[i].path + "</td>");
            row.append("<td>" + json[i].line + ":" + json[i].column + "</td>");            
        }        
    } else {
        $("#file-name").text("");        
        $("#message-panel").last().append('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 45 45" class="svg-icon"><path fill="#9bc19c" d="M31.297 16.047c0 8.424-6.826 15.25-15.25 15.25S.797 24.471.797 16.047 7.623.797 16.047.797s15.25 6.826 15.25 15.25zm-7.793-7.801L13.16 18.59l-4.168-4.176-2.324 2.324 6.492 6.492 12.668-12.66-2.324-2.324z"/></svg>');
        $("#message-panel").last().append('<span class="trailer-0">File contains no issues. Hooray!</span>')
    }

    $("#loading-animation").hide();


    $("#fix-now").click(() => {
        function download(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
          
            element.style.display = 'none';
            document.body.appendChild(element);
          
            element.click();
          
            document.body.removeChild(element);
        }

        $("#loading-animation").show();
        
        var lines = python.split("\n")

        var fileName = "";
        for (var i = 0; i < json.length; i++) {
            if (fileName == "") {
                fileName = json[i].path.substr(json[i].path.lastIndexOf("\\")+1, json[i].length);
            }

            if (json[i].message.includes("Exactly one space required after comma")) {                
                var res = lines[Number(json[i].line) - 1].replaceAll(/,\s+/g, ", ")
                res = lines[Number(json[i].line) - 1].replaceAll(/(,(?=\S)|:)/g, ", ")
                lines[Number(json[i].line) - 1] = res;                   
            } else if (json[i].message.includes("doesn't conform to UPPER_CASE")) {        
                var variable = json[i].message.substr(json[i].message.indexOf("\""), json[i].message.lastIndexOf("\""));
                var res = "";
                for (var index = 0; index < variable.length; index++) {
                    if (variable[index].match(/[A-Z]/) && index != 0) {
                        res  += '_' + variable[index].toLowerCase();
                    } else if (variable[index].match(/[A-Z]/) && index == 0) {
                        res  += variable[index].toLowerCase();
                    } else {
                        res += variable[index];
                    }

                    for (var line in lines) {
                        line.replace(variable, res);
                    }
                }                              
            } else if (json[i].message.includes("doesn't conform to snake_case naming style")) {
                var res = ""
                for (var index = 0; index < fileName.length; index++) {
                    if (fileName[index].match(/[A-Z]/) && index != 0) {
                        res  += '_' + fileName[index].toLowerCase();
                    } else if (fileName[index].match(/[A-Z]/) && index == 0) {
                        res  += fileName[index].toLowerCase();
                    } else {
                        res += fileName[index];
                    }
                }                    
                fileName = res;
            }
        }
        
        download(fileName, lines.join("\n"));        
        
        $("#loading-animation").hide();        
    });
});