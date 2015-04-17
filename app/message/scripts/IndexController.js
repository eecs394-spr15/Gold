angular
  .module('message')
  .controller("IndexController", function ($scope, Message, supersonic) {
    $scope.messages = null;
    $scope.showSpinner = true;
    $scope.myMessages = [];
    $scope.phoneNumber = localStorage.getItem("user-phone");
    $scope.keyword = "";
    $scope.fullHeartURL = "http://i60.tinypic.com/10crg5k.png";
    $scope.halfHeartURL = "http://i57.tinypic.com/23vyzk5.png";
    $scope.emptyHeartURL ="http://i58.tinypic.com/2akg4mv.png";
    $scope.searchByMoodRatingLowerBound =0;
    $scope.searchByMoodRatingUpperBound =5;

    $scope.filterFunction = function(element) {
      return  ((element.date.match($scope.keyword) ? true : false)
      ||      (element.text.toLowerCase().match($scope.keyword.toLowerCase()) ? true : false))
      && (element.rating>=$scope.searchByMoodRatingLowerBound) && (element.rating<=$scope.searchByMoodRatingUpperBound ) ;
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

