const chalk = require('chalk')
const yargs = require('yargs')
const task = require('./task')

//Alterando a versão do CLI
yargs.version('1.0.1')

// Name: Estudar
// Description: Estudar a matéria
// Status: Backlog | InProgress | Done

//  Criando as Infos das Tasks
yargs.command({
    command: 'add',
    describe: 'Add a new task into the ToDo list',
    builder: {
        name: {
            describe: 'Task name',
            demandOption: true,
            type: String
        },
        description: {
            describe: 'Task Description',
            demandOption: true,
            type: String
        },
        status: {
            describe: 'What is the real status',
            demandOption: true,
            type: String
        }
    },

    handler: function(argv){
        const info = chalk.green.bold.inverse('Creating a new task: ');
        console.log(info)
        task.addTask(argv.name, argv.description, argv.status)
        // console.log(`Description: ${argv.description}`)
        // console.log(`Status: ${argv.status}`)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a task',
    handler: function(){
        console.log(chalk.red('Removendo uma task'))
    }
})

yargs.command({
    command: 'list',
    describe: 'List all Tasks',
    handler: function(){
        console.log(chalk.blue('Listando todas as tasks'))
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a task from the ToDo list',
    handler: function() {
        console.log(chalk.yellow('Abrindo uma task'))
    }
})

yargs.parse()