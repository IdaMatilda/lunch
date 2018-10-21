var quotes = [
  'Portal'
  'Matateljen'
  'WKB'
  'Sallad'

]

$(function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.lenght));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
$()
}
