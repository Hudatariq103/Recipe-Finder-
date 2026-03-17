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
<img width="1332" height="631" alt="image" src="https://github.com/user-attachments/assets/ab501e29-9969-434b-a5d6-968949566179" />


🔹 Search Results
<img width="1311" height="525" alt="image" src="https://github.com/user-attachments/assets/2ec5c6f7-45fe-4348-9ca8-7e4abcfe5846" />
<img width="1316" height="452" alt="image" src="https://github.com/user-attachments/assets/bc9867d1-d621-4c39-bb36-211725faf860" />
<img width="1324" height="506" alt="image" src="https://github.com/user-attachments/assets/bfa90c1d-fcce-43dd-b03f-8a2d10b39ff1" />




🔹 Favorites Section
<img width="1342" height="619" alt="image" src="https://github.com/user-attachments/assets/bfcd1cbd-7fa6-4d88-8c7d-b2ff4302d827" />


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
        ingredients: ["chicken", "rice", "yogurt", "spices", "onion"],
        instructions: "Marinate chicken with yogurt and spices. Fry onions until golden. Cook chicken, then layer with half-cooked rice. Steam on low heat for 15–20 minutes until fully cooked.",
        image: "https://media.istockphoto.com/id/2254897359/photo/homemade-delicious-chicken-biriyani-served-in-cast-iron-pan.webp?a=1&b=1&s=612x612&w=0&k=20&c=IieK3z-KHQfURK6sgMHHOcdUZybz1huTK14ljevuz8k="
    },
    {
        name: "Chicken Cheese Omelette",
        category: "Breakfast",
        ingredients: ["egg", "onion", "chicken", "tomato", "cheddar cheese"],
        instructions: "Beat eggs with salt and pepper. Add chopped vegetables and cooked chicken. Cook on medium heat, fold gently, and sprinkle cheddar cheese before serving.",
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Grilled Chicken Sandwich",
        category: "Lunch",
        ingredients: ["chicken", "bread", "mayonnaise", "lettuce", "cheese"],
        instructions: "Season and grill chicken until tender. Toast bread slices, spread mayonnaise, add lettuce, cheese, and chicken. Serve warm.",
        image: "https://media.istockphoto.com/id/1235073540/photo/grilled-chicken-breast-sandwich.webp?a=1&b=1&s=612x612&w=0&k=20&c=8caOK0jVW3pUsVR-by8eaFAmun_gqmFwJFQJGNf-7ss="
    },
    {
        name: "Chicken Karahi",
        category: "Lunch",
        ingredients: ["chicken", "tomato", "garlic", "ginger", "spices"],
        instructions: "Cook chicken with garlic and ginger. Add tomatoes and spices, cook until oil separates and gravy thickens.",
        image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBrYXJhaGl8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Chicken Alfredo Pasta",
        category: "Dinner",
        ingredients: ["chicken", "pasta", "cream", "garlic", "cheese"],
        instructions: "Boil pasta. Cook chicken with garlic, add cream and cheese. Mix pasta into sauce and cook until creamy.",
        image: "https://media.istockphoto.com/id/1451111530/photo/creamy-alfredo-pasta-with-chicken-mushrooms-and-parmesan-cheese-healthy-italian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwFhkvvm3HxtLn0ECnLahYeRieNto0LGaZfm6pDKX_I="
    },
    {
        name: "Butter Chicken",
        category: "Dinner",
        ingredients: ["chicken", "butter", "tomato", "cream", "spices"],
        instructions: "Cook chicken in butter, add tomato gravy, spices, and cream. Simmer until smooth and rich.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Chicken Tikka",
        category: "Lunch",
        ingredients: ["chicken", "yogurt", "spices", "lemon"],
        instructions: "Marinate chicken in yogurt, spices, and lemon juice. Grill until slightly charred and juicy.",
        image: "https://images.unsplash.com/photo-1605908580297-f3e1c02e64ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoaWNrZW4lMjB0aWtrYWh8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Chicken Fried Rice",
        category: "Dinner",
        ingredients: ["chicken", "rice", "vegetables", "soy sauce", "egg"],
        instructions: "Cook chicken and vegetables. Add rice, soy sauce, and scrambled egg. Stir-fry on high heat.",
        image: "https://media.istockphoto.com/id/483676117/photo/fried-chicken-with-rice-and-vegetables.webp?a=1&b=1&s=612x612&w=0&k=20&c=i2fK9TnoPqlAZTGV3WFfVozUaMLODd6zaVD2QNWb3Vk="
    },
    {
        name: "Chocolate Cake",
        category: "Dessert",
        ingredients: ["flour", "cocoa", "sugar", "egg", "milk", "butter"],
        instructions: "Mix dry and wet ingredients. Bake at 180°C for 30–35 minutes. Let cool before serving.",
        image: "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Pancakes",
        category: "Breakfast",
        ingredients: ["flour", "milk", "egg", "sugar"],
        instructions: "Mix ingredients into a smooth batter. Pour onto pan and cook until golden on both sides.",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Ice Cream Sundae",
        category: "Dessert",
        ingredients: ["ice cream", "chocolate syrup", "milk", "nuts"],
        instructions: "Scoop ice cream into a bowl. Add chocolate syrup and sprinkle nuts on top.",
        image: "https://plus.unsplash.com/premium_photo-1664392060458-fb1908b79323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW0lMjBzdW5kYWV8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Brownies",
        category: "Dessert",
        ingredients: ["chocolate", "flour", "milk", "sugar", "butter"],
        instructions: "Mix ingredients, pour into tray, and bake until soft and fudgy inside.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D"
    }
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

document.getElementById("searchBtn").addEventListener("click", function () {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const selectedBoxes = document.querySelectorAll("input[type=checkbox]:checked");
    if (input === "" && selectedBoxes.length === 0) {
        alert("Please enter an ingredient or select a category.");
        return;
    }
    let categories = [];
    selectedBoxes.forEach(cb => categories.push(cb.value));
    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ing => ing.toLowerCase().includes(input)) || categories.includes(recipe.category)
    );
    displayRecipes(filteredRecipes);
});

function createCard(recipe, isFavoriteSection = false) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-img">
            <img src="${recipe.image}" alt="${recipe.name}">
            <span class="badge">${recipe.category}</span>
        </div>
        <div class="card-content">
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
            <button class="toggleBtn">Instructions</button>
            <p class="instructions hidden">${recipe.instructions}</p>
            <button class="${isFavoriteSection ? "removeBtn" : "favBtn"}">
                ${isFavoriteSection ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    `;
    card.querySelector(".toggleBtn").addEventListener("click", function () {
        const text = this.parentNode.querySelector(".instructions");
        text.classList.toggle("show");
    });
    if (isFavoriteSection) {
        card.querySelector(".removeBtn").addEventListener("click", function () {
            const favList = document.getElementById("favList");
            favList.removeChild(card);
            favorites = favorites.filter(r => r !== recipe.name);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        });
    } else {
        card.querySelector(".favBtn").addEventListener("click", function () {
            if (favorites.includes(recipe.name)) return;
            favorites.push(recipe.name);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            addToFavorites(recipe);
        });
    }
    return card;
}

function displayRecipes(data) {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";
    if (data.length === 0) {
        recipeList.innerHTML = "<p>No recipes found.</p>";
        return;
    }
    data.forEach(recipe => {
        const card = createCard(recipe, false);
        recipeList.appendChild(card);
    });
}

function addToFavorites(recipe) {
    const favList = document.getElementById("favList");
    const card = createCard(recipe, true);
    favList.appendChild(card);
}

window.onload = function () {
    recipes.forEach(recipe => {
        if (favorites.includes(recipe.name)) addToFavorites(recipe);
    });
    displayRecipes(recipes);
};
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
.card {
    width: 260px;
    border-radius: 16px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    transition: 0.3s;
    position: relative;
}

.card:hover {
    transform: translateY(-8px);
}

.card-img {
    position: relative;
}

.card-img img {
    width: 100%;
    height: 170px;
    object-fit: cover;
}

.badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #e6f2ff;
    color: #1c3d5a;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
}

.card-content {
    padding: 15px;
}

.card-content h3 {
    margin: 10px 0;
    color: #1f2d3d;
}

.card-content p {
    font-size: 14px;
    color: #555;
}

.toggleBtn {
    margin-top: 10px;
    width: 100%;
    background: transparent;
    border: 2px solid #2f80ed;
    color: #2f80ed;
    border-radius: 25px;
    padding: 8px;
    cursor: pointer;
}

.toggleBtn:hover {
    background: #2f80ed;
    color: white;
}

.favBtn {
    margin-top: 10px;
    width: 100%;
    background: #2f80ed;
    border-radius: 25px;
    padding: 8px;
    color: white;
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


