var addedItem = 0;

function add(task, task_list){
    let li = document.createElement('li');
    let div = document.createElement('div');
    let input = document.createElement('input');
    let p = document.createElement('p');
    let a = document.createElement('a');

    li.setAttribute('class', 'tasks_item');
    
    let liId = 'item' + addedItem; // set an id for the list item
    
    li.setAttribute('id', liId);
    a.setAttribute('class', 'btn delete_btn');
    a.setAttribute('onclick', 'deleteItem()');

    input.setAttribute('type', 'checkbox');

    a.text = 'Delete';
    p.innerHTML = task;
    
    div.appendChild(input);
    li.appendChild(div);
    li.appendChild(p);
    li.appendChild(a);

    task_list.appendChild(li);
    document.forms['section_form']['new_task'].value = ""; //clear the text in input

    addedItem++; //index of added item
}

function addTask(){
    var task = document.forms['section_form']['new_task'].value;
    let task_list = document.getElementById('task_list');

    if(task != ""){
        add(task, task_list);
    }else{
        console.log("empty");
    }
}

function deleteItem(){
    console.log('Here');
    let items = document.getElementsByClassName('delete_btn');

    for(let i=0; i < items.length; ++i){
        items[i].onclick = function(){
            console.log(i);
            document.getElementById('item' + i).style.display = 'none';
        }
    }
}
