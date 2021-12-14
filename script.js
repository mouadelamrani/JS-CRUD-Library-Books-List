function libraryManager(){
    validation();
}



// ===============VALIDATION===============
    function validation(){
        const form = document.getElementById("myForm");

        // Author
        const author = document.getElementById("author");
        var authorMissed = document.getElementById("authorMissed");
        var authorLbl = document.getElementById("authorLbl");
        if (author.value.trim() === "") {
            authorMissed.innerText = "name missed";
            authorMissed.style.color = "red";
            authorLbl.style.color = "red";
            author.style.border = "solid red";
            author.style.backgroundColor = "#f5c3c3";
        }else{
            authorMissed.innerText = "";
            console.log(author.value);
            authorLbl.style.color = "green";
            author.style.border = "solid green";
            author.style.backgroundColor = "#f5fff5";
        }
    
    //    Book copy type
        const copyType = document.getElementById("copyType");
        var copyTypeMissed = document.getElementById("copyTypeMissed");
        var copyTypeLbl = document.getElementById("copyTypeLbl");

        if (copyType.value === "") {
            copyTypeMissed.innerText = "not defined";
            copyTypeMissed.style.color = "red";
            copyTypeLbl.style.color = "red";
            copyType.style.border = "solid red";
            copyType.style.backgroundColor = "#f5c3c3";
        }else{
        console.log(copyType.value);
        copyTypeMissed.innerText = "";
        copyTypeLbl.style.color = "green";
        copyType.style.border = "solid green";
        copyType.style.backgroundColor = "#f5fff5";
        }

    //    publisher
        const publisher = document.getElementById("publisher");
        var publisherMissed = document.getElementById("publisherMissed");
        var publisherLbl = document.getElementById("publisherLbl");

        if (publisher.value === "") {
            publisherMissed.innerText = "name is missed";
            publisherMissed.style.color = "red";
            publisherLbl.style.color = "red";
            publisher.style.border = "solid red";
            publisher.style.backgroundColor = "#f5c3c3";
        }else{
        console.log(copyType.value);
        publisherMissed.innerText = "";
        publisherLbl.style.color = "green";
        publisher.style.border = "solid green";
        publisher.style.backgroundColor = "#f5fff5";
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

        if (document.querySelector('input[name="languages"]:checked')) {
            LanguagesMissed.innerText = "";
            languagesLbl.style.color = "green";
            // publisher.style.border = "solid green";
            // publisher.style.backgroundColor = "#f5fff5";
        }else{
            LanguagesMissed.innerText = "is not defined";
            LanguagesMissed.style.color = "red";
            languagesLbl.style.color = "red";
            LanguagesContainer.style.backgroundColor = "#f5c3c3";
            LanguagesContainer.style.color = "black";
            LanguagesContainer.style.border = "solid red";

        }

        // Number of pages
        const nPages = document.getElementById("nPages");
        var nPagesMissed = document.getElementById("nPagesMissed");
        var nPagesLbl = document.getElementById("nPagesLbl");

        if (nPages.value === "") {
            nPagesMissed.innerText = "is not defined";
            nPagesMissed.style.color = "red";
            nPagesLbl.style.color = "red";
            nPages.style.border = "solid red";
            nPages.style.backgroundColor = "#f5c3c3";
        }else{
        console.log(nPages.value);
        nPagesMissed.innerText = "";
        nPagesLbl.style.color = "green";
        nPages.style.border = "solid green";
        nPages.style.backgroundColor = "#f5fff5";
        }

        // Genre
        const genre = document.getElementById("genre");
        var genreMissed = document.getElementById("genreMissed");
        var genreLbl = document.getElementById("genreLbl");

        if (genre.value === "") {
            genreMissed.innerText = "is not defined";
            genreMissed.style.color = "red";
            genreLbl.style.color = "red";
            genre.style.border = "solid red";
            genre.style.backgroundColor = "#f5c3c3";
        }else{
        console.log(genre.value);
        genreMissed.innerText = "";
        genreLbl.style.color = "green";
        genre.style.border = "solid green";
        genre.style.backgroundColor = "#f5fff5";
        }

        // Price
        const price = document.getElementById("price");
        var priceMissed = document.getElementById("priceMissed");
        var priceLbl = document.getElementById("priceLbl");

        if (price.value === "") {
            priceMissed.innerText = "is not defined";
            priceMissed.style.color = "red";
            priceLbl.style.color = "red";
            price.style.border = "solid red";
            price.style.backgroundColor = "#f5c3c3";
        }else{
        console.log(price.value);
        priceMissed.innerText = "";
        priceLbl.style.color = "green";
        price.style.border = "solid green";
        price.style.backgroundColor = "#f5fff5";
        }

        // Date
        const pubDate = document.getElementById("pubDate");
        var pubDateMissed = document.getElementById("pubDateMissed");
        var pubDateLbl = document.getElementById("pubDateLbl");

        if (pubDate.value === "") {
            pubDateMissed.innerText = "is not defined";
            pubDateMissed.style.color = "red";
            pubDateLbl.style.color = "red";
            pubDate.style.border = "solid red";
            pubDate.style.backgroundColor = "#f5c3c3";
        }else{
        console.log(pubDate.value);
        pubDateMissed.innerText = "";
        pubDateLbl.style.color = "green";
        pubDate.style.border = "solid green";
        pubDate.style.backgroundColor = "#f5fff5";
        }
        


    }
// ===============VALIDATION===============

