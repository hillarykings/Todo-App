let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');

//Form Submit Event
form.addEventListener('submit', addItem);

//Add Item
function addItem(e) {
    e.preventDefault();
    
    //Get input Value
    let newItem = document.querySelector('#item').value;

    //create new li element
    let li = document.createElement('li');

    //Add Class
    li.className = "list-group-item";
    
    //Add TextNode with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    let deleteBtn = document.createElement('button');

    //Addd classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append textNode
    deleteBtn.appendChild(document.createTextNode('delete'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to itemList
    itemList.appendChild(li);
}