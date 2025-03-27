(async function(){
console.log("DOM loaded");
const result = document.querySelector('.result-container');
const searchBtn = document.querySelector('.searchButton');
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchBtn.addEventListener("click", ()=>{
	let searchInput = document.querySelector('.searchField').value;
		result.innerHTML = '';
		fetch(url + searchInput)
		.then((response) => response.json())
		.then((data) =>{

			for(let i =  0; i < data.meals.length;i++){
				
				let mealInfo = data.meals[i];
				const newDiv = document.createElement('div');
				newDiv.className = 'resultBox';

				let resultBox =
				`<h3 class="headingText">${mealInfo.strMeal}</h4>
				<img src="${mealInfo.strMealThumb}" class="thumbnailImg" />
				<h4 class="subHeading">Food Type: ${mealInfo.strArea}</h4>
				<a href="${mealInfo.strSource}" class="recipeLink" target="_blank">Recipe Link</a>
				<a href="${mealInfo.strYoutube}" class="youtubeLink" target="_blank">Youtube</a>`;
			newDiv.innerHTML = resultBox;
			result.appendChild(newDiv);
		}


		}).catch((error) =>{
			console.error('Error fetching data:', error);
			result.innerHTML = `<h2 class="headingText">Uh oh, sorry we can't find your recipe</h2>`;
		});

	});


})();