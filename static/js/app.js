// Define Table Data from data.js
var tableData = data;

// Define Function for Filtering Data
function filterData()

    {console.log(d3.select("#datetime").node().value)}

// Define Function for Table Generation
function generateTable(filteredData)

    // Create Table & Column Headers
    {var thead = d3.select("thead").selectAll("th").data(d3.keys(filteredData[0])).enter()
    .append("th").text(function(x){return x});

    // Add Rows to Table
    var tr = d3.select("tbody").selectAll("tr").data(filteredData).enter().append("tr")
    
    // Add Cells to Table & Insert Data
    var td = tr.selectAll("td").data(function(x){return d3.values(x)}).enter().append("td")
    .text(function(x) {return x})}

d3.select("#filter-btn").on("click", filterData())

generateTable(tableData);