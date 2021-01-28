function addTask(){
    var task = document.forms['section_form']['new_task'].value;
    let task_list = document.getElementById('task_list');

    if(task != ""){
        let li = document.createElement('li');
        let div = document.createElement('div');
        let input = document.createElement('input');
        let p = document.createElement('p');
        let a = document.createElement('a');

        li.setAttribute('class', 'tasks_item');
        a.setAttribute('class', 'btn delete_btn');
        input.setAttribute('type', 'checkbox');

        a.text = 'Delete';
        p.innerHTML = task;
        
        div.appendChild(input);
        li.appendChild(div);
        li.appendChild(p);
        li.appendChild(a);

        task_list.appendChild(li);

        console.log(task);
    }else{
        console.log("empty");
    }
}