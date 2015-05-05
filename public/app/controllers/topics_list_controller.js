FoorumApp.controller('TopicsListController', function($scope, $location, Api){
    // Toteuta kontrolleri tähän
    Api.getTopics().success(function(topics) {
        $scope.topics = [];
        topics.forEach(function(topic) {
            if (topic.name !== null && topic.description !== null) {
                $scope.topics.push(topic);
            }
        });
    });
    
    $scope.newTopic = { name: "", description: ""};
    
    $scope.addTopic = function() {
        if ($scope.newTopic.name !== "" && $scope.newTopic.description !== "")
            Api.addTopic($scope.newTopic).success(function(topic) {
               $scope.topics.push(topic); 
               $location.path('/topics/' + topic.id);
            });
    };
    
});
