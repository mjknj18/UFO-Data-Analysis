// Define Table Data from data.js
var tableData = data;

// Define Function for Table Generation
function generateTable(Data)

    // Create Table & Column Headers
    {var thead = d3.select("thead").selectAll("th").data(d3.keys(Data[0])).enter().append("th").text(x => x);

    // Add Rows to Table
    var tr = d3.select("tbody").selectAll("tr").data(Data).enter().append("tr")
    
    // Add Cells to Table & Insert Data
    var td = tr.selectAll("td").data(x => d3.values(x)).enter().append("td").text(x => x)}

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

    // Extract City Filter from HTML Form
    var city = d3.select("#city").node().value

    // Extract State Filter from HTML Form
    var state = d3.select("#state").node().value

    // Extract Country Filter from HTML Form
    var country = d3.select("#country").node().value

    // Extract Shape Filter from HTML Form
    var shape = d3.select("#shape").node().value

    // Filter Data Based on Date
    if (date !== "")
        {filteredData = filteredData.filter(y => y.datetime === date)}

    // Filter Data Based on City
    if (city !== "")
        {filteredData = filteredData.filter(y => y.city === city.toLowerCase())}

    // Filter Data Based on State
    if (state !== "")
        {filteredData = filteredData.filter(y => y.state === state.toLowerCase())}

    // Filter Data Based on Country
    if (country !== "")
        {filteredData = filteredData.filter(y => y.country === country.toLowerCase())}

    // Filter Data Based on Shape
    if (shape !== "")
        {filteredData = filteredData.filter(y => y.shape === shape.toLowerCase())}
    
    // Display Full Table on Web Page
    generateTable(filteredData)

    // Clear Date Filter Field in HTML Form
    d3.select("#datetime").node().value = ""

    // Clear City Filter Field in HTML Form
    d3.select("#city").node().value = ""

    // Clear State Filter Field in HTML Form
    d3.select("#state").node().value = ""

    // Clear Country Filter Field in HTML Form
    d3.select("#country").node().value = ""

    // Clear Shape Filter Field in HTML Form
    d3.select("#shape").node().value = ""}

// Listen for Apply Filter Button Click
d3.select("#filter-btn").on("click", filterData)