animalShelter.controller('AnimalCtrl', function AnimalCtrl($scope, AnimalsFactory) {
  $scope.animals = AnimalsFactory.animals;

    $scope.addAnimal = function() {
      var name = $scope.animalName;
      var type = $scope.animalType;
      AnimalsFactory.addAnimal(name, type);
      $scope.animalName = null;
      $scope.animalType = null;
    };
});
