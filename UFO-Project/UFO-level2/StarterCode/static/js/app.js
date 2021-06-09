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
var filters = {};
function createFilterObject() {
    var elements = d3.select(this);//.select("input");
    //var elements = d3.select("input");
    var elementValue = elements.property("value");
    var id = elements.attr("id");
    if (elementValue){
        filters[id] = elementValue;
    }
    else {
        delete filters[id];
    }

    console.log(elementValue);
    createFilter();
}


//createtable(tableData);
function createFilter(){
    let filterdata = tableData;
    Object.entries(filters).forEach(([key, value]) => {
        filterdata = filterdata.filter(row => row[key] === value);

   });
    createtable(filterdata);
}
d3.selectAll("input").on("change", createFilterObject);
createtable(tableData);