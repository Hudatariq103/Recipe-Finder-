
const recipes = [
    {
        name: "Chicken Biryani",
        category: "Dinner",
        ingredients: ["chicken", "rice", "spices"],
        instructions: "Cook chicken with spices. Boil rice. Layer and steam for 15 minutes.",
        image: "https://media.istockphoto.com/id/2254897359/photo/homemade-delicious-chicken-biriyani-served-in-cast-iron-pan.webp?a=1&b=1&s=612x612&w=0&k=20&c=IieK3z-KHQfURK6sgMHHOcdUZybz1huTK14ljevuz8k="
    },
    {
        name: "Omelette",
        category: "Breakfast",
        ingredients: ["egg", "onion", "tomato"],
        instructions: "Beat eggs, add vegetables, cook until golden.",
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b21lbGV0dGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Grilled Chicken Sandwich",
        category: "Lunch",
        ingredients: ["chicken", "bread", "mayonnaise"],
        instructions: "Grill chicken, assemble sandwich with mayo and veggies.",
        image: "https://media.istockphoto.com/id/1235073540/photo/grilled-chicken-breast-sandwich.webp?a=1&b=1&s=612x612&w=0&k=20&c=8caOK0jVW3pUsVR-by8eaFAmun_gqmFwJFQJGNf-7ss="
    },
    {
        name: "Chocolate Cake",
        category: "Dessert",
        ingredients: ["flour", "cocoa", "sugar", "egg"],
        instructions: "Mix ingredients and bake at 180°C for 30 minutes.",
        image: "https://images.unsplash.com/photo-1606755962774-5f7c23384d03?auto=format&fit=crop&w=400&q=80"
    }
];

let favorites = [];


document.getElementById("searchBtn").addEventListener("click", function () {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const selectedBoxes = document.querySelectorAll("input[type=checkbox]:checked");


    if (input === "" && selectedBoxes.length === 0) {
        alert("Please enter an ingredient or select a category.");
        return;
    }

    let categories = [];
    selectedBoxes.forEach(cb => categories.push(cb.value));

    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.includes(input) ||
        categories.includes(recipe.category)
    );

    displayRecipes(filteredRecipes);
});

// ----------------------
// Display Recipes
// ----------------------
function displayRecipes(data) {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";

    if (data.length === 0) {
        recipeList.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    data.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("card");

  
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name} image">
            <h3>${recipe.name}</h3>
            <p><strong>Category:</strong> ${recipe.category}</p>
            <button class="toggleBtn">View Recipe</button>
            <p class="instructions hidden">${recipe.instructions}</p>
            <button class="favBtn">Add to Favorites</button>
        `;

        card.querySelector(".toggleBtn").addEventListener("click", function () {
            const text = this.parentNode.querySelector(".instructions");
            text.classList.toggle("show");
        });


        card.querySelector(".favBtn").addEventListener("click", function () {
            if (favorites.includes(recipe.name)) {
                alert("Recipe already in favorites!");
                return;
            }
            favorites.push(recipe.name);
            addToFavorites(recipe);
        });

        recipeList.appendChild(card);
    });
}


function addToFavorites(recipe) {
    const favList = document.getElementById("favList");

    const card = document.createElement("div");
    card.classList.add("card");


    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name} image">
        <h3>${recipe.name}</h3>
        <button class="removeBtn">Remove</button>
    `;

    card.querySelector(".removeBtn").addEventListener("click", function () {
        favList.removeChild(card);
        favorites = favorites.filter(r => r !== recipe.name);
    });

    favList.appendChild(card);
}