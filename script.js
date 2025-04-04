
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function generateQuote() {
    try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();

        if (data) {
            quoteText.textContent = data.quote ? data.quote : "Citation non disponible";
            authorText.textContent = data.author ? `- ${data.author}` : "- Auteur inconnu";
        } else {
            quoteText.textContent = "Aucune citation trouvée.";
            authorText.textContent = "";
        }
    } catch (error) {
        quoteText.textContent = "Une erreur est survenue. Réessaie !";
        authorText.textContent = "";
    }
}

newQuoteBtn.addEventListener("click", generateQuote);
generateQuote();
