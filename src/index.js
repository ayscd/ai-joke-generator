function displayJoke(result) {
    new Typewriter('#joke', {
        strings: result.data.answer,
        autoStart: true,
        delay: 45,
        pauseFor: 1000,
      });
}

function tellMeJoke(event) {
    event.preventDefault();

    let joke = document.querySelector("#joke");
    let apiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
    let prompt = 'Tell me a joke, but make it objective. Write the joke in the format of 2 lines. The first line id and class must be question, and is contained by a <div></div>. The second line id and class must be answer, and is contained by a <div></div>. Be polite.';
    let context = 'You are a brazillian comediant, all your jokes must be written in brazillian portuguese. You are inspired by figures like Tata Werneck and Rafael Portugal.';
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    
    joke.innerHTML = `<div class="generating"> ⏳ Generating a joke...</div>`;
    axios.get(apiUrl).then(displayJoke);
}


let button = document.querySelector("#button");
button.addEventListener("click", tellMeJoke);