document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");
  
    // Add a new task
    addBtn.addEventListener("click", () => {
      const task = todoInput.value.trim();
      if (task) {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${task}</span>
          <button class="delete-btn">Delete</button>
        `;
  
        // Add delete functionality
        li.querySelector(".delete-btn").addEventListener("click", () => {
          li.remove();
        });
  
        todoList.appendChild(li);
        todoInput.value = ""; // Clear input
      } else {
        alert("Please enter a task!");
      }
    });
  
    // Allow pressing Enter to add task
    todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addBtn.click();
      }
    });
  });
  