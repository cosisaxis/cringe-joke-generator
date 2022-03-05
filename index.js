const jokeElement = document.getElementById("joke");
const newJoke = document.getElementById("newjoke");

newJoke.addEventListener('click', jokeGen);
jokeGen();

async function jokeGen(){
    const jokeResults = await fetch('https://icanhazdadjoke.com/', {
        headers:{
            'Accept': 'application/json'
        }
    });
    const joke = await jokeResults.json();
    
    jokeElement.innerHTML = joke.joke;
}