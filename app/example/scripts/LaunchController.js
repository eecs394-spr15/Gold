angular
  .module('example')
  .controller('LaunchController', function($scope, supersonic) {

    $scope.navbarTitle = "Welcome";
    $scope.list = [];

    if(localStorage.getItem("user-phone")) {
		supersonic.ui.initialView.dismiss();
	};

    $scope.submit = function() {
        if ($scope.text) {
          //$scope.list.push(this.text);
          //$scope.text = '';
          localStorage.setItem("user-phone", $scope.text);
        }

      };
  });