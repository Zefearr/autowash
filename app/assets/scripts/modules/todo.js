class Todo {

    constructor() {
        this.form = document.querySelector('#task-form');
        this.taskList = document.querySelector('.collection');
        this.clearBtn = document.querySelector('.clear-tasks');
        this.filter = document.querySelector('#filter');
        this.taskInput = document.querySelector('#task');
      
        
      
        this.events();
    }

    events() { 
     
        if(typeof(this.form) !== 'undefined' && this.form !== null) {
            this.form.addEventListener('submit', this.addTask.bind(this));
            this.taskList.addEventListener('click', this.removetask.bind(this)); 
            this.clearBtn.addEventListener('click', this.clearTasks.bind(this));
            this.filter.addEventListener('keyup', this.filterTasks.bind(this));
            document.addEventListener('DOMContentLoaded', this.getTasks.bind(this));
        } 
         
      
    }
    checkifCardinDom() {
        window.addEventListener()
    }
   
    addTask(e) {
        

        if(this.taskInput.value === '') {
            alert('add task ept');
        }
        
        const li = document.createElement('li'); //this will create li element
        li.className = 'collection-item'; //add class for css
        li.appendChild(document.createTextNode(this.taskInput.value)); //create text node and append to li

        const link = document.createElement('a'); //create a el
        link.className = 'delete-item secondary-content'; //add class
        link.innerHTML = '<i class="fa fa-times"></i>'; //append icon

        li.appendChild(link); //append a el to li(task-item)

        this.taskList.appendChild(li) //append li for tasklist ul element

        this.storetaskinlocelStorage(this.taskInput.value);

        this.taskInput.value = ''; //clear form input after adding task 


        e.preventDefault();
    }
    storetaskinlocelStorage(task) {
        let tasks;
        if(localStorage.getItem('tasks') === null ) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    removetask(e) {
        if(e.target.parentElement.classList.contains('delete-item')) {

           e.target.parentElement.parentElement.remove();

           this.removetaskFromStorage(e.target.parentElement.parentElement);

        }
    }
    removetaskFromStorage(taskItem) {
        let tasks;
        if(localStorage.getItem('tasks') === null ) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.forEach((task, index) => {
            if(taskItem.textContent === task) {
                tasks.splice(index, 1);
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    clearTasks() {
        while(this.taskList.firstChild) {
            this.taskList.removeChild(this.taskList.firstChild);
        }
        this.clearTasksFromStorage();
    }
    clearTasksFromStorage() {
        localStorage.clear();
    }
    getTasks() {
        let tasks;
        if(localStorage.getItem('tasks') === null ) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.forEach((task) => {
            const li = document.createElement('li'); //this will create li element
            li.className = 'collection-item'; //add class for css
            li.appendChild(document.createTextNode(task)); //create text node and append to li
    
            const link = document.createElement('a'); //create a el
            link.className = 'delete-item secondary-content'; //add class
            link.innerHTML = '<i class="fa fa-times"></i>'; //append icon
    
            li.appendChild(link); //append a el to li(task-item)
    
            this.taskList.appendChild(li) //append li for tasklist ul element
        });
    }

    filterTasks(e) {
        const text = e.target.value.toLowerCase();

        document.querySelectorAll('.collection-item').forEach((task) => {
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none'; 
            }
        });
    }
}

export default Todo;