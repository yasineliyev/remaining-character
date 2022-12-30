var message,
  result,
  character = 150,
  characterLength;
message = document.querySelector("#message");
result = document.querySelector("#result");
message.onkeydown = characterControl;
message.onkeyup = characterControl;

function characterControl() {
  characterLength = this.value.length;
  if (character >= characterLength) {
    var lastLength = character - characterLength;
    result.textContent = lastLength + " characters left";
  } else {
    this.value = this.value.substr(0, character);
  }
}
