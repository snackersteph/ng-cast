angular.module('video-player')
  .component('videoListEntry', {

    bindings: {
      video: '<',
      selectVideo: '<'
    },

    controller: function() {
      // var entryCtrl = this;
      // entryCtrl.$onInit = function() {
      // console.log('on init');
      // console.log(entryCtrl);
      // };
      // this.testVideo = ;
      // debugger;
      // var ctrl = this;
      // var ctrl = this;
      // ctrl.test = 'string';
      // ctrl.clickedEntry = function() {
      // console.log(this);
      // ctrl.setVideoEntry();
      // };
      // console.log(this.testVideo);
      // this.testVideo = testVideo;
    },

    templateUrl: 'src/templates/videoListEntry.html'
  });
