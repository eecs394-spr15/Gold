angular
  .module('message')
  .controller("NewController", function ($scope, Message, supersonic) {
    $scope.message = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newmessage = new Message($scope.message);
      newmessage.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });