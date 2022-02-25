

const editTitle = document.getElementById('todo-title');
const editFinished = document.getElementById('edit-finished');
const dateCreated = document.getElementById('dateCreated')
const save = document.getElementById('save-btn')
const container = document.getElementById('container');
console.log(editTitle.id)



const params = window.location.search
const id = new URLSearchParams(params).get('id')

const spinner = document.createElement('p');
spinner.className = 'spinner'
spinner.innerHTML = '<i class="fa-solid fa-spinner"></i>'
container.appendChild(spinner);
save.disabled = true;
save.style.backgroundColor = 'gray'
const getData = async () =>{
    await axios.get(`${id}`).then((response) =>{
        spinner.innerHTML = ""
        save.disabled = false;
        save.style.backgroundColor = '#007bff'
        editFinished.checked = response.data.finished;
        editTitle.value = response.data.title;
        dateCreated.textContent = `Date Created: ${response.data.date}`;
    })
}

getData();
const updateReqest = async() =>{
    await axios.patch(`${id}`, {title: editTitle.value, finished: editFinished.checked})
}

save.addEventListener('click', () =>{
    if(editTitle.value.length != 0){
        updateReqest();
        const url = window.location.href.replace(`todo/?id=${id}`, "");
        window.location.href = url;
    }else{
        window.alert("please provide value")
    }
    

})
