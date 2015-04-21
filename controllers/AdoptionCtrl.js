animalShelter.controller('AdoptionCtrl', function AdoptionCtrl($scope, AnimalsFactory) {
  $scope.animals = AnimalsFactory.animals;

  $scope.grantAdoption = function(item) {
    AnimalsFactory.grantAdoption(item);
  };

  $scope.rescindAdoption = function(item) {
    AnimalsFactory.rescindAdoption(item);
  };
});
