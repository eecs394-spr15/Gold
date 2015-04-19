angular
  .module('message')
  .controller("IndexController", function ($scope, Message, supersonic) {
    $scope.messages = null;
    $scope.showSpinner = false;
    $scope.myMessages = [];
    $scope.phoneNumber = localStorage.getItem("user-phone");
    $scope.keyword = "";

    $scope.searchByMoodRatingLowerBound =0;
    $scope.searchByMoodRatingUpperBound =5;

    $scope.searchByDateLowerBound = new Date('1995-12-17T03:24:00');
    $scope.searchByDateUpperBound = new Date();

    $scope.bool = false;
    $scope.boollist =[];
    $scope.filterFunction = function(element) {
        var messageDate = new Date(element.date);
        messageDate.getUTCFullYear(); //1995-12-17
                                      //2005-4-20
                                      //2005-5-20
                                      $scope.boollist.push(messageDate.getTime()>=$scope.searchByDateLowerBound.getTime() && messageDate.getTime()<=$scope.searchByDateUpperBound.getTime());
      return  ((element.date.match($scope.keyword) ? true : false)
      ||      (element.text.toLowerCase().match($scope.keyword.toLowerCase()) ? true : false))
      && (element.rating>=$scope.searchByMoodRatingLowerBound) && (element.rating<=$scope.searchByMoodRatingUpperBound )
      && messageDate.getTime()>=$scope.searchByDateLowerBound.getTime() && messageDate.getTime()<=$scope.searchByDateUpperBound.getTime();
      //&& (messageDate.getTime()>=$scope.searchByDateLowerBound.getTime()) && (messageDate.getTime()<=$scope.searchByDatUpperBound.getTime());
    }

    $scope.changeLowerBound =function(){
      if($scope.searchByMoodRatingLowerBound>$scope.searchByMoodRatingUpperBound ){
        $scope.searchByMoodRatingUpperBound = $scope.searchByMoodRatingLowerBound;
      }   
    }
    $scope.changeUpperBound =function(){
      if($scope.searchByMoodRatingLowerBound>$scope.searchByMoodRatingUpperBound ){
         $scope.searchByMoodRatingLowerBound=$scope.searchByMoodRatingUpperBound ;
      }   
    }
    $scope.underline = function(value){
      if(value == true) return {"text-decoration":"underline"};
      else return {"text-decoration":"none"};
    }





    Message.all().whenChanged( function (messages) {
        $scope.$apply( function () {
          $scope.messages = messages;
          $scope.showSpinner = false;
          $scope.myMessages =[];
           for(var i=0;i<messages.length;i++){
            if($scope.messages[i]['phone']===$scope.phoneNumber)
               $scope.myMessages.push($scope.messages[i]);
          }
        });
    });




    $scope.fullHeartURL = "http://i60.tinypic.com/10crg5k.png";
    $scope.halfHeartURL = "http://i57.tinypic.com/23vyzk5.png";
    $scope.emptyHeartURL ="http://i58.tinypic.com/2akg4mv.png";
  });

