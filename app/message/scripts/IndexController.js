angular
  .module('message')
  .controller("IndexController", function ($scope, Message, supersonic) {
    $scope.messages = null;
    $scope.showSpinner = true;

    Message.all().whenChanged( function (messages) {
        $scope.$apply( function () {
          $scope.messages = messages;
          $scope.showSpinner = false;
        });
    });
  });