animalShelter.factory('AnimalsFactory', function AnimalsFactory() {
  var factory = {};
  factory.animals = [];

  factory.addAnimal = function(name, type) {
    this.animals.push({name: name, type: type, adopted: false});
  };

  factory.grantAdoption = function(animal) {
    animal.adopted = true;
  };

  factory.rescindAdoption = function(animal) {
    animal.adopted = false;
  };

  return factory;
});
