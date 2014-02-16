angular.module('app')
    .directive("textillate", [ function () {
        return {
            restrict: 'A',
            scope:{
                text:'=',
                run:'=',
                callback: '&'
            },
            template:'<div id="tlt" ng-show="run">{{text}}</div>',
            link: function (scope, element, attrs) {
                scope.$watch('run',function(){
                    if(scope.run){
                        $('#tlt').textillate({
                            in: { effect: 'flipInX',
                                delayScale: 1,
                                delay: 30
                            }
                        });
                    }
                })
                $('#tlt').on('inAnimationEnd.tlt', function () {
                    scope.$apply(
                        function() {
scope.callback();
                        }
                    );
                });
            }
        };
    }]);