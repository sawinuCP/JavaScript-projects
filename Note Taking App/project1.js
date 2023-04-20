// variable---------------------
var form = document.getElementById("add-frm");
var items = document.getElementById("items");
var ntitle = document.getElementById("n-title");
var nbody = document.getElementById("n-body");
var tableDiv = document.getElementById("tbl-div");
var search = document.getElementById("srch");
var resetBtn = document.getElementById("reset")

var noteCount = 0;
var newNote = '';
var isUpdate = false;
var record = "";
var note = "";
var body = "";



// events-----------------

// for page load-----------
window.onload = updateTable;

// for form submit------------
form.addEventListener('submit' , addNote);

// for search----------------------
search.addEventListener('keyup' , searchNotes)

// for remove--------
items.addEventListener("click" , removeNote)

// for view and update---------------
items.addEventListener("click" , viewNUpdateNote);

// for reset----------------
resetBtn.addEventListener("click" , resetAll);



// Functions--------------------------------/

// update table-------------
function updateTable(){
    // Display the table when the note get added---
    if(noteCount > 0){
        tableDiv.style.display = "";        /*  this will be set as default*/
        
        // update note------------
        if(isUpdate){
            note.firstChild.textContent = ntitle.value;
            note.lastChild.textContent - nbody.value;

            // reset update and note count-----------
            isUpdate = false;
            noteCount--;
        }
        else{
            // add new note------------------
            items.appendChild(newNote);
        }
    }
    else{
        tableDiv.style.display = "none";
    } 
}


// Add Note---------------------
function addNote(e){
    // stop enitial behaviour
    e.preventDefault();
    // console.log("Hello");

    // validate inputs
    if(ntitle.value == '' || nbody.value == '') {
        alert("please fill all fields!");
    }
    else{
        // create a new record
        // new tr
        var tr = document.createElement("tr");
        tr.className = "item";

        // new td for title and body
        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(ntitle.value));

        var span = document.createElement("span");
        span.className = "note-body";
        span.appendChild(document.createTextNode(nbody.value));

        td1.appendChild(span);

        // new td for view
        var td2 = document.createElement('td');
        td2.className = "btncellv"
        var btn1 = document.createElement("button")
        btn1.appendChild(document.createTextNode('View'));
        btn1.setAttribute("id" , "vw")
        td2.appendChild(btn1);

        // new td for delete
        var td3 = document.createElement('td');
        td3.className = "btncelld"
        var btn2 = document.createElement("button")
        btn2.appendChild(document.createTextNode('Delete'));
        btn2.setAttribute("id" , "del")
        td3.appendChild(btn2);


        // Add all td to tr
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        // console.log(tr);

        // increament note 
        noteCount++;

        // set new note
        newNote = tr;

        // add or update the note of the table
        updateTable();
    }

    // reset all----------------
    resetAll();
}


// search notes----------------/
function searchNotes(e){
    // text to lowercase
    var searchTxt = e.target.value.toLowerCase();
    // console.log(searchTxt);

    // get list------------
    var list = items.getElementsByClassName("item");

    // convert to an array------------
    var listArr =  Array.from(list);
    // console.log(listArr);
    listArr.forEach(function(item){
        // get title-------
        var noteTitle = item.firstChild.textContent;

        // match-------
        if(noteTitle.toLowerCase().indexOf(searchTxt) != -1){
            item.style.display = "";
        }
        else{
            item.style.display = "none";
        }
    });
}


// remove note-------
function removeNote(e){
    // console.log(e.target.id);
    if(e.target.id === "del"){
        if(confirm("Are you sure")){
            // delete notes------------
            var tr = e.target.parentElement.parentElement;
            items.removeChild(tr);

            // update table--------
            noteCount--;
            if(noteCount === 0){
                updateTable();
            }
        }
    }
}


// vies and update notes------------4
function viewNUpdateNote(e){
    if(e.target.id === "vw"){
        // get the element value and the update fields------------------
        record = e.target.parentElement.parentElement;
        note = record.firstChild;
        ntitle.value = note.firstChild.textContent;
        nbody.value = note.lastChild.textContent;
        isUpdate = true;

    }
}

// reset all------------------
function resetAll(){
    ntitle.value = "";
    nbody.value = "";
    isUpdate = false;
    newNote = "";
}

