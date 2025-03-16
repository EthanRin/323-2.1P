document.getElementById("submit").addEventListener("click", async function() {
    console.log("Getting quote");
    try{
        const response = await fetch('/quotes'); // Fetch random quote from server
        const data = await response.json();
        document.getElementById("quote").textContent = data.randQuote;
    } catch(err) {
        console.log("An error has occurred: ", err);
    }
});
