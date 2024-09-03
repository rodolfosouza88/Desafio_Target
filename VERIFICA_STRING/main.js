document.getElementById("letterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const inputString = document.getElementById("stringInput").value;
    const resultElement = document.getElementById("result");
    const detailsElement = document.getElementById("details");

    const { containsA, count } = checkLetterA(inputString);
    resultElement.textContent = containsA ? 
        `A string contém a letra 'A' ou 'a'.` : 
        `A string não contém a letra 'A' ou 'a'.`;
    detailsElement.textContent = `Ocorrências: ${count}`;
});

function checkLetterA(str) {
    const count = (str.match(/a/gi) || []).length;
    return { containsA: count > 0, count };
}
