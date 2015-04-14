angular
  .module('message')
  .controller("IndexController", function ($scope, Message, supersonic) {
    $scope.messages = null;
    $scope.showSpinner = true;
    $scope.myMessages = [];
    $scope.phoneNumber = localStorage.getItem("user-phone");

    Message.all().whenChanged( function (messages) {
        $scope.$apply( function () {
          $scope.messages = messages;
          $scope.showSpinner = false;
           for(var i=0;i<messages.length;i++){
            if($scope.messages[i]['phone']===$scope.phoneNumber)
               $scope.myMessages.push($scope.messages[i]);
          }
        });
    });
  });