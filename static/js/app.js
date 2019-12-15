// Define Table Data from data.js
var tableData = data;

// Define Function for Table Generation
function generateTable()

    {var thead = d3.select("thead").selectAll("th").data(d3.keys(tableData[0])).enter()
    .append("th").text(function(d){return d});

    var tr = d3.select("tbody").selectAll("tr").data(tableData).enter().append("tr")
    
    var td = tr.selectAll("td").data(function(d){return d3.values(d)}).enter().append("td")
    .text(function(d) {return d})}

generateTable();