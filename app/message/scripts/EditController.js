angular
  .module('message')
  .controller("EditController", function ($scope, Message, supersonic) {
    $scope.message = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Message.find(steroids.view.params.id).then( function (message) {
      $scope.$apply(function() {
        $scope.message = message;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.message.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
