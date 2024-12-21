# CLI-ToDo

CLI-ToDo is a simple and efficient command-line application for managing your to-do list. You can add, view, mark as done, and delete tasks directly from your terminal.

## Features

- Add Tasks: Quickly add tasks to your to-do list.
- View Tasks: Display all your pending tasks.
- Mark as Done: Mark tasks as completed.
- Delete Tasks: Remove tasks from the list.

## Prerequisites

- Node.js: Ensure Node.js is installed on your system. You can download it from https://nodejs.org/.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pavitra-mallick/CLI-ToDo.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CLI-ToDo
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Add a New Task
```bash
node todo.js add "Your task description here"
```

### View All Tasks
```bash
node todo.js list
```

### Mark a Task as Done
```bash
node todo.js done <task_id>
```
Replace `<task_id>` with the actual ID of the task.

### Delete a Task
```bash
node todo.js delete <task_id>
```
Replace `<task_id>` with the actual ID of the task.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or feedback, contact Pavitra Mallick at https://github.com/pavitra-mallick.
