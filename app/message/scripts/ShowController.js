angular
  .module('message')
  .controller("ShowController", function ($scope, Message, supersonic) {
    $scope.message = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Message.find($scope.dataId).then( function (message) {
        $scope.$apply( function () {
          $scope.message = message;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.message.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });