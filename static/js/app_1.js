// import the datta from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear out any existing data
    tbody.html("");

    //Loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}   

//Create functions
function handleClick(){
    //Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //Check to see if a date was entered and
    //...filter the data using that date
    if (date) {
        //Apply filter to table data to only keep
        //..the rows where datetime value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    } 

    //Rebuild table using filtered data
    //@NOTE: If no date was entered, then filteredData will
    //just be the original tableData
    buildTable(filteredData);
}        
 //Listen for event of button click
d3.selectAll("#filter-btn").on("click", handleClick);
    
//Build table when the page loads
buildTable(tableData);
