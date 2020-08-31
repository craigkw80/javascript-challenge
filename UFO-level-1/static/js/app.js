// from data.js
var tableData = data;

// select  filter button
var button = d3.select("#filter-btn");

// select tbody
var tbody = d3.select("tbody");

// event handlers 
button.on("click", runEnter);

function runEnter() {
    // clear previous filtered data
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the value property of the input element
    // Level1
    // var inputValue = d3.select("#datetime").property("value");
    
    //Level2
    var dateValue = d3.select("#datetime").property("value");
    var cityValue = d3.select("#city").property("value");
    var stateValue = d3.select("#state").property("value");
    var countryValue = d3.select("#country").property("value");
    var shapeValue = d3.select("#shape").property("value");
    
    //Level1
    // var filteredData = tableData.filter(date => date.datetime === inputValue);
    // console.log(filteredData);
    
    //Level2
    //filter  date
    if (dateValue !== "") {
        var filteredDate = tableData.filter(date => date.datetime === dateValue);
    }
    else {
        var filteredDate = tableData;
    }
    //filter  city
    if (cityValue !== "") {
        var filteredCity = filteredDate.filter(city => city.city === cityValue);
    } 
    else {
        var filteredCity = filteredDate;
    };
    //filter state
    if (stateValue !== "") {
        var filteredState = filteredCity.filter(state => state.state === stateValue);
    } 
    else {
        var filteredState = filteredCity;
    };
    //filter country
    if (countryValue !== "") {
        var filteredCountry = filteredState.filter(country => country.country === countryValue);
    } 
    else {
        var filteredCountry = filteredState;
    };
    //filter shape
    if (shapeValue !== "") {
        var filteredShape = filteredCountry.filter(shape => shape.shape === shapeValue);
    } 
    else {
        var filteredShape = filteredCountry;
    };
    var filteredData = filteredShape;
    
    //create row in table for each element in filtered data
    filteredData.forEach(element => {
        var row = tbody.append("tr");
        //for each key, value pair in filtered data, append table data by appending value
        Object.entries(element).forEach(([key,value]) => {
            var td = row.append("td");
            td.text(value);
        });
    });
}

function init() {
    tableData.forEach(element => {
        var row = tbody.append("tr");
        //for each key, value pair in filtered data, append table data by appending value
        Object.entries(element).forEach(([key,value]) => {
            var td = row.append("td");
            td.text(value);
        });
    });
}
init()