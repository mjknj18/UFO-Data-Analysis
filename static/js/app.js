// Define Table Data from data.js
var tableData = data;

// Define Function for Table Generation
function generateTable()

    // Define Blank List for Header Values
    {var col = [];

    //Extract Header Values from Table Data
    for (var i = 0; i < tableData.length; i++)
        {for (var key in tableData[i])
            {if (col.indexOf(key) === -1)
                {col.push(key);}}}

    // Create Table
    var table = document.createElement("table");

    // Add Header Row to Table
    var tr = table.insertRow(-1);

    // Add Column Headers to Table
    for (var i = 0; i < col.length; i++)
        {var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);}

    // Add Rows for Table Data
    for (var i = 0; i < tableData.length; i++)
        {tr = table.insertRow(-1);
        
        for (var j = 0; j < col.length; j++)
            {var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = tableData[i][col[j]];}}

    // Create HTML Container for Table
    var divContainer = document.getElementById("ufo-table");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);}

generateTable();