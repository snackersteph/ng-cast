angular.module('video-player')

  .component('search', {

    bindings: {
      searchYoutube: '<',
      search: '<'
    },

    controller: function(youTube) {
      this.query = '';
      console.log(youTube);
      // this.searchYoutube = () => {
      //   console.log('Search Clicked')
      // };

      this.result = function() {
        console.log(youTube);
        youTube.searchYouTube(this.query, this.search);
      };

    },
    
    templateUrl: 'src/templates/search.html'
  });
