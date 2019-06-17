const fs = require('fs')

const addTask = function(name, description) {
    const tasks = loadAllTasks()
    console.log(tasks)

    const duplicateTasks = tasks.find(function(task){
        return task.name === name
    })

    // Cria tarefa nova quando não estiver duplicada
    if(!duplicateTasks){
        const newTask = {
            name,
            description
        }
        
        tasks.push(newTask)
        saveTask(newTask)
    } else {
        console.log('Duplicated Task')
    }
}

// Criar arquivo em formado JSON
const saveTask = function(task) {
    const taskJSON = JSON.stringify(task)
    fs.writeFileSync('tasks.json', taskJSON)
}

// ler toda as tarefas e verificar se arquivo existe e cria um buffer
const loadAllTasks = function() {
    try {
        const tasksBuffer = fs.readFileSync('tasks.json')
        return JSON.parse(tasksBuffer.toString())
    } catch (error) {
        return []
    }
}

module.exports = {
    addTask
}