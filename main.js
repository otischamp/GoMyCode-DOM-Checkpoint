// window.localStorage.setItem 


window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    
    
    
    form.addEventListener('submit', (e) => {
        //prevents page from refreshing
        e.preventDefault();
        //method for taking value of an input
        const task = input.value;
        //checks if content is actually submitted
        if (!task) {
            alert('Please fill out the task');
        return;
        } else {
            console.log("Success");
        }




        // this is it! This is what allows you to create dom nodes!!!
        const task_el = document.createElement("div");
        // and this adds classes to the nodes!! how is this applied AFTER cratin the node?
        task_el.classList.add("task");
       
        //creating ANOTHER div, this one is the content that goes inside the task but it isn't ADDED to the task yet
        const task_content_el = document.createElement('div');
        task_content_el.classList.add("content");
        // this sets the TEXT content of the second div to the value written by the user (this is a mistake. the text should be inside another container.)
        // task_content_el.innerText= task;
        // adds the second div as a child of the first
        task_el.appendChild(task_content_el);
        
        // adding user input to div? what's the point of this? for edit button functionality.
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        //why two readonly?
        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";
        
        const task_delete_el  = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);
        // list_el was declared as being the div with tasks class so this adds the created task_el div to the already existing container. 
        list_el.appendChild(task_el);

        input.value = "";


        // this allows the user to edit the task. problem is it doesn't actually save the data it just turns back to readonly after finishing edit
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly")
                task_input_el.focus();
                task_edit_el.innerText = "Save";
                } else {
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_el.innerText = "Edit";
                    console.log("Saved")};
 
        })


        // delete button functionality
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

    });






    
});