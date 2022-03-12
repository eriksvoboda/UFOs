// import the data from data.js
const tableData = data;

// reference the thml table using d3
var tbody = d3.select("tbody");

/*
// original addition function
function addition(a, b) {
    return a + b;
}
// convert original additiona function to an arrown function
// => is known as the fat arrow
addition = (a, b) => a + b;

// convert the double addition function to an arrow function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}
// double addition as an arrow function
doubleAddition = (c, d) => addition(c, d) * 2;
*/

function buildTable(data) {
    //clear the existing data before reinserting data thatalready exists
    tbody.html("");
    //tbody references the table pointing JS directly to the table inthe HTML page we're going to build
    // the parentheses with empty quotes is an empty string
    
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // tell JS to reference one object from the array of UFO sightings, by adding (dataRow) as the arguement we are saying that we
        // want the values to go into the data row
        // we added forEach((val)) to specify that we want one object per row
        Object.values(dataRow).forEach((val) => {
            // append each value of the object to a cell in the table
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
// with this function we've
// looped through each object in the array, appended a row to the HTML table and added each value from the object into a cell

function handleClick() {
    // chaining property(value) tells D3 not only to look for where our date values are stored on the webpage but to 
    // actually grab that info and hold it in the "date" varaiable
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        // apply filter to the table data to only keep the rows where the date time value matches the filter value
        filteredData = filteredData.filter(row => row.datetime ===date);
    };

    // rebuild the table using the filtered data
    // note: if no date was entered then filtereddata will just be the original tableData
    buildTable(filteredData);
};

// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);