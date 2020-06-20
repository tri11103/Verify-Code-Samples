$(document).ready (() => {
    $("#tables").append('<h3 id="file-name">FILE NAME</h3>');        
    $("#tables").append('<hr/>');
    $("#tables").append('<table id="information-table" class="table"></table>');        
    $("#information-table").last().append("<th>Error Type</th>");
    $("#information-table").last().append("<th>Description</th>");
    $("#information-table").last().append("<th>Path</th>");
    $("#information-table").last().append("<th>Line:Column</th>");  

    for (var i = 0; i < json.length; i++) {    
        $("#file-name").text(json[i].path);        
        var row = $("#information-table").last().append("<tr></tr>");    
        row.append("<td>" + json[i].type + "</td>");                
        row.append("<td>" + json[i].message + "</td>");
        row.append("<td>" + json[i].path + "</td>");
        row.append("<td>" + json[i].line + ":" + json[i].column + "</td>");            
    }

    $("#loading-animation").hide();
});