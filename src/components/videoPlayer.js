angular.module('video-player')

  .component('videoPlayer', {

    bindings: {
      video: '<'
    },

    controller: function() {
      // this.$onInit = function () {
      //   console.log(this.videoPlay);
      // };
      // this.getIFrameSrc = function(videoId) {
      //   return 'https://www.youtube.com/embed/' + videoId;
      // };
      // this.video = {};
    },

    templateUrl: 'src/templates/videoPlayer.html'
  });
