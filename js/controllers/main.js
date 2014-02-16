'use strict';

angular.module('app')
  .controller('MainCtrl', function ($scope, $http) {

        $scope.quote = {};
        $scope.getAnswer = function(){
            $scope.quote.text = 'О будущем мы ничего не знаем, кроме того, что оно будет отличаться от настоящего. Всякое предположение вполне может оказаться предрассудком';
            $scope.quote.name = 'Луис Борхес';
            $scope.quote.book = 'Книга Песка 1975 г.'
            $scope.showQuote = true;
        }
        $scope.showAuthor = function(){
            $scope.state = 'show';
            console.log('asd')
        }
  });
