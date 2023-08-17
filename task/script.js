    const tasksName = [];
    const tasksId = [];
    const taskDesc = [];
    const taskColor = [];
    var edit = true
    function TasksPage(value, id){
       // console.log(id)
        var page = document.getElementById('TasksPage')
        var newTask = document.getElementById('NewTask')
        var infoTask = document.getElementById('TaskInfo')
        var DivTitle = document.getElementById('TitleEdit')
        var DivColor = document.getElementById('ColorEdit')
        var InputTitle = document.getElementById('titleInput')
        if(value == 'new'){
            newTask.style.display = 'block'
            page.style.display = 'block';
        }else if( value == 'task'){
            console.log(value, id)
            document.getElementById('title').innerHTML = tasksName[id]
            var descri = document.getElementById('descri')
            descri.style.width = '50vh'
            descri.style.height = '30vh'
            descri.style.backgroundImage = 'none'
            descri.style.padding = '0.5vh'
            descri.value = taskDesc[id]
            descri.setAttribute('readonly', 'on')
            document.getElementById('TaskID').value = id
            border = document.getElementById('TasksPage')
            border.style.borderLeft = `1vh solid ${taskColor[id]}`


            // monstrar pagina
            page.style.display = 'block';
            infoTask.style.display = 'block'
        }else if(value == 'edit'){
            id = document.getElementById('TaskID').value
            if(edit == true){
                DivTitle.style.display = 'flex'
                DivColor.style.display = 'flex'
                InputTitle.value = tasksName[id]
                document.getElementById('descri').removeAttribute('readonly', 'on')
                document.getElementById('EditTaskButton').style.transition = '0.5s';
                document.getElementById('EditTaskButton').style.backgroundImage = 'url(icons/save.ico)';
                edit = false;
            }else{
                DivTitle.style.display = 'none'
                DivColor.style.display = 'none'
                document.getElementById('descri').setAttribute('readonly', 'on')
                document.getElementById('EditTaskButton').style.transition = '0.5s'
                document.getElementById('EditTaskButton').style.backgroundImage = 'url(icons/edit.ico)'
                taskDesc[id] = document.getElementById('descri').value
                tasksName[id] = document.getElementById('titleInput').value
                taskColor[id] = document.getElementById('colorInput').value
                document.getElementById('title').innerHTML = InputTitle.value
                edit = true;
            }
        }else if(value == 'delet'){
            id = document.getElementById('TaskID').value
            console.log(`DELET TASK: ${tasksName[id]} id ${id}`)
            page.style.display = 'none';
            newTask.style.display = 'none'
            infoTask.style.display = 'none'
            DivTitle.style.display = 'none'
            var taskDelet = tasksId.indexOf(id)  
            RemoveTasks()
            tasksId.splice(taskDelet, 1); 
            tasksName.splice(taskDelet, 1); 
            taskColor.splice(taskDelet, 1); 
            taskDesc.splice(taskDelet, 1); 
            ReLoadTasks()
        }else if(value == 'closeTask'){
            console.log('close tasks')
            RemoveTasks()
            ReLoadTasks()


            page.style.display = 'none';
            newTask.style.display = 'none'
            infoTask.style.display = 'none'
            DivTitle.style.display = 'none'
            document.getElementById('descri').setAttribute('readonly', 'on')

            var titulo = document.getElementById('title')
            var color = document.getElementById('color')
            var desc = document.getElementById('descri')
            titulo.value = ''
            desc.value = ''
        }
        else{
            page.style.display = 'none';
            newTask.style.display = 'none'
            infoTask.style.display = 'none'
            DivTitle.style.display = 'none'
            document.getElementById('descri').setAttribute('readonly', 'on')

            var titulo = document.getElementById('title')
            var color = document.getElementById('color')
            var desc = document.getElementById('descri')
            titulo.value = ''
            desc.value = ''
            // updateTask()
            // window.location.reload(true);
        }
    }
    function CreateTask(){
        var newTask = document.getElementById('NewTask')
        var infoTask = document.getElementById('TaskInfo')
        var DivTitle = document.getElementById('TitleEdit')
        var titulo = document.getElementById('NewTasktitle')
        var color = document.getElementById('color')
        var desc = document.getElementById('NewDescri')
        var button = document.getElementById('CreateTaskButton')
        var NewTask = document.getElementById('NewTask')
        var page = document.getElementById('TasksPage')
        if(titulo.value == undefined || titulo.value == null || titulo.value == ""){
            button.style.backgroundColor = 'red'
            button.style.backgroundImage = 'url(./icons/checkFalse.ico)'
        }else{
            var id = tasksId.length
            console.log(`Nome: ${titulo.value} ---- ID: ${id} Color: ${color.value} Desc: ${desc.value}`)
            var Loc = document.getElementById('tasks');
            // Criando a div:
            var body = document.createElement("div");
            body.className = 'tasks';
            body.id = id
            body.setAttribute('onclick', `TasksPage('task', '${id}')`)
            body.style.borderLeft = `1vh solid ${color.value}` 
            Loc.appendChild(body);
            // Criando os Nomes:
            var Name = document.createElement("div");
            Name.className = 'taskNmae'
            Name.innerHTML = titulo.value;
            body.appendChild(Name)
           


          
            // Salvando na listas
            tasksName[id] = titulo.value;
            tasksId[id] = id;
            taskColor[id] = color.value;
            taskDesc[id] = desc.value
            // animação


            button.style.backgroundColor = 'white'
            button.style.backgroundImage = 'url(./icons/add.ico)'
            page.style.display = 'none';
            newTask.style.display = 'none'
            infoTask.style.display = 'none'
            DivTitle.style.display = 'none'
            // resetando os inputs
            titulo.value = '';
            desc.value = '';
        }
    }
    function updateTask(){
       var tasks = document.getElementById('tasks')
       tasks.parentNode.removeChild(tasks)
       console.log(tasks)
    }
    function LoadTask(){
        var quantidade =  tasksId.length;
        var i = 0;
        console.log(`${quantidade}`)
        while(i < quantidade){
            console.log(`Nome: ${tasksName[i]} ---- ID: ${tasksId[i]}  Color: ${taskColor[i]} Descri: ${taskDesc[i]}`)
            var Loc = document.getElementById('tasks');
            // Criando a div:
            var body = document.createElement("div");
            body.className = 'tasks';
            body.id = i
            body.setAttribute('onclick', `TasksPage('task', '${i}')`)
            body.style.borderLeft = `1vh solid ${taskColor[i]}` 
            Loc.appendChild(body);
            // Criando os Nomes:
            var Name = document.createElement("div");
            Name.className = 'taskNmae'
            Name.innerHTML = tasksName[i];
            body.appendChild(Name)
      
           

           // var id = tasksId[i];
            //taskElement.id = id
            //taskElement.innerHTML = `${tasksName[i]}  ID: ${id}`;
    
            i++
        }
    }
    function testTask(){
        var Test = document.getElementById('NewTasktitle')
        var button = document.getElementById('CreateTaskButton')
        button.style.transition = '0.5s'
    
        if(Test.value == undefined ||Test.value == null || Test.value == ""){
            button.style.backgroundColor = 'red'
            button.style.backgroundImage = 'url(./icons/checkFalse.ico)'

        }else{
            button.style.backgroundColor = 'green'
            button.style.backgroundImage = 'url(./icons/checkTrue.ico)'
        }
    }
    function verificTask(value){
        var close = document.getElementById('CloseTaskButton');
        var update = document.getElementById('EditTaskButton');
        var delet = document.getElementById('DeletTaskButton');
        console.log(value)
    }
    function RemoveTasks(){
        var quantidadee = tasksId.length;
        i = 0
        while(i < quantidadee){
            document.getElementById(i).remove()
            i++;
        }
    }
    function ReLoadTasks(){
        var quantidade =  tasksId.length;
        var i = 0;
        while(i < quantidade){
            console.log(`Nome: ${tasksName[i]} ---- ID: ${tasksId[i]}  Color: ${taskColor[i]} Descri: ${taskDesc[i]}`)
            var Loc = document.getElementById('tasks');
            // Criando a div:
            var body = document.createElement("div");
            body.className = 'tasks';
            body.id = i
            body.setAttribute('onclick', `TasksPage('task', '${i}')`)
            body.style.borderLeft = `1vh solid ${taskColor[i]}` 
            Loc.appendChild(body);
            // Criando os Nomes:
            var Name = document.createElement("div");
            Name.className = 'taskNmae'
            Name.innerHTML = tasksName[i];
            body.appendChild(Name)
      
           

           // var id = tasksId[i];
            //taskElement.id = id
            //taskElement.innerHTML = `${tasksName[i]}  ID: ${id}`;
    
            i++
        }
    }