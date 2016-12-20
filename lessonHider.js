angular.module('directivePractice').directive('lessonHider', function () {
    return {
        restrict: 'E',
        templateUrl: 'lessonHider.html',
        scope: {
            lesson: '=',
            dayAlert: '&',
            check: '&'
        },
        link: function (scope, element, attributes) {
            scope.getSchedule.then(function (res) {
                scope.schedule = res.data;
                for (var i = 0; i < scope.schedule.length; i++) {
                    if (scope.lesson === scope.schedule[i].lesson) {
                        element.wrap("<strike #id='test'>");
                        scope.lessonDay = scope.schedule[i].weekday;
                        return;
                    }
                }
            });
            
        },
        controller: function ($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();
        }
    }
});