

const editTitle = document.getElementById('todo-title');
const editFinished = document.getElementById('edit-finished');
const dateCreated = document.getElementById('dateCreated')
const save = document.getElementById('save-btn')
const container = document.getElementById('container');



const params = window.location.search
const id = new URLSearchParams(params).get('id')

const spinner = document.createElement('p');
spinner.className = 'spinner'
spinner.innerHTML = '<i class="fa-solid fa-spinner"></i>'
container.appendChild(spinner);
save.disabled = true;
save.style.backgroundColor = 'gray'

const cookie = { };
document.cookie.split(";").map((c) =>{
    c.split("=").reduce((key, val) =>{
        cookie[key.trim()] = val
    })
})
const getData = async () =>{
   
    console.log(cookie.todoUserId)
    await axios.get(`/todo/${cookie.todoUserId}/${id}`).then((response) =>{
        console.log(response)
        let todos = response.data.todos[0]
        spinner.innerHTML = ""
        save.disabled = false;
        save.style.backgroundColor = '#007bff';
        editFinished.checked = todos.finished;
        editTitle.value = todos.title;
        dateCreated.textContent = `Date Created: ${todos.date}`;
    })
}

console.log(cookie.todoUserId)
getData();
const updateReqest = async() =>{
    await axios.patch(`${cookie.todoUserId}`, {todoId: id ,title: editTitle.value, finished: editFinished.checked})
    const url = window.location.href.replace(`todo/?id=${id}`, "");
    window.location.href = url;
}

save.addEventListener('click', () =>{
    if(editTitle.value.length != 0){
        spinner.innerHTML = '<i class="fa-solid fa-spinner"></i>'
        save.disabled = 'true';
        save.style.backgroundColor = 'gray'
        updateReqest();
        
    }else{
        window.alert("please provide value")
    }
    

})
