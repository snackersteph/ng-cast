angular.module('video-player')
.component('videoList', {

  bindings: {
    videos: '<',
    selectVideo: '<'
  },

  controller: function() {
    // var videoListCtrl = this;
    // this.testVideos = window.exampleVideoData;
    // debugger;
    // this.onClick = function() {
    //   console.log(this.video);
    // };
    // var ctrl = this;
    // this.onClick = (index) => {
      // console.log('setVideoList Called');
      // console.log(passedVideo);
    this.onClick = function(index) {
      this.selectVideo(index);
    };
    // ctrl.setVideo = function () {
    //   console.log('setVideo videoList called');
    // };
  },

  templateUrl: 'src/templates/videoList.html'

});


