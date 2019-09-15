const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {

  $.getJSON(
    dataURL,
    function (data) {
      handleData(data);
    }
  )
}

function handleData(data) {

  const formArray = $(".form-control");

  // Разбираем массив в строку
  let text = "";
  for (let i = 0; i < data["text"].length; i++) {
    text = text + data["text"][i] + " ";
  }

  // Заменяем значения
  for (let i = 1; i <= formArray.length; i++) {
    varReplace = "{var" + i + "}";
    text = text.split(varReplace).join(formArray[i - 1].value)
  }

  text = text.replace("{speach}", formArray[formArray.length - 1].value);

  $("#result").text(text);

}

function init() {
  $("#button-fetch").click(handleButton);
}

$(document).ready(init);
