$(document).ready(function() {
  $('select').on('change', function() {
    $('.container').empty();
    let url =
      'https://api.nytimes.com/svc/topstories/v2/' +
      $('select').val() +
      '.json';
    url +=
      '?' +
      $.param({
        'api-key': '0751ffff01d7a70710354972fa0ad4a9'
      });
    $.ajax({
      url: url,
      method: 'GET'
    })
      .done(function(result) {
        $('.logo').animate({ height: '100px' }, 1250);
        let i = 0;
        let AddArticle = 0;

        for (i = 0; i < result.results.length && AddArticle < 12; i++) {
          let currentResult = result.results[i];
          if (currentResult.multimedia.length !== 0) {
            AddArticle++;
            let title = result.results[i].abstract;
            let articleUrl = result.results[i].url;
            let imageUrl = result.results[i].multimedia[4].url;

            $('title').append(result.results[i].abstract);
            $('.container')
              .append(
                '<div class="articlecontainer"><a href="' +
                  articleUrl +
                  '" class="link"><h1 class="summary">' +
                  title +
                  '</h1> </a></div>'
              )
              .hide()
              .fadeIn(1000);
            $('.articleContainer')
              .last()
              .css('background-image', 'url(' + imageUrl + ')');
          }
        }
      })
      .fail(function(err) {
        throw err;
      });
  });
});
