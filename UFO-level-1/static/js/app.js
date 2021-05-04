// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
// YOUR CODE HERE!
// console.log(data);
function buildTable(){
  data.forEach(function(sighting) {
    // console.log(sighting);
    var row = tbody.append("tr");
  
    Object.entries(sighting).forEach(function([key, value]) {
    //   console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
  buildTable(tableData)

  // Getting a reference to the button on the page with the id property set to `click-me`


function handleClick() {
    var dateTime = d3.select("#datetime").property("value");
    var filteredTable = tableData;
    filteredTable = filteredTable.filter(dataRow => dataRow.datetime === dateTime);
    console.log("a button was clicked")
    buildTable(filteredTable);
    console.log(filteredTable)
}

button.on("click", handleClick);