// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function createtable(data){
    tbody.html("");
    data.forEach(row => {
        var datarow = tbody.append("tr");
        Object.values(row).forEach(value => {
            var cell = datarow.append("td");
            cell.text(value);

        })
    });

}


createtable(tableData);
function createFilter(){
    var selecteddate = d3.select("#datetime").property("value");
    console.log(selecteddate);
    var filterdata = tableData.filter(row => row.datetime === selecteddate);
    console.log(filterdata);
    createtable(filterdata);


}
d3.selectAll("#filter-btn").on("click", createFilter);