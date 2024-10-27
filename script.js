
function generateRecipe(event){
    event.preventDefault();
    new Typewriter('#recipe', {
        strings: "Italian bread sticks",
        autoStart: true,
      });
  
    
}

let recipeForm = document.querySelector("#form-generator");
recipeForm.addEventListener("submit", generateRecipe);



new Typewriter('#typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
});