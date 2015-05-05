FoorumApp.controller('UsersController', function($scope, $location, Api){
    
    $scope.errorMessage = null;
    $scope.user = { username: "", password: "" };
    $scope.newUser = { username: "", password: "" };
    
    $scope.passwordConfirm = "";
    
    $scope.login = function() {
        // Toteuta kontrolleri tähän
        if ($scope.user && $scope.user.username !== "" && $scope.user.password !== "")
            Api.login($scope.user)
            .success(function() {
                console.log('Login success, redirecting to root!');
                $location.path('/');
            })
            .error(function() {
                console.log('Login failed! Adding error message.');
                $scope.errorMessage = 'Wrong username and/or password!';
            });
    };
    
    $scope.register = function() {
        if ($scope.newUser && $scope.newUser.username !== "" && $scope.newUser.password !== "" && $scope.passwordConfirm === $scope.newUser.password)
            Api.register($scope.newUser)
            .success(function() {
                console.log('Registered success, redirecting to root!');
                $location.path('/');
            })
            .error(function(error) {
                $scope.errorMessage = error.error;
            });
    };
    
});
