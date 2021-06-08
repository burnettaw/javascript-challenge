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
    //var elements = d3.select("input");
    
    var elementValue = elements.property("value");
    var id = elements.attr("id");
    if (elementValue){
        filter[id] = elementValue;
    }
    else {
        delete filter[id];
    }

    console.log(elementValue);
    createFilter();
}


//createtable(tableData);
function createFilter(){
    let filterdata = tableData;
    Object.entries(filter).forEach(([key, value]) => {
        filterdata = filterdata.filter(row => row[key] === value);

   });
    createtable(filterdata);
}
d3.selectAll(".filter").on("change", createFilterObject());
createtable(tableData);