var selectedRow = null;

function libraryManager(){
    validation();
    event.preventDefault();

    var formData = getData()
    // myform.reset();

    if(selectedRow === null){
    //     // insertNewRecord();
        fillDataTable(formData);
    }
    else{
    //     // updateRecord(formData);
        updateData(formData);
    }
    resetForm();



}


// =============== Get Data ===============
function getData(){
    var inputData = {};
    inputData["authorData"]    = document.getElementById("author").value;
    inputData["copyTypeData"]  = document.getElementById("copyType").value;
    inputData["publisherData"] = document.getElementById("publisher").value;
    inputData['languagesData'] = document.querySelector('input[name="languages"]:checked').value;
    inputData["nPagesData"]    = document.getElementById("nPages").value;
    inputData["genreData"]     = document.getElementById("genre").value;
    inputData["priceData"]     = document.getElementById("price").value;
    inputData["pubDateData"]   = document.getElementById("pubDate").value;
    // console.log(languagesData.value);
    // console.log(inputData.languagesData.value);
    return inputData;
}
// =============== Get Data ===============


// =============== Fill Data Table ===============
function fillDataTable(inputData){
    var dataTable = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    // var dataTable = document.getElementById("dataTable").getElementsByTagName("tbody");
    // var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    // var newRow = table.insertRow(table.length);
    var newRow = dataTable.insertRow(dataTable.length);
    
    // authorCell
    var AuthorCell = newRow.insertCell(0);
        AuthorCell.innerHTML = inputData.authorData;
    // publisherCell
    var publisherCell = newRow.insertCell(1); 
        publisherCell.innerHTML = inputData.publisherData;
    // nPagesCell
    var nPagesCell = newRow.insertCell(2);
        nPagesCell.innerHTML = inputData.nPagesData;
    // priceCell
    var priceCell = newRow.insertCell(3);
        priceCell.innerHTML = inputData.priceData;
    // copyTypeCell
    var copyTypeCell = newRow.insertCell(4);
        copyTypeCell.innerHTML = inputData.copyTypeData;
    // languagesCell
    var languagesCell = newRow.insertCell(5);
        languagesCell.innerHTML = inputData.languagesData;
    // genreCell
    var genreCell = newRow.insertCell(6);
        genreCell.innerHTML = inputData.genreData;
    // pubDateCell
    var pubDateCell = newRow.insertCell(7);
        pubDateCell.innerHTML = inputData.pubDateData;
    var editDelete = newRow.insertCell(8);
        // editDelete.createElement("button").style.backgroundColor = "red";
        editDelete.innerHTML = `<button onClick='editData(this)'>Edit</button> <button onClick='deleteData(this)'>Delete</button>`;
}
// =============== Fill Data Table ===============


// =============== editData ===============
function editData(td){
    selectedRow = td.parentElement.parentElement;

    document.getElementById("author").value = selectedRow.cells[0].innerHTML;
    document.getElementById("copyType").value = selectedRow.cells[1].innerHTML;
    document.getElementById("publisher").value = selectedRow.cells[2].innerHTML;
    // document.querySelector('input[name="languages"]:checked').value = selectedRow.cells[3].innerHTML;
    document.querySelector('input[name="languages"]:checked').value = selectedRow.cells[3].innerHTML;
    document.getElementById("nPages").value = selectedRow.cells[4].innerHTML;
    document.getElementById("genre").value = selectedRow.cells[6].innerHTML;
    document.getElementById("price").value = selectedRow.cells[7].innerHTML;
    document.getElementById("pubDate").value = selectedRow.cells[8].innerHTML;
}
// =============== editData ===============


// =============== updateData ===============
function updateData(inputData){
    selectedRow.cells[0].innerHTML = inputData.authorData;
    selectedRow.cells[1].innerHTML = inputData.copyTypeData;
    selectedRow.cells[2].innerHTML = inputData.publisherData;
    selectedRow.cells[3].innerHTML = inputData.languagesData;
    selectedRow.cells[4].innerHTML = inputData.nPagesData;
    selectedRow.cells[6].innerHTML = inputData.genreData;
    selectedRow.cells[7].innerHTML = inputData.priceData;
    selectedRow.cells[8].innerHTML = inputData.pubDateData;
}
// =============== updateData ===============


// =============== deleteData ===============
function deleteData(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('dataTable').deleteRow(row.rowIndex);
    }
    resetForm();
    alert("the form shoud be reset at this point")
}
// =============== deleteData ===============


// =============== Reset Form ===============
function resetForm(){
    // const myform = document.getElementById("myForm");
    // myform.reset();
    // location.reload();

    document.getElementById("author").value = '';
    document.getElementById("copyType").value = '';
    document.getElementById("publisher").value = '';
        //  ******** Languages reset ******** 
    // document.querySelector("input[name=languages]:checked").value = '';
    // document.querySelector("input[name=languages]").checked = false;
    // document.querySelectorAll("input[name=languages]").checked = false;
    // document.querySelector("input[type=radio]").checked = false;
    document.querySelector("input[value=Arabic]").checked = false;
    document.querySelector("input[value=English]").checked = false;
    document.querySelector("input[value=French]").checked = false;
    document.querySelector("input[value=Spanish]").checked = false;
    //  ******** Languages reset ******** 
    document.getElementById("nPages").value = '';
    document.getElementById("genre").value = '';
    document.getElementById("price").value = '';
    document.getElementById("pubDate").value = '';

    console.log("ResetForm is pressed");

    // Author reset field
        authorMissed.innerText = "";
        authorMissed.style.color = "";
        authorLbl.style.color = "";
        author.style.border = "";
        author.style.backgroundColor = "";
    
    // ِCopytype reset field    
        copyTypeMissed.innerText = "";
        copyTypeMissed.style.color = "";
        copyTypeLbl.style.color = "";
        copyType.style.border = "";
        copyType.style.backgroundColor = "";

    // Publisher reset field    
        publisherMissed.innerText = "";
        publisherMissed.style.color = "";
        publisherLbl.style.color = "";
        publisher.style.border = "";
        publisher.style.backgroundColor = "";

    // Languages reset field    
        LanguagesMissed.innerText = "";
        LanguagesMissed.style.color = "";
        languagesLbl.style.color = "";
        LanguagesContainer.style.backgroundColor = "";
        LanguagesContainer.style.color = "";
        LanguagesContainer.style.border = "";

    // Number of pages reset field    
        nPagesMissed.innerText = "";
        nPagesMissed.style.color = "";
        nPagesLbl.style.color = "";
        nPages.style.border = "";
        nPages.style.backgroundColor = "";

    // Genre reset field    
        genreMissed.innerText = "";
        genreMissed.style.color = "";
        genreLbl.style.color = "";
        genre.style.border = "";
        genre.style.backgroundColor = "";

    // Price reset field    
        priceMissed.innerText = "";
        priceMissed.style.color = "";
        priceLbl.style.color = "";
        price.style.border = "";
        price.style.backgroundColor = "";

    // Publication date reset field    
        pubDateMissed.innerText = "";
        pubDateMissed.style.color = "";
        pubDateLbl.style.color = "";
        pubDate.style.border = "";
        pubDate.style.backgroundColor = "";



}
// =============== Reset Form ===============


// =============== VALIDATION ===============
    function validation(){
        // const form = document.getElementById("myForm");

        // Author
        const author = document.getElementById("author");
        var authorMissed = document.getElementById("authorMissed");
        var authorLbl = document.getElementById("authorLbl");
        
        authorValid = null; 
        //variables without the [var] keyword, it becomes a global variable
        if (author.value.trim() === "") {
            authorMissed.innerText = "name missed";
            authorMissed.style.color = "red";
            authorLbl.style.color = "red";
            author.style.border = "solid red";
            author.style.backgroundColor = "#f5c3c3";

            authorValid = false;
            console.log("authorValid is missed [" + authorValid +"]");
        }else{
            authorMissed.innerText = "";
            // console.log(author.value);
            authorLbl.style.color = "green";
            author.style.border = "solid green";
            author.style.backgroundColor = "#f5fff5";

            console.log("the author is {" + author.value + "}");

            authorValid = true;
            console.log("authorValid is [" + authorValid +"]");
        }
    
    //    Book copy type
        const copyType = document.getElementById("copyType");
        var copyTypeMissed = document.getElementById("copyTypeMissed");
        var copyTypeLbl = document.getElementById("copyTypeLbl");

        copyTypeValid = null;
        if (copyType.value === "") {
            copyTypeMissed.innerText = "not defined";
            copyTypeMissed.style.color = "red";
            copyTypeLbl.style.color = "red";
            copyType.style.border = "solid red";
            copyType.style.backgroundColor = "#f5c3c3";

            copyTypeValid = false;
            console.log("copyTypeValid is not defined [" + copyTypeValid +"]");
        }else{
            copyTypeMissed.innerText = "";
            copyTypeLbl.style.color = "green";
            copyType.style.border = "solid green";
            copyType.style.backgroundColor = "#f5fff5";

            console.log("the copytype is {" + copyType.value + "}");

            copyTypeValid = true;
            console.log("copyTypeValid is [" + copyTypeValid +"]");
        }

    //    publisher
        const publisher = document.getElementById("publisher");
        var publisherMissed = document.getElementById("publisherMissed");
        var publisherLbl = document.getElementById("publisherLbl");

        publisherValid = null;
        if (publisher.value === "") {
            publisherMissed.innerText = "name is missed";
            publisherMissed.style.color = "red";
            publisherLbl.style.color = "red";
            publisher.style.border = "solid red";
            publisher.style.backgroundColor = "#f5c3c3";

            publisherValid = false;
            console.log("publisherValid is missed [" + publisherValid +"]");
        }else{
            publisherMissed.innerText = "";
            publisherLbl.style.color = "green";
            publisher.style.border = "solid green";
            publisher.style.backgroundColor = "#f5fff5";

            console.log("the publisher is {" + publisher.value + "}");

            publisherValid = true;
            console.log("publisherValid is [" + publisherValid +"]");

        }

        //    Languages
        var LanguagesContainer = document.getElementById("LanguagesContainer");
        var LanguagesMissed = document.getElementById("LanguagesMissed");
        var languagesLbl = document.getElementById("languagesLbl");
        // var langLabel = document.getElementById("langLabel");
        // var langLabel = document.querySelectorAll("#langLabel");
        // document.getElementById('summer').checked == true
        // var languages = document.getElementsByTagName('languages').checked;
        // var languages = document.querySelector('input[name="languages"]:checked');

        languagesValid = null;
        if (document.querySelector('input[name="languages"]:checked')) {
            LanguagesMissed.innerText = "";
            languagesLbl.style.color = "green";
            LanguagesContainer.style.border = "solid green";
            LanguagesContainer.style.backgroundColor = "#f5fff5";

            console.log("the chosen language is {" + document.querySelector('input[name="languages"]:checked').value + "}");

            languagesValid = true;
            console.log("languagesValid is [" + languagesValid +"]");
        }else{
            LanguagesMissed.innerText = "is not defined";
            LanguagesMissed.style.color = "red";
            languagesLbl.style.color = "red";
            LanguagesContainer.style.backgroundColor = "#f5c3c3";
            LanguagesContainer.style.color = "black";
            LanguagesContainer.style.border = "solid red";

            languagesValid = false;
            console.log("languagesValid is not defined[" + languagesValid +"]");
        }

        // Number of pages
        const nPages = document.getElementById("nPages");
        var nPagesMissed = document.getElementById("nPagesMissed");
        var nPagesLbl = document.getElementById("nPagesLbl");

        nPagesValid = null;
        if (nPages.value === "") {
            nPagesMissed.innerText = "is not defined";
            nPagesMissed.style.color = "red";
            nPagesLbl.style.color = "red";
            nPages.style.border = "solid red";
            nPages.style.backgroundColor = "#f5c3c3";

            nPagesValid = false;
            console.log("nPagesValid is not defined [" + nPagesValid +"]");
        }else{
            nPagesMissed.innerText = "";
            nPagesLbl.style.color = "green";
            nPages.style.border = "solid green";
            nPages.style.backgroundColor = "#f5fff5";

            console.log("the number of pages date is {" + nPages.value + "}");

            nPagesValid = true;
            console.log("nPagesValid is [" + nPagesValid +"]");
        }

        // Genre
        const genre = document.getElementById("genre");
        var genreMissed = document.getElementById("genreMissed");
        var genreLbl = document.getElementById("genreLbl");

        genreValid = null;
        if (genre.value === "") {
            genreMissed.innerText = "is not defined";
            genreMissed.style.color = "red";
            genreLbl.style.color = "red";
            genre.style.border = "solid red";
            genre.style.backgroundColor = "#f5c3c3";

            genreValid = false;
            console.log("genreValid is not defined [" + genreValid +"]");
        }else{
            genreMissed.innerText = "";
            genreLbl.style.color = "green";
            genre.style.border = "solid green";
            genre.style.backgroundColor = "#f5fff5";

            console.log("the selected genre is {" + genre.value + "}");

            genreValid = true;
            console.log("genreValid is [" + genreValid +"]");
        }

        // Price
        const price = document.getElementById("price");
        var priceMissed = document.getElementById("priceMissed");
        var priceLbl = document.getElementById("priceLbl");

        priceValid = null;
        if (price.value === "") {
            priceMissed.innerText = "is not defined";
            priceMissed.style.color = "red";
            priceLbl.style.color = "red";
            price.style.border = "solid red";
            price.style.backgroundColor = "#f5c3c3";

            priceValid = false;
            console.log("priceValid is not deinfed [" + priceValid +"]");
        }else{
            priceMissed.innerText = "";
            priceLbl.style.color = "green";
            price.style.border = "solid green";
            price.style.backgroundColor = "#f5fff5";

            console.log("the price value is {" + price.value + "$}");

            priceValid = true;
            console.log("priceValid is [" + priceValid +"]");
        }

        // Date
        const pubDate = document.getElementById("pubDate");
        var pubDateMissed = document.getElementById("pubDateMissed");
        var pubDateLbl = document.getElementById("pubDateLbl");

        pubDateValid = null;
        if (pubDate.value === "") {
            pubDateMissed.innerText = "is not defined";
            pubDateMissed.style.color = "red";
            pubDateLbl.style.color = "red";
            pubDate.style.border = "solid red";
            pubDate.style.backgroundColor = "#f5c3c3";

            pubDateValid = false;
            console.log("pubDateValid is not defined [" + pubDateValid +"]");
        }else{
            pubDateMissed.innerText = "";
            pubDateLbl.style.color = "green";
            pubDate.style.border = "solid green";
            pubDate.style.backgroundColor = "#f5fff5";

            console.log("the publication date is {" + pubDate.value + "}");

            pubDateValid = true;
            console.log("pubDateValid is [" + pubDateValid +"]");
        }
        


    }
// =============== VALIDATION ===============

