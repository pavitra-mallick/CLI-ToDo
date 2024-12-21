#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const program = new Command();

const TODO_FILE = 'todos.json';

// Helper functions to interact with the JSON file
function loadTodos() {
    if (!fs.existsSync(TODO_FILE)) {
        // If the file doesn't exist, return an empty array
        return [];
    }
    const data = fs.readFileSync(TODO_FILE, 'utf-8');

    if (data.trim() === '') {
        // If the file is empty, return an empty array
        return [];
    }

    // Try parsing the JSON data
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading todos.json: ", error);
        return [];
    }
}

function saveTodos(todos) {
    fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
}

// Command to add a new to-do
program
    .command('add <task>')
    .description('Add a new task to the list')
    .action((task) => {
        const todos = loadTodos();
        todos.push({ task, done: false });
        saveTodos(todos);
        console.log(`Task added: "${task}"`);
    });

// Command to list all to-dos
program
    .command('list')
    .description('List all tasks')
    .action(() => {
        const todos = loadTodos();
        if (todos.length === 0) {
            console.log('No tasks found.');
            return;
        }
        todos.forEach((todo, index) => {
            const status = todo.done ? '[x]' : '[ ]';
            console.log(`${index + 1}. ${status} ${todo.task}`);
        });
    });

// Command to mark a task as done
program
    .command('done <taskNumber>')
    .description('Mark a task as done')
    .action((taskNumber) => {
        const todos = loadTodos();
        const index = taskNumber - 1;
        if (todos[index]) {
            todos[index].done = true;
            saveTodos(todos);
            console.log(`Task ${taskNumber} marked as done`);
        } else {
            console.log(`Task ${taskNumber} not found`);
        }
    });

// Command to remove a task
program
    .command('remove <taskNumber>')
    .description('Remove a task from the list')
    .action((taskNumber) => {
        const todos = loadTodos();
        const index = taskNumber - 1;
        if (todos[index]) {
            const removedTask = todos.splice(index, 1);
            saveTodos(todos);
            console.log(`Removed task: "${removedTask[0].task}"`);
        } else {
            console.log(`Task ${taskNumber} not found`);
        }
    });

// Parse the command-line arguments
program.parse(process.argv);