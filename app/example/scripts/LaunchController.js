angular
  .module('example')
  .controller('LaunchController', function($scope, supersonic, $http) {

    $scope.navbarTitle = "Welcome";
    $scope.list = [];
    //$http.post("2a80d406.ngrok.com/users/new?phone=8189836911"});

    $scope.text = "";
    if(localStorage.getItem("user-phone")) {
		supersonic.ui.initialView.dismiss();
	}; //change later

    $scope.submit = function() {
        if ($scope.text) {
          //$scope.list.push(this.text);
          //$scope.text = '';
          localStorage.setItem("user-phone", $scope.text);
          
          $scope.phoneNumber = localStorage.getItem("user-phone");
          $scope.urltest = 'https://warm-ravine-7743.herokuapp.com/users/new?phone='+$scope.phoneNumber.toString();
            $http({
              method:"POST",
              url:$scope.urltest,
              headers: {'Content-Type' : 'form-data'}
              }
            ).success(function(){alert("Check your SMS inbox for instructions");
        }).error(function(){alert("Failed to connect to server");});

        }

      };

      $scope.validate = function(){

      }
  });