


function radioChecker(){
    if(document.getElementById('Novel').checked) {   
     console.log(document.getElementById("Novel").value + " radio button is checked");   
    //  alert(document.getElementById("Novel").value + " radio button is checked");   
    }   
    else if(document.getElementById('Essay').checked) {   
     console.log(document.getElementById("Essay").value + " radio button is checked");   
    //  alert(document.getElementById("Essay").value + " radio button is checked");   
    }   
    else if(document.getElementById('Comic').checked) {   
     console.log(document.getElementById("Comic").value + " radio button is checked");   
    //  alert(document.getElementById("Comic").value + " radio button is checked");   
    }   
    else {   
    console.log("no radio is selcted") 
    // alert("no radio is selcted") 
    }   
}

var rIndex, table = document.getElementById("table");

// check the empty input ==> works for {worktitle}{authorName}
function errorMsg(labelId, inputId, spanId){   
    targetInput = document.getElementById(inputId).value;
    if(targetInput === ""){
        spanId = document.getElementById(spanId)
        spanId.innerText = "is required"

        document.getElementById(labelId).style.color = "red";
        document.getElementById(inputId).style.color = "black";
        document.getElementById(inputId).style.border = "solid red";
        document.getElementById(inputId).style.backgroundColor = "#f5c3c3"
    } else if(targetInput.length > 30){
        spanId = document.getElementById(spanId)
        spanId.innerText = "cannot be more than 30 charachters"

        document.getElementById(labelId).style.color = "red";
        document.getElementById(inputId).style.color = "black";
        document.getElementById(inputId).style.border = "solid red";
        document.getElementById(inputId).style.backgroundColor = "#f5c3c3"
    } else{
        spanId = document.getElementById(spanId)
        spanId.innerText = ""

        document.getElementById(labelId).style.color = "";
        document.getElementById(inputId).style.color = "";
        document.getElementById(inputId).style.border = "";
        document.getElementById(inputId).style.backgroundColor = ""
    }
}

workTitleRTV = document.getElementById("workTitle");
workTitleRTV.addEventListener('input', () => {
    errorMsg('workLbl', 'workTitle', 'WTspanError')})

authorNameRTV = document.getElementById("authorName");
authorNameRTV.addEventListener('input', () => {
    errorMsg('authorLbl', 'authorName', 'ANspanError')})

dd = document.getElementById("DD");
dd.addEventListener('input', () => {
    errorMsg('newDateLbl', 'DD', 'newDateSpanError')})

// Month message error NOT COMLETED (make everything red about the date)
mm = document.getElementById("MM");
mm.addEventListener('change', () => {
    // errorMsg('newDateLbl', 'MM', 'newDateSpanError')
    // mmQuery = document.querySelectorAll("select").value;
    mmQuery = document.getElementById("MM").value;
    console.log(mmQuery);
    if(mmQuery == ""){
        spanId = document.getElementById("newDateSpanError")
        spanId.innerText = "is required"

        document.getElementById("newDateLbl").style.color = "red";
        document.getElementById("MM").style.color = "black";
        document.getElementById("MM").style.border = "solid red";
        document.getElementById("MM").style.backgroundColor = "#f5c3c3"
        console.log("mmQuerry is true, styles should show up");

        
    } else{
        spanId = document.getElementById("newDateSpanError")
        spanId.innerText = ""

        document.getElementById("newDateLbl").style.color = "";
        document.getElementById("MM").style.color = "";
        document.getElementById("MM").style.border = "";
        document.getElementById("MM").style.backgroundColor = ""

        console.log("mmQuerry is false");

    }
})


yyyy = document.getElementById("YYYY");
yyyy.addEventListener('input', () => {
    errorMsg('newDateLbl', 'YYYY', 'newDateSpanError')})





// Check is the input is empty
function checkEmptyInput(){
    var isEmpty = false,

    workTitle = document.getElementById("workTitle").value,
    authorName = document.getElementById("authorName").value,
    price = document.getElementById("price").value;
    // pubDate = document.getElementById("pubDate").value;
    languages = document.getElementById("languages").value;
    genre = document.querySelector('input[name=genre]:checked');
    dd = document.getElementById("DD").value;
    mm = document.getElementById("MM").value;
    yyyy = document.getElementById("YYYY").value;
    radioChecker()

    if(workTitle === "" || workTitle.length > 30){
        // alert("First Name Connot Be Empty");
        // errorMsg("work")
        errorMsg('workLbl', 'workTitle', 'WTspanError')
        isEmpty = true;
    }
    else if(authorName === ""){
        // alert("Author name should not be empty or more than 30 charachters");
        errorMsg('authorLbl', 'authorName', 'ANspanError')
        isEmpty = true;
    }
    else if(price === ""){
        alert("price Connot Be Empty");
        isEmpty = true;
    }

    // date condition
    else if(
        dd == "" && mm == "" || 
        dd == "" && yyyy == "" || 
        mm == "" && yyyy == ""){
        alert("Day, Month, and year must be filled");
        isEmpty = true;
    }
    else if(dd == ""){
        alert("Day Connot Be Empty");
        isEmpty = true;
    }
    else if(mm ==""){
        alert("Month Connot Be Empty");
        isEmpty = true;
    }
    else if(yyyy == ""){
        alert("Year Connot Be Empty");
        isEmpty = true;
    }
    // languages condition
    else if(languages === ""){
        alert("languages Connot Be Empty");
        isEmpty = true;
    }
    else if(!document.querySelector('input[name=genre]:checked')){
        alert("genre Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row
function addHtmlTableRow()
{
// get the table by id
// create a new row and cells
// get value from input text
// set the values into row cell's
    if(!checkEmptyInput())
    {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            // cell7 = newRow.insertCell(6),
            workTitle = document.getElementById("workTitle").value,
            authorName = document.getElementById("authorName").value,
            price = document.getElementById("price").value;
            // pubDate = document.getElementById("pubDate").value;
            languages = document.getElementById("languages").value;
            genre = document.querySelector('input[name=genre]:checked').value;
            // remove = `<button id="RemoveBr" type="button" onclick="removeThisRow(this);">Remove</button>`;
            // New date value
            dd = document.getElementById("DD").value;
            mm = document.getElementById("MM").value;
            yyyy = document.getElementById("YYYY").value;
            console.log("The new date is: " + dd + "/" + mm  + "/" + yyyy);
            newDate = + dd + "/" + mm  + "/" + yyyy;

        cell1.innerHTML = workTitle;
        cell2.innerHTML = authorName;
        cell3.innerHTML = price;
        // cell4.innerHTML = pubDate;
        cell4.innerHTML = newDate;
        cell5.innerHTML = languages;
        cell6.innerHTML = genre;
        // cell7.innerHTML = remove;

        // call the function to set the event to the new row
        selectedRowToInput();
        resetInput()
        // validDate()

        // document.getElementById("EditBr").style.display = "block";
        // document.getElementById("RemoveBr").style.display = "block";
    }
}


// display selected row data into input text
function selectedRowToInput()
{
for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
        // get the seected row index
        rIndex = this.rowIndex;
        document.getElementById("workTitle").value = this.cells[0].innerHTML;
        document.getElementById("authorName").value = this.cells[1].innerHTML;
        document.getElementById("price").value = this.cells[2].innerHTML;
        // document.getElementById("pubDate").value = this.cells[3].innerHTML;
        document.getElementById("languages").value = this.cells[4].innerHTML;

        // New date Condition
        var dateNewCell = new Date(this.cells[3].innerHTML);

        dayCellValue = dateNewCell.getDate();
        console.log("date is " + dayCellValue);
        
        yearCellValue = dateNewCell.getFullYear();
        console.log("Year is " + yearCellValue);

        month = dateNewCell.getMonth() + 1
        console.log("Month is " + month);
        if(month == 1){
            monthCellValue = ("January");
        } else if(month == 2){
            monthCellValue = ("February");
        }  else if(month == 3){
            monthCellValue = ("Mars");
        }  else if(month == 4){
            monthCellValue = ("April");
        }  else if(month == 5){
            monthCellValue = ("May");
        }  else if(month == 6){
            monthCellValue = ("June");
        }  else if(month == 7){
            monthCellValue = ("July");
        }  else if(month == 8){
            monthCellValue = ("August");
        }  else if(month == 9){
            monthCellValue = ("September");
        }  else if(month == 10){
            monthCellValue = ("October");
        }  else if(month == 11){
            monthCellValue = ("Novermber");
        }  else if(month == 12){
            monthCellValue = ("December");
        } else{
            console.log("that's not a month :/");
        }

        document.getElementById("DD").value = dayCellValue;
        document.getElementById("MM").value = monthCellValue;
        document.getElementById("YYYY").value = yearCellValue;


        
// Radio button condition
        if( this.cells[5].innerHTML == "Novel"){
            console.log("Novel radio should be selected");
            document.getElementById('Novel').checked = true;
        } else if(this.cells[5].innerHTML == "Essay"){
            console.log("Essay radio should be selected");
            document.getElementById('Essay').checked = true;
        }else if(this.cells[5].innerHTML == "Comic"){
            console.log("Comic radio should be selected");
            document.getElementById('Comic').checked = true;
        }
        document.getElementById("Add").style.display = "none";
        document.getElementById("Update").style.display = "block";
        document.getElementById("Remove").style.display = "block";
    };
}
}

selectedRowToInput();

function updateHtmlTbleSelectedRow()
{
    var workTitle = document.getElementById("workTitle").value,
        authorName = document.getElementById("authorName").value,
        price = document.getElementById("price").value;
        // pubDate = document.getElementById("pubDate").value;
        // New date solution
        dd = document.getElementById("DD").value;
        mm = document.getElementById("MM").value;
        yyyy = document.getElementById("YYYY").value;

        newDate = dd + "/" + mm + "/" + yyyy
        
        languages = document.getElementById("languages").value;

    if(!checkEmptyInput())
    {
        table.rows[rIndex].cells[0].innerHTML = workTitle;
        table.rows[rIndex].cells[1].innerHTML = authorName;
        table.rows[rIndex].cells[2].innerHTML = price;
        // table.rows[rIndex].cells[3].innerHTML = pubDate;
        table.rows[rIndex].cells[3].innerHTML = newDate;
        table.rows[rIndex].cells[4].innerHTML = languages;
        table.rows[rIndex].cells[5].innerHTML = document.querySelector('input[name=genre]:checked').value;
    }

    resetInput()
    document.getElementById("Add").style.display = "block";
    document.getElementById("Update").style.display = "none";
    document.getElementById("Remove").style.display = "none";
}

function removeSelectedRow()
{
table.deleteRow(rIndex);
// table.deleteRow(document.getElementById("table").rows.rowIndex);
// table.deleteRow(1);
// table.deleteRow(-1);

// clear input text
resetInput()
document.getElementById("Add").style.display = "block";
document.getElementById("Update").style.display = "none";
document.getElementById("Remove").style.display = "none";
}

function resetInput()
{
    // clear input text
    document.getElementById("workTitle").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("price").value = "";
    // document.getElementById("pubDate").value = "";
    document.getElementById("languages").value = "";
    document.querySelector("input[value=Novel]").checked = false;
    document.querySelector("input[value=Essay]").checked = false;
    document.querySelector("input[value=Comic]").checked = false;

    document.getElementById("DD").value = "";
    document.getElementById("MM").value = "";
    document.getElementById("YYYY").value = "";
}


// +++++++++++++++++++++++++++++++++++++++++++
// I should make the regular expression work for the date and the price! 
// I should define the usage of the regex and how to implement it correctly


