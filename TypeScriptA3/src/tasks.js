// Classe pour gérer les tâches
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        var taskForm = document.getElementById("taskForm");
        taskForm.addEventListener("submit", this.handleFormSubmit.bind(this));
    }
    // Méthode pour gérer la soumission du formulaire
    TaskManager.prototype.handleFormSubmit = function (event) {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire
        // Récupérer les valeurs du formulaire
        var title = document.getElementById("taskTitle").value;
        var description = document.getElementById("taskDescription").value;
        var dueDate = document.getElementById("taskDueDate").value;
        var priority = document.getElementById("taskPriority").value;
        // Créer une nouvelle tâche
        var taskDiv = document.createElement("div");
        taskDiv.className = "task ".concat(priority);
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.type = "button";
        deleteButton.addEventListener("click", function () { return taskDiv.remove(); }); // Gestionnaire d'événements pour le bouton Supprimer
        var editButton = document.createElement("button");
        editButton.textContent = "Modifier";
        editButton.className = "edit-btn";
        editButton.type = "button";
        taskDiv.innerHTML = "\n            <h3>".concat(title, " <span>\u2013 Priorit\u00E9 ").concat(priority.charAt(0).toUpperCase() + priority.slice(1), "</span></h3>\n            <p>Date d'\u00E9ch\u00E9ance: ").concat(dueDate, "</p>\n            <p>").concat(description, "</p>\n        ");
        taskDiv.appendChild(deleteButton);
        taskDiv.appendChild(editButton);
        document.getElementById("task-list").appendChild(taskDiv);
        // Réinitialiser le formulaire
        event.target.reset();
    };
    return TaskManager;
}());
// Fonction principale
document.addEventListener("DOMContentLoaded", function () {
    var taskManager = new TaskManager();
});
// Récupérer le bouton "Appliquer Filtre"
var applyFilterButton = document.getElementById('applyFilter');
// Ajouter un gestionnaire d'événements au clic sur le bouton "Appliquer Filtre"
applyFilterButton.onclick = function () {
    // Récupérer la valeur de priorité sélectionnée dans le filtre
    var priority = document.getElementById('filterPriority').value;
    // Récupérer toutes les tâches
    var tasks = document.getElementsByClassName('task');
    // Masquer toutes les tâches par défaut
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].style.display = "none";
    }
    // Afficher les tâches en fonction de la priorité sélectionnée
    switch (priority) {
        case "high":
            showTasksByPriority('high');
            break;
        case "low":
            showTasksByPriority('low');
            break;
        case "medium":
            showTasksByPriority('medium');
            break;
        default:
            // Si aucun filtre selec, on affiche tout
            for (var i = 0; i < tasks.length; i++) {
                tasks[i].style.display = "block";
            }
            break;
    }
};
// Fonction pour afficher les tâches en fonction de la priorité sélectionnée
function showTasksByPriority(priority) {
    var tasks = document.getElementsByClassName(priority);
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].style.display = "block";
    }
}
