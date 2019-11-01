let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter');

//Form Submit Event
form.addEventListener('submit', addItem);
//Delete event 
itemList.addEventListener('click', removeItem)

//Filter event 
filter.addEventListener('keyup', filteredItems);


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

//Remove item function

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter Items

function filteredItems(e) {
    //Convert text to lowercase
    let text = e.target.value.toLowerCase();

    //Get li's
    let items = itemList.querySelectorAll('li');

    //Conver to  an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}
