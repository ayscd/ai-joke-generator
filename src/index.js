//let joke = document.querySelector("#joke");

function tellMeJoke(event) {
    event.preventDefault();

    let apiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
    let prompt = `Tell me a joke, but make it smart, objective and short. Write the joke in the format of 2 lines of HTML, the first line is the 'question' of the joke, the second line is the 'answer'. Be polite.`;
    let context = "You're a brazillian comediant, all your jokes must be written in brazillian portuguese. You are inspired by figures like 'Tata Werneck', 'Rafael Portugal', 'Mizael Alves'. Your humor is smart, and you're polite";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log(apiUrl);
    axios.get(apiUrl).then(displayJoke);
}


let button = document.querySelector("#button");
button.addEventListener("click", tellMeJoke);