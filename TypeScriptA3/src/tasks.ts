// Classe pour gérer les tâches
class TaskManager {
    constructor() {
        const taskForm = document.getElementById("taskForm") as HTMLFormElement;
        taskForm.addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    // Méthode pour gérer la soumission du formulaire
    handleFormSubmit(event: Event) {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire

        // Récupérer les valeurs du formulaire
        const title = (document.getElementById("taskTitle") as HTMLInputElement).value;
        const description = (document.getElementById("taskDescription") as HTMLTextAreaElement).value;
        const dueDate = (document.getElementById("taskDueDate") as HTMLInputElement).value;
        const priority = (document.getElementById("taskPriority") as HTMLSelectElement).value;

        // Créer une nouvelle tâche
        const taskDiv = document.createElement("div");
        taskDiv.className = `task ${priority}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.type = "button";
        deleteButton.addEventListener("click", () => taskDiv.remove()); // Gestionnaire d'événements pour le bouton Supprimer

        const editButton = document.createElement("button");
        editButton.textContent = "Modifier";
        editButton.className = "edit-btn";
        editButton.type = "button";

        taskDiv.innerHTML = `
            <h3>${title} <span>– Priorité ${priority.charAt(0).toUpperCase() + priority.slice(1)}</span></h3>
            <p>Date d'échéance: ${dueDate}</p>
            <p>${description}</p>
        `;
        taskDiv.appendChild(deleteButton);
        taskDiv.appendChild(editButton);
        document.getElementById("task-list").appendChild(taskDiv);

        // Réinitialiser le formulaire
        (event.target as HTMLFormElement).reset();
    }
}

// Fonction principale
document.addEventListener("DOMContentLoaded", function () {
    const taskManager = new TaskManager();
});
