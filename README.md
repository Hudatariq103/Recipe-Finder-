# 🍽️ Recipe Finder Web App

## 📌 Project Overview

This project is an **Interactive Recipe Finder Web Page** developed using **HTML, CSS, and JavaScript (DOM Manipulation)**.
It allows users to search for recipes, view details, and save their favorite meals in a dynamic and interactive way.

---

## 🚀 Features

* 🔍 Search recipes by ingredient
* 📂 Filter recipes by category (Breakfast, Lunch, Dinner, Dessert)
* 📋 View recipe instructions (collapsible)
* ⭐ Add recipes to Favorites
* ❌ Remove recipes from Favorites
* 🎨 Clean UI with hover effects and smooth transitions
* 🖼️ Dynamic images for each recipe

---

## 🛠️ Technologies Used

* HTML5 (Semantic Tags)
* CSS3 (Flexbox, Transitions)
* JavaScript (DOM Manipulation)

---

## 📁 Project Structure

```
Recipe-Finder/
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## ⚙️ How It Works

1. User enters an ingredient or selects a category
2. JavaScript filters recipes dynamically
3. Matching recipes are displayed on the page
4. Users can:

   * View recipe instructions
   * Add recipes to favorites
5. Favorites are managed dynamically using DOM

---
📸 Screenshots
🔹 Home Page
<img width="1336" height="635" alt="image" src="https://github.com/user-attachments/assets/9ce11af2-4a64-4846-9fb8-99536daa8344" />

🔹 Search Results
<img width="1317" height="612" alt="image" src="https://github.com/user-attachments/assets/24ab37c6-c7f4-490d-a85b-eac7a9b7d0f3" />

🔹 Favorites Section
<img width="1332" height="488" alt="image" src="https://github.com/user-attachments/assets/885e73da-f781-45bc-9f13-029808638637" />

---

## 🧩 Code Snippets

### 🔹 HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Recipe Finder</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>


<header>
    <h1>Recipe Finder</h1>
    <p>Search and save your favorite meals</p>
</header>


<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Favorites</a></li>
    </ul>
</nav>


<section id="search-section">
    <h2>Search Recipes</h2>

    <div class="search-box">
        <input type="text" id="searchInput" placeholder="Enter ingredient...">
        <button id="searchBtn">Search</button>
    </div>

    <div class="filters">
        <label><input type="checkbox" value="Breakfast"> Breakfast</label>
        <label><input type="checkbox" value="Lunch"> Lunch</label>
        <label><input type="checkbox" value="Dinner"> Dinner</label>
        <label><input type="checkbox" value="Dessert"> Dessert</label>
    </div>
</section>


<section id="results-section">
    <h2>Recipe Results</h2>
    <div id="recipeList" class="grid"></div>
</section>


<section id="favorites-section">
    <h2>Favorites</h2>
    <div id="favList" class="grid"></div>
</section>

<footer>
    <p>© 2026 Recipe Finder | All Rights Reserved</p>
</footer>

<script src="script.js"></script>
</body>
</html>
```

### 🔹 JavaScript (DOM Manipulation)

```javascript

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
```

### 🔹 CSS Styling

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    background-color: #ffffff;
    color: #1f2d3d;
}

header {
    background-color: #e3f0ff;
    text-align: center;
    padding: 20px;
    border-bottom: 2px solid #b8d6ff;
}

nav {
    background-color: #b8d6ff;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 0;
}

nav li {
    margin: 0 15px;
}

nav a {
    text-decoration: none;
    color: #083a5b;
    font-weight: 600;
}

nav a:hover {
    color: #055c9d;
}

section {
    padding: 20px;
}

.search-box {
    margin-bottom: 10px;
}

input {
    padding: 8px;
    width: 200px;
    border: 1px solid #9ec9ff;
    border-radius: 4px;
    outline: none;
    background-color: #ffffff;
}

input:focus {
    border-color: #2f80ed;
}

button {
    padding: 8px 12px;
    border: none;
    background-color: #2f80ed;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.2s;
}

button:hover {
    background-color: #1c6cd6;
}

.grid {
    display: flex;
    flex-wrap: wrap;
}

.card {
    background: #ffffff;
    border-radius: 8px;
    padding: 12px;
    margin: 10px;
    width: 220px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.08);
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid #d6e9ff;
}

.card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}

.hidden {
    display: none;
}

.show {
    display: block;
    margin-top: 8px;
}

footer {
    text-align: center;
    background-color: #e3f0ff;
    padding: 10px;
    border-top: 2px solid #b8d6ff;
}
```

---

## ⚠️ Validation & Error Handling

* Prevents empty searches
* Alerts user for invalid actions
* Prevents duplicate favorites

---

## 🎯 Learning Outcomes

* Understanding of **DOM Manipulation**
* Use of **semantic HTML structure**
* Dynamic content rendering using JavaScript
* Creating interactive UI components

---

## 📌 Future Improvements (Optional)

* Save favorites using localStorage
* Add more recipes and categories
* Improve UI with animations
* Add search suggestions

---

## 👩‍💻 Author

Huda Tariq

---


