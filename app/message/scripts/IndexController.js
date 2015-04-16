angular
  .module('message')
  .controller("IndexController", function ($scope, Message, supersonic) {
    $scope.messages = null;
    $scope.showSpinner = true;
    $scope.myMessages = [];
    $scope.phoneNumber = localStorage.getItem("user-phone");
    $scope.keyword = "";

    $scope.filterFunction = function(element) {
      return  (element.date.match($scope.keyword) ? true : false)
      //||      (element.phone.match($scope.keyword) ? true : false)
      // Removing this phone search functionality. A user's feed should already consist of only their phone numbers.
      ||      (element.text.toLowerCase().match($scope.keyword.toLowerCase()) ? true : false)
      ||      (parseInt(element.rating).match(parseInt($scope.keyword)) ? true : false);
    };

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