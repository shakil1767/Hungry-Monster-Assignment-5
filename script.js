//Search result part
const searchMeal = () => {
    const mealName = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    //Loading data from API
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => console.log(error));
}

const displayMeals = meals => {
    const mealContainer = document.getElementById("meal-container");
    mealContainer.innerHTML = "";
    meals.forEach(meal => {
        const mealDiv = document.createElement("div");
        mealDiv.className = "single-result";
        mealDiv.innerHTML = `
        <div>
            <img src="${meal.strMealThumb}"></img>
            <h3>${meal.strMeal}</h3>
        </div>
        <div>
            <button onclick="getRecipi('${meal.idMeal}')">Ingredients</button>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    });
}

//Ingredient part
const getRecipi = (id) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayIngredients(data.meals))
    .catch(error => console.log(error));
}

const displayIngredients = ingredients => {
    const ingredientContainer = document.getElementById("recipi-container");
    ingredientContainer.innerHTML = "";
    ingredients.forEach(ingredient => {
        const recipiDiv = document.createElement("div");
        recipiDiv.className = "single-recipi";
        recipiDiv.innerHTML = `
        <div>
            <img src=""><img src="${ingredient.strMealThumb}"></img></img>
            <h2>${ingredient.strMeal}</h2>
            <h3>Ingredients</h3>
            <p>${ingredient.strIngredient1}</p>
            <p>${ingredient.strIngredient2}</p>
            <p>${ingredient.strIngredient3}</p>
            <p>${ingredient.strIngredient4}</p>
            <p>${ingredient.strIngredient5}</p>
            <p>${ingredient.strIngredient6}</p>
        </div>
        `;
        ingredientContainer.appendChild(recipiDiv);
    });
}