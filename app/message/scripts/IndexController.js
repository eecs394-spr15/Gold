angular
  .module('message')
  .controller("IndexController", function ($scope, Message, supersonic) {
    $scope.messages = null;
    $scope.showSpinner = true;
    $scope.phoneNumber = localStorage.getItem("user-phone");

    Message.all().whenChanged( function (messages) {
        $scope.$apply( function () {
          $scope.messages = messages;
          $scope.showSpinner = false;
        });
    });
  });