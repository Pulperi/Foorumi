FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
    Api.getTopic($routeParams.id).success(function(topic) {
        $scope.topic = topic;
    }).error(function() {
        $location.path('/');
    });
});
