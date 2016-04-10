require('angular');

const app = angular.module('IdeaApp', []);
app.controller('StudentController', ['$http', function($http) {
  const route = 'http://localhost:3000';
  this.students = [];
  this.getStudents = function() {
    $http.get(route+'/students')
      .then((res) => {
        console.log(res.data.data);

        this.students = res.data.data;
      }, function(error) {
        console.error(error);
      })
  }
  this.createStudent = function(student) {
    $http.post(route+'/signup', student)
      .then((res) => {
        console.log(res);

        this.students.push(student);
        this.newStudent = {};
      }, function(error) {
        console.log(error);
      })
  }
  this.removeStudent = function(student) {
    $http.delete(route+'/'+student._id)
      .then((res) => {
        console.log(res);

        this.students = this.students.filter((s) => s._id != student._id);
      }, function(error) {
        console.log(error);
      })
  }
}])
