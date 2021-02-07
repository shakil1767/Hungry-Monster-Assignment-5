fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(res => res.json())
.then(data => displayMeals(data.meals))

const displayMeals = meals => {
const mealsDiv = document.getElementById("mealList");
for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    const mealDiv = document.createElement("div");
    mealDiv.className = "mealDiv";

    const mealInfo = `
        <img src="${meal.strMealThumb}"></img>
        <h3> ${meal.strMeal} </h3>
        <button onclick="getRecipi('${meal.strMeal}')">Recipi</button>
    `
    mealDiv.innerHTML = mealInfo;
    mealsDiv.appendChild(mealDiv);
}
}

const getRecipi = meal =>{
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
 fetch(url)
.then(res => res.json())
.then(data => renderMealinfo(data[0]));
}

const renderMealinfo = meals =>{
const recipiDiv = document.getElementById("recipiInfo");
recipiDiv.innerHTML = `
    <h1>${meals.meal}</h1>
`
}
