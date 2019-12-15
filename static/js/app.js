// Define Table Data from data.js
var tableData = data;

// Define Function for Table Generation
function generateTable(Data)

    // Create Table & Column Headers
    {var thead = d3.select("thead").selectAll("th").data(d3.keys(Data[0])).enter()
    .append("th").text(function(x){return x});

    // Add Rows to Table
    var tr = d3.select("tbody").selectAll("tr").data(Data).enter().append("tr")
    
    // Add Cells to Table & Insert Data
    var td = tr.selectAll("td").data(function(x){return d3.values(x)}).enter().append("td")
    .text(function(x) {return x})

    console.log(td)}

generateTable(tableData)

// Define Function for Filtering Data
function filterData()

    {event.preventDefault()

    d3.selectAll('tr').remove()

    var filteredData = tableData

    var date = d3.select("#datetime").node().value
    console.log(date)

    if (date !== "")
        {filteredData = tableData.filter(data => data.datetime === date)
        console.log(filteredData)}
        
    generateTable(filteredData)

    d3.select("#datetime").node().value = ""}

d3.select("#filter-btn").on("click", filterData)