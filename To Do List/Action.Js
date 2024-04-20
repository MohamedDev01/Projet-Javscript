var addToDoButton = document.getElementById('AddToDo'); 
var ToDoContainer = document.getElementById('ToDoContainer'); 
var inputfield = document.getElementById('Inputfield'); 

addToDoButton.onclick = function Click()
{
    if (inputfield.value != "")
    {
        var paragraph = document.createElement("p")
    }
    paragraph.innerText = inputfield.value; 

    paragraph.classList.add('paragraphe_style')

    ToDoContainer.appendChild(paragraph);

    inputfield.value= ""; 

    paragraph.addEventListener('click', function()
    
    {
        paragraph.classList.add('paragraph_click');
    }
    )

    paragraph.addEventListener('dblClick', function()
    {
        ToDoContainer.removeChild(paragraph);
    }
    )
}

