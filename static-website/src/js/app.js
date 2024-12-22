document.addEventListener('DOMContentLoaded', (event) => {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');

    function renderTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = ''; // Ensure taskList is not null
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
        });
    }

    function loadTasks() {
        renderTasks();
    }

    addTaskButton.addEventListener('click', () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(newTaskInput.value);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        newTaskInput.value = '';
        renderTasks();
    });

    loadTasks();
});