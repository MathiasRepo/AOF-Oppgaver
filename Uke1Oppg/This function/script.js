const input = document.getElementById("textInput");
const output = document.getElementById("outputDiv");

function printText() {
    const input = document.getElementById("textInput").value;

    output.innerHTML += /*HTML*/ `
        <li>${input}</li>
    `;
    
}