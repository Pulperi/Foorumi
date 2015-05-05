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
                console.log('Kirjautuminen onnistui!');
                $location.path('/');
            })
            .error(function() {
                console.log('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
                $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
            });
    };
    
    $scope.register = function() {
        if ($scope.newUser && $scope.newUser.username !== "" && $scope.newUser.password !== "" && $scope.passwordConfirm === $scope.newUser.password)
            Api.register($scope.newUser)
            .success(function() {
                console.log('Kirjautuminen onnistui!');
                $location.path('/');
            })
            .error(function(error) {
                $scope.errorMessage = error.error;
            });
    };
    
});
