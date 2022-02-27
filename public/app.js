const date = new Date()
const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
console.log(currentDate)

const list = document.getElementById("list");
const addTodo = document.getElementById('add-to-list');
const inputName = document.getElementById('todo');
const editButton = document.getElementsByClassName('edit-button');
const deleteButton = document.getElementsByClassName('delete-button')
const greetings = document.getElementById('greetings')
const spinner = document.createElement('p');
spinner.className = 'spinner'
spinner.innerHTML = '<i class="fa-solid fa-spinner"></i>'
list.appendChild(spinner)

const modal = document.getElementsByClassName('modal')
const modalSaveBtn = document.getElementById('save-name');
const modalInput = document.getElementById('modal-input');


const cookie = { };
    document.cookie.split(";").map((c) =>{
        c.split("=").reduce((key, val) =>{
            cookie[key.trim()] = val
        })
    })

        const getUser = async () =>{
        await axios.get(`/getuser/${cookie.todoUserId}`).then((res) =>{
            greetings.textContent = `Welcome to your personal Todo-App, ${res.data.name}!    `
        })
    }


    
/////////////////////////
const setName = async(name) =>{
    await axios.post('/user',{name}).then((res) =>{
        document.cookie = `todoUserId=${res.data}`
        console.log("data from post",res.data)
        window.location.reload();
    }) ;
}


modalSaveBtn.addEventListener('click', () =>{
    modal[0].style.display = 'none'
    setName(modalInput.value);
})

const fetchData = async () =>{
    await axios.get(`${window.location.href}get-all-todos/${cookie.todoUserId}`).then(res =>{
        list.style.backgroundColor = 'white'
        list.innerHTML =''
        res.data.todos.map((data) =>{
            const divTodos = document.createElement('div');
            divTodos.className = "todos";
            const todoName = document.createElement('p');
            todoName.className = "todo-name";
            todoName.textContent = data.title
            const btnContainer = document.createElement('div');
            btnContainer.className = 'btn-container'
            const btnEdit = document.createElement('btn');
            btnEdit.className = "edit-button";
            btnEdit.dataId = data._id;
            btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
            const btnDel = document.createElement('button');
            btnDel.className = "delete-button";
            btnDel.dataId = data._id;
            btnDel.innerHTML = '<i class="fa-solid fa-xmark"></i>'
            btnContainer.appendChild(btnEdit);
            btnContainer.appendChild(btnDel);

            divTodos.appendChild(todoName)
            divTodos.appendChild(btnContainer)
            if(data.finished){
                todoName.style.textDecoration = 'line-through'
            }
            list.appendChild(divTodos)
        })
        btnEditHandler();
        btnDeleteHandler();
    })
    
}

const checkCookie = () =>{
    if (cookie.todoUserId) {
        getUser()
        fetchData();
        modal[0].style.display = 'none'
    }
}
checkCookie();

const handlePostRequest = async (e) =>{
    try{
        await axios.post('/add', {
            todoUserId: cookie.todoUserId,
            todo: {
                title: inputName.value, 
                date: currentDate,
                finished: false}
         })
       console.log('success post')
    }catch(error){
        console.log(error)
    }

}
addTodo.addEventListener('click', (e) =>{
    if(inputName.value.length != 0){
        handlePostRequest();
        inputName.value = "";
        window.location.reload();
    }else{
        console.log('empy')
    }
})

const btnEditHandler = () =>{
    for(let i = 0; i < editButton.length; i++){
        editButton[i].addEventListener('click', () =>{
            window.location.href = `todo/?id=${editButton[i].dataId}`
        })
    }
}

const deleteRequest = async (id) =>{
    await axios.delete(`/del/todo/${cookie.todoUserId}/${id}`)
}

const btnDeleteHandler = () =>{
    for(let i = 0; i < deleteButton.length; i++){
        deleteButton[i].addEventListener('click', () =>{
            deleteRequest(deleteButton[i].dataId)
            window.location.reload();
        })
    }
    
}


