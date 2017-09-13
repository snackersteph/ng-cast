angular.module('video-player')
  .service('youTube', function($http) {
    // TODO
    this.searchYouTube = function(searchQuery, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          q: searchQuery,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: true,
          type: 'video',
          maxResults: 5
        }
      }).then(function successCallback(response) {
        console.log('Success', response);
        //debugger;
        callback(response.data.items);
      }, function errorCallback(response) {
        console.log('Failure');
        debugger;
      });
    };

    //this.search = function () {};

  });
