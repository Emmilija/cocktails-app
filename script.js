//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let buttonKey = document.querySelector('.button').addEventListener('click', getDrink)
let enterKey = document.querySelector('input')

enterKey.addEventListener('keydown', function(event) {
    if(event.code === 'Enter') {
        getDrink(event)
    }
})


//fetch the API
function getDrink() {
 
    let drink = document.querySelector('input').value
  

    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink.replace(/ /g, '_')

    fetch(url)
    .then(res => res.json())
    .then(data => {
        //putting data in a variable
        let takeDrinks = data.drinks
        console.log(takeDrinks)


        if(takeDrinks === null) {
            alert('Put the correct cocktail name or alcohol')
        }

  let cocktailDiv = document.querySelector('.cocktails')

  let i = 0
//on click pause 
  document.addEventListener("click", function() {
    clearInterval(intervalId);
});


//taking the drinks and putting in the DOM 
let intervalId = setInterval(function() {
    let drinkIndex = i % takeDrinks.length
    let drinkName = takeDrinks[drinkIndex].strDrink;
    let drinkImg = takeDrinks[drinkIndex].strDrinkThumb;
    let drinkInstruction = takeDrinks[drinkIndex].strInstructions;

     
        let takeIngredient1 = takeDrinks[drinkIndex].strIngredient1
        let takeIngredient2 = takeDrinks[drinkIndex].strIngredient2
        let takeIngredient3 = takeDrinks[drinkIndex].strIngredient3
        let takeIngredient4 = takeDrinks[drinkIndex].strIngredient4
        let takeIngredient5 = takeDrinks[drinkIndex].strIngredient5
        let takeIngredient6 = takeDrinks[drinkIndex].strIngredient6
        let takeIngredient7 = takeDrinks[drinkIndex].strIngredient7
    
        let drinkHtml = `
        <div>
            <h2>${drinkName}</h2>
            <img src="${drinkImg}" alt="${drinkName}">
            <h3>${drinkInstruction}</h3>

          <ul id="listIng" >
          <p>List of ingredietns: </p>
         
          </ul>


        </div>


    `;
    
    cocktailDiv.innerHTML = drinkHtml;


            let ingredients = [takeIngredient1, takeIngredient2, takeIngredient3, takeIngredient4, takeIngredient5,takeIngredient6,takeIngredient7]
    
        //   console.log(ingredients)
        let ulParentEl = document.querySelector('#listIng')
    
            for (let i = 0; i < ingredients.length; i++) {
               
                let ingredient = ingredients[i]

                console.log(ingredient);
             
                       const liEl = document.createElement('li')
                        liEl.textContent = ingredient
                        ulParentEl.appendChild(liEl)


              
            }
         

   

    i++;
}, 2000);

 })

    .catch(err => {
        console.log(`error ${err}`)
    })
   
  
   


}