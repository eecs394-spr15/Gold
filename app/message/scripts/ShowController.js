angular
  .module('message')
  .controller("ShowController", function ($scope, Message, supersonic) {
    $scope.message = Message;
    $scope.showSpinner = false;
    $scope.dataId = undefined;

    $scope.fullHeartURL = "http://i60.tinypic.com/10crg5k.png";
    $scope.halfHeartURL = "http://i57.tinypic.com/23vyzk5.png";
    $scope.emptyHeartURL ="http://i58.tinypic.com/2akg4mv.png";

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
      $scope.dataId = JSON.parse(values.id);

      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.message.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });