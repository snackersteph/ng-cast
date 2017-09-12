angular.module('video-player')

.component('app', {

  // bindings: {
    // testVideos: '<'
  // },

  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (index) => {
      console.log('selectVideo called');
      this.currentVideo = this.videos[index];
    };

    this.searchResults = function() {};
  },

  templateUrl: 'src/templates/app.html'
});
