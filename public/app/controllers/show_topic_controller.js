FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
    Api.getTopic($routeParams.id).success(function(topic) {
        $scope.topic = topic;
        $scope.Messages = [];
        $scope.topic.Messages.forEach(function(message) {
            if(message.title !== "" && message.title !== null) 
                $scope.Messages.push(message);
        });
    }).error(function() {
        $location.path('/');
    });
    
    $scope.newMessage = { title: "", content: ""};
    
    $scope.addMessage = function() {
        if ($scope.newMessage.title !== "" && $scope.newMessage.content !== "")
            Api.addMessage($scope.newMessage, $routeParams.id).success(function (message) {
                $location.path('/messages/' + message.id); 
            });
    };
});
