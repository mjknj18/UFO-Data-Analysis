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
    .text(function(x) {return x})}

// Display Full Table on Web Page Initialization    
generateTable(tableData)

// Define Function for Filtering Data
function filterData()

    // Prevent Web Page from Refreshing
    {event.preventDefault()

    // Clears Current Table
    d3.selectAll('tr').remove()

    // Define Variable for Filtered Data
    var filteredData = tableData

    // Extract Date Filter from HTML Form
    var date = d3.select("#datetime").node().value

    // Filter Data Based on Date
    if (date !== "")
        {filteredData = filteredData.filter(y => y.datetime === date)}
    
    // Display Full Table on Web Page
    generateTable(filteredData)

    // Clear Filter Fields
    d3.select("#datetime").node().value = ""}

// Listen for Apply Filter Button Click
d3.select("#filter-btn").on("click", filterData)