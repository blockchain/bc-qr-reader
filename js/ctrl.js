var uploadQR = angular.module('uploadQR', []);

uploadQR.controller('Webcam', function($scope){
  $scope.processURLfromQR = $scope.cameraRequested = true;

});