const searchMeal = () => {
    const mealName = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    //Loading data from API
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById("meal-container");
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

const getRecipi = (id) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.meals[0].strIngredient2));
}