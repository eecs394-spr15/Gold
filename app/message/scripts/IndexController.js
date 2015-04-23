angular
    .module('message')
    .controller("IndexController", function ($scope, Message, supersonic) {
      $scope.messages = null;
      $scope.showSpinner = true;
      $scope.myMessages = [];
      $scope.phoneNumber = localStorage.getItem("user-phone");
      $scope.keyword = "";

      $scope.searchByMoodRatingLowerBound =0;
      $scope.searchByMoodRatingUpperBound =5;

      $scope.searchByDateLowerBound = new Date('2015-01-01T03:24:00');
      $scope.searchByDateUpperBound = new Date();
      $scope.searchByDateUpperBound.setUTCFullYear(2016);

      $scope.bool = false;
      $scope.boolList =[];

      $scope.filterFunction = function(element) {
        $scope.boolList.push();
        var messageDate = new Date(element.date);
        var localBool =((element.date.match($scope.keyword) ? true : false)
            ||      (element.text.toLowerCase().match($scope.keyword.toLowerCase()) ? true : false))
            && (element.rating>=$scope.searchByMoodRatingLowerBound) && (element.rating<=$scope.searchByMoodRatingUpperBound )
            && messageDate.getTime()>=$scope.searchByDateLowerBound.getTime() && messageDate.getTime()<=$scope.searchByDateUpperBound.getTime();
        $scope.bool = $scope.bool||localBool;
        return  localBool;
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
        if(value == true) return {"background-color":"#25c725","color":"#fff"};
        else return {"background-color":"#fff"};
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
        $scope.bambooURL = "http://i61.tinypic.com/2j0b82c.png";
  });

