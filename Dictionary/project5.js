const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");


async function fetchAPI(word){
    // console.log(word);
    

    try {
        infoTextEl.style.display = "block";
        infoTextEl.innerHTML = `Search the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json());
        // console.log(result);    

    } catch (error) {
        console.log(error);  
    }  
};


inputEl.addEventListener("keyup" , function(e){
    // console.log(e.target.value);
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    }
});