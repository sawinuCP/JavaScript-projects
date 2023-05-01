const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audionEl = document.getElementById("audio");


async function fetchAPI(word){
    // console.log(word);
    
    try {
        infoTextEl.style.display = "block";
        meaningContainerEl.style.display = "none"
        

        infoTextEl.innerHTML = `Search the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json());
        // console.log(result);    

        if(result.title){
            meaningContainerEl.style.display = "block"
            titleEl.innerText = word;
            meaningEl.innerText = "N/A";
            audionEl.src = "none";
        }
        else{
            meaningContainerEl.style.display = "block"
            infoTextEl.style.display = "none";
            audionEl.style.display = "inline-flex"
            titleEl.innerText = result[0].word
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
            audionEl.src = result[0].phonetics[0].audio;
        }

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