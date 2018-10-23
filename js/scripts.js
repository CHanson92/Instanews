// Built by LucyBot. www.lucybot.com
var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
url += '?' + $.param({
  'api-key': '73e3bb94a859478c81baf1a5a4566dae'
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  for (let i=0; i < 12; i++) {
  let title = result.results[i].abstract;
  let articleUrl = result.results[i].url;
  let imageUrl = result.results[i].multimedia[4].url;

  $('title').append(result.results[i].abstract);
  $('.container').append('<div class="articlecontainer"><a href="'+ articleUrl +'" class="link"><h1 class="summary">'+ title +'</h1> </a></div>');
  $('.articleContainer').last().css('background-image', 'url(' + imageUrl+')');
}
}).fail(function(err) {
  throw err;
});


