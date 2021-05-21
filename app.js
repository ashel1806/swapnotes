const $icon = document.getElementById("add-icon");
const $form = document.getElementById("form-container");
const $notes = document.querySelector(".note")
const $parentNotes = document.querySelector(".notes");
const $notesTitle = document.querySelector(".notes-title")
// const $titleError = document.querySelector(".title-error");
// const $contError = document.querySelector(".cont-error");


/* Cambiando el icon del form */
$icon.addEventListener("click", () => {
    $icon.classList.toggle("pressed");
    $form.classList.toggle("open");
})

function validateNotes(){
    if($parentNotes.childElementCount !== 0){
        $notesTitle.textContent = "Mis notas";
        $notesTitle.style.color = "rgba(0,48,73,1)";

    }else {
        $notesTitle.innerHTML = `Aún no hay notas <i class="far fa-frown"></i>`;
        $notesTitle.style.color = "rgba(0,48,73,0.5)";
    }
}

/* funcion para agregar las notas */
function addNotes(noteTitle, noteContent, noteColor){
    const note = document.createElement("div");
    note.classList.add("note");
    note.style.backgroundColor = noteColor;
    note.innerHTML = `
    <h3 class="note-title">${noteTitle}</h3>
    <p class="note-content">${noteContent}</p>
    <div class="iconos">
        <i class="fas fa-trash delete"></i>
        <i class="fas fa-pen edit"></i>
    </div>`

    $parentNotes.appendChild(note);
}

/* Agregando nota desde el form */
$form.addEventListener("submit", e => {
    const target = e.target;

    e.preventDefault();

    const noteTitle = target.note.value;
    const noteContent = target.noteContent.value;
    const noteColor = document.querySelector(".sp-thumb-el.sp-thumb-light.sp-thumb-active").title;

    addNotes(noteTitle, noteContent, noteColor);
    
    validateNotes();
})

$parentNotes.addEventListener("click", e => {
    const targetParent = e.target.parentElement;

    if(e.target.classList.contains("delete")){
        targetParent.parentElement.remove();
    }

    validateNotes();
    // console.log($parentNotes.childElementCount);
})

/* Agregando el drag and drop a las notas */
const $el = document.getElementById("notes-grid")
const sortable = new Sortable.create($el)