// write here the optimal jQuery code as required in the statemens

// Botones Aparecer y Desaparecer
$("nav > h2").click(function () {
  let titulo = $(this).text();
  $(`h2:contains(${titulo.toUpperCase()})`).parent().slideToggle(1000);
});

// Fotos
$("main > section:nth-child(even)").dblclick(function () {
  let titulo = $(this).children("h2").text();
  let imagen = `images/${titulo.toLowerCase()}.jpg`;
  $(this).append(
    `<div> <img src='${imagen}' alt='${titulo}'> <img src='./images/cross.png' alt='Cross'> </div>`
  );
});

$("main > section:nth-child(odd)").mouseenter(function () {
  let titulo = $(this).children("h2").text();
  let imagen = `images/${titulo.toLowerCase()}.jpg`;
  $(this).append(
    `<div> <img src='${imagen}' alt='${titulo}'> <img src='./images/cross.png' alt='Cross'> </div>`
  );
});

$("main > section:nth-child(odd)").mouseleave(function () {
    $(this).find('div').remove()
})

$(document).on("click", "section > div img:last-child", function () {
    $(this).parent().remove()
})
