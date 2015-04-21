animalShelter.factory('AnimalsFactory', function AnimalsFactory() {
  var factory = {};
  factory.animals = [];

  factory.addAnimal = function(name, type) {
    this.animals.push({name: name, type: type});
  };

  return factory;
});
