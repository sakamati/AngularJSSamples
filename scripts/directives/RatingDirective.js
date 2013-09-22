
var ratingDirectiveModule = angular.module("ratingModule.directive", []);

ratingDirectiveModule.directive("myRating", function () {
    return {
        replace: true,
        template: "<div class='rating'><span ng-repeat='i in starList' class='off' title='{{i}}/{{max}}'></span></div>",
        scope: {
            rating: '=',
            max: '='
        },
        link: function (scope, element, attrs) {
            scope.starList = [];
            for (var i = 1; i <= scope.max; i++) {
                scope.starList.push(i);
            }
            scope.$watch('rating', function () {
                updateRating();
            });
            $(element).on('mouseover', 'span', function () {
                $(this).siblings().removeClass('on');
                $(this).prevAll().addClass('on');
                $(this).addClass('on');
                event.stopPropagation();
            });
            $(element).on('mouseleave', function () {
                $(this).children().removeClass('on');
                updateRating();
                event.stopPropagation();
            });
            $(element).on('click', 'span', function () {
                var spnIndex = $(this).index() + 1;
                scope.$apply(function () {
                    scope.rating = spnIndex;
                });
            });

            function updateRating() {
                $(element).children().removeClass('on');
                $(element).children().each(function (index) {
                    if (index < scope.rating) $(this).addClass('on');
                });
            }

            updateRating();
        }
    };
});