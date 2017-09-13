angular.module('video-player')

  .component('app', {

    controller: function(youTube) {
      
      this.$onInit = function () {};

      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      
      // this.searchYoutube = function (querySelector) {
      //   var results = youTube.searchYouTube(querySelector);
      // };

      this.selectVideo = (url) => {
        console.log(url);

        for ( var i = 0; i < this.videos.length; i++ ) {
          if ( this.videos[i].id.videoId === url ) {
            this.currentVideo = this.videos[i];
          }
        }
      };

      this.searchResults = function(resultsArray) {
        console.log(resultsArray);
        this.videos = resultsArray;
        this.currentVideo = resultsArray[0];
      }.bind(this);
    },

    templateUrl: 'src/templates/app.html'
  });
