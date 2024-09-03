document.getElementById("fibonacciForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const num = parseInt(document.getElementById("numberInput").value);
    const resultElement = document.getElementById("result");
    const sequenceElement = document.getElementById("sequence");

    const { resultMessage, sequence } = isFibonacci(num);
    resultElement.textContent = resultMessage;
    sequenceElement.textContent = sequence;
});

function isFibonacci(num) {
    let sequence = "Sequência de Fibonacci: 0, 1";
    
    if (num === 0) {
        return { resultMessage: `0 pertence à sequência de Fibonacci.`, sequence };
    } else if (num === 1) {
        return { resultMessage: `1 pertence à sequência de Fibonacci.`, sequence: `${sequence}, 1` };
    }

    let prev = 0;
    let curr = 1;

    while (curr < num) {
        let next = prev + curr;
        sequence += `, ${next}`;
        prev = curr;
        curr = next;
    }

    if (curr === num) {
        return { resultMessage: `${num} pertence à sequência de Fibonacci.`, sequence };
    } else {
        return { resultMessage: `${num} não pertence à sequência de Fibonacci.`, sequence };
    }
}
