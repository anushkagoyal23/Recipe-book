document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    const searchBar = document.getElementById("search-bar");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const recipeContent = this.parentElement.nextElementSibling;
            const isVisible = recipeContent.style.display === "block";
            recipeContent.style.display = isVisible ? "none" : "block";
            this.textContent = isVisible ? "Show Recipe" : "Hide Recipe";
        });
    });

    searchBar.addEventListener("input", function() {
        const searchTerm = this.value.toLowerCase();
        const recipes = document.querySelectorAll(".recipe-item");

        recipes.forEach(recipe => {
            const recipeName = recipe.querySelector(".recipe-header h3").textContent.toLowerCase();
            if (recipeName.includes(searchTerm)) {
                recipe.style.display = "block";
            } else {
                recipe.style.display = "none";
            }
        });
    });
});
