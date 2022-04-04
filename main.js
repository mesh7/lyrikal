const sapceButton = document.querySelector("#space");
const display = document.querySelector(".display");
function displayText(result) {
    keyType.keyTypeArea.value = keyType.keyTypeArea.value + result;
    sapceButton.onclick = () => {
        keyType.keyTypeArea.value += " ";
    };
}
