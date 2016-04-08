require('angular');

const app = angular.module('IdeaApp', []);
app.controller('IdeaController', ['$http', function($http) {
  const ideaRoute = 'http://localhost:3000/students';
  this.ideas = [];
  this.getIdeas = function() {
    $http.get('http://localhost:3000/students')
      .then((res) => {
        console.log(res.data.data);

        this.ideas = res.data.data;
      }, function(error) {
        console.error(error);
      })
  }
}])
