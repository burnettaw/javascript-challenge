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
var filter = {};
function createFilterObject(){
    var elements = d3.select(this).select("input");
    var elementValue = elements.property("value");
    var id = elements.attr("id");
    if (elements){
        filter[id] = elementValue;
    }
    else {
        delete filter[id];
    }
createfilter();
}
createtable(tableData);
function createFilter(){
    Object.entries(filter).forEach(([key, value]) => {
        var filterdata = tableData.filter(row => row[key] === value);

   })
    createtable(filterdata);


}
d3.selectAll(".filter").on("change", createFilterObject);