

function displayGeneratedRecipe(response){
    console.log(response.data.answer);
    new Typewriter('#recipe', {
        strings: response.data.answer,
        autoStart: true,
        delay: 30,
      });

}

function generateRecipe(event){
    event.preventDefault();

    let apiKey = "7o60e48082t80b65afac13511e68bed5";
    let userInstructions = document.querySelector("#user-instructions")
    let prompt = `Generate a thirty minute or less ${userInstructions.value} recipe`
    let context = "You are a world renowned cheff.please provide a simple and concise recipe. provide recipe in basic HTML list format"
    let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(apiUrl).then(displayGeneratedRecipe);

    let recipe = document.querySelector(".recipe");
    recipe.classList.remove("hidden");
    recipe.innerHTML = `Generating a delicious ${userInstructions.value} recipe for you...`
  
}

let recipeForm = document.querySelector("#form-generator");
recipeForm.addEventListener("submit", generateRecipe);

