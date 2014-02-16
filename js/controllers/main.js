'use strict';

angular.module('app')
  .controller('MainCtrl', function ($scope, $http) {

        $scope.getAnswer = function(){
            $scope.quote = 'О будущем мы ничего не знаем, кроме того, что оно будет отличаться от настоящего. Всякое предположение вполне может оказаться предрассудком';
            $scope.showQuote = true;
        }
        $scope.showAuthor = function(){
            $scope.state = 'show';
            console.log('asd')
        }
  });
