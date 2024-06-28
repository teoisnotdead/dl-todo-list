const tasks = [
  {
    id: 1,
    name: 'Tarea 1',
    completed: false
  },
  {
    id: 2,
    name: 'Tarea 2',
    completed: true
  },
  {
    id: 3,
    name: 'Tarea 3',
    completed: true
  }
  ,
  {
    id: 4,
    name: 'Tarea 3',
    completed: false
  }
]

const inputTask = document.querySelector('#task')
const btnAddTask = document.querySelector('#add')
const toDoList = document.querySelector('#todo-list')

const createTask = (taskList) => {
  taskList.forEach((task) => {
    const { id, name, completed } = task
    const btnBgCompleted = `${completed ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-green-500 hover:bg-green-400'}`
    const liBgCompleted = `${completed ? 'bg-green-200' : ''}`
    const btnText = `${completed ? 'Dejar pendiente' : 'Completar'}`

    const li = document.createElement('li')
    li.className = `border border-gray-300 p-2 mt-2 flex justify-between ${liBgCompleted}`
    li.innerHTML = `<span><strong>ID: ${id}</strong> ${name}</span>
                    <div id="actions" class="flex justify-end gap-2">
                        <button class="${btnBgCompleted} text-white py-1 px-2 rounded">${btnText}</button>
                        <button class="bg-red-500 text-white py-1 px-2 hover:bg-red-400 rounded">Eliminar</button>
                    </div>`
    toDoList.appendChild(li)
  })
}

createTask(tasks)
