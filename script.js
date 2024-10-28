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

    let apiKey = "";
    let userInstructions = document.querySelector("#user-instructions")
    let prompt = `Generate a thirty minute or less ${userInstructions.value} recipe`
    let context = "You are a world renowned cheff.please provide a simple and concise recipe. provide recipe in basic HTML list format"
    let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(apiUrl).then(displayGeneratedRecipe)
  
}

let recipeForm = document.querySelector("#form-generator");
recipeForm.addEventListener("submit", generateRecipe);

