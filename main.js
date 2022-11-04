function createGame (player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" title = "Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" title = "Bandeira do ${player2}">
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>
          ${date} <span>${day}</span>
      </h2>
      <ul>
        ${games}
      </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =

  createCard("20/11","domingo",
    createGame("Qatar", "13:00", "Ecuador")) +

  createCard("21/11","segunda",
    createGame("England", "10:00", "Iran") +
    createGame("Senegal", "13:00", "Netherlands") +
    createGame("USA", "16:00", "Wales")) +

  createCard("22/11","terça-feira",
    createGame("Argentina", "07:00", "SaudiArabia") +
    createGame("Denmark", "10:00", "Tunisia") +
    createGame("Mexico", "13:00", "Poland") +
    createGame("France", "16:00", "Australia")) +

  createCard("23/11","quarta-feira",
    createGame("Morocco", "07:00", "Croatia") +
    createGame("Germany", "10:00", "Japan") +
    createGame("Spain", "13:00", "CostaRica") +
    createGame("Belgium", "16:00", "Canada")) +

  createCard("24/11","quinta-feira",
    createGame("Switzerland", "07:00", "Cameroon") +
    createGame("Uruguay", "10:00", "SouthKorea") +
    createGame("Portugal", "13:00", "Ghana") +
    createGame("Brazil", "16:00", "Serbia")) +

  createCard("25/11","sexta-feira",
    createGame("Wales", "07:00", "Iran") +
    createGame("Qatar", "10:00", "Senegal") +
    createGame("Netherlands", "13:00", "Ecuador") +
    createGame("England", "16:00", "USA")) +

  createCard("26/11","sábado",
    createGame("Tunisia", "07:00", "Australia") +
    createGame("Poland", "10:00", "SaudiArabia") +
    createGame("France", "13:00", "Denmark") +
    createGame("Argentina", "16:00", "Mexico")) +

  createCard("27/11","domingo",
    createGame("Japan", "07:00", "CostaRica") +
    createGame("Belgium", "10:00", "Morocco") +
    createGame("Croatia", "13:00", "Canada") +
    createGame("Spain", "16:00", "Germany")) +

  createCard("28/11","segunda-feira",
    createGame("Cameroon", "07:00", "Serbia") +
    createGame("SouthKorea", "10:00", "Ghana") +
    createGame("Brazil", "13:00", "Switzerland") +
    createGame("Portugal", "16:00", "Uruguay")) +

  createCard("29/11","terça-feira",
    createGame("Ecuador", "12:00", "Senegal") +
    createGame("Netherlands", "12:00", "Qatar") +
    createGame("Iran", "16:00", "USA") +
    createGame("Wales", "16:00", "England")) +

  createCard("30/11","quarta-feira",
    createGame("Tunisia", "12:00", "France") +
    createGame("Australia", "12:00", "Denmark") +
    createGame("Poland", "16:00", "Argentina") +
    createGame("SaudiArabia", "16:00", "Mexico")) +

  createCard("01/12","quinta-feira",
    createGame("Croatia", "12:00", "Belgium") +
    createGame("Canada", "12:00", "Morocco") +
    createGame("Japan", "16:00", "Spain") +
    createGame("CostaRica", "16:00", "Germany")) +

  createCard("02/12","sexta-feira",
    createGame("SouthKorea", "12:00", "Portugal") +
    createGame("Ghana", "12:00", "Uruguay") +
    createGame("Serbia", "16:00", "Switzerland") +
    createGame("Cameroon", "16:00", "Brazil"))
