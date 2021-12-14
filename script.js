function libraryManager(){
    const form = document.getElementById("myForm");
    const nPages = document.getElementById("nPages");
    const genre = document.getElementById("genre");
    const price = document.getElementById("price");
    const pubDate = document.getElementById("pubDate");

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
    const LanguagesContainer = document.getElementsById("LanguagesContainer");
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

}
