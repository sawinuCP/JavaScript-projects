// variable---------------------
var form = document.getElementById("add-frm");
var items = document.getElementById("items");
var ntitle = document.getElementById("n-title");
var nbody = document.getElementById("n-body");

var noteCount = 0;
var newNote = '';
// events-----------------

form.addEventListener('submit' , addNote);


// Function--------------------------------/


// update table-------------
function updateTable(){
    // Display the table when the note added---

    
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
}













































