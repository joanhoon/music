(function (angular) {
    angular
        .module("music.directives", [])
        .directive("xmNav", ["$location", function ($location) {
            return {
                templateUrl: "/common/directives/xmNav.html",
                link: function (scope, element, attr) {
                    scope.$location = $location;

                    scope.$watch("$location.url()", function (newValue, oldValue) {
                        var lis = element.find("li");
                        var divs = element.find("div");
                        divs.eq(2).removeClass("f-hide")
                        divs.eq(4).addClass("f-hide")
                        //排他操作
                        for (var i = 0; i < lis.length; i++) {
                            lis.eq(i).find("a").removeClass("z-slt").find("sub").removeClass("cor");

                        }

                        for (var i = 0; i < lis.length; i++) {
                            var li = lis.eq(i);

                            var a = li.find("a");

                            //如果当前li中的a标签的连接是当前页面的连接
                            //就将当前的li加上active
                            if (a.attr("href").indexOf(newValue) != -1) {
                                a.addClass("z-slt").find("sub").addClass("cor");
                                if (a.attr("href") == "#/home_page") {

                                    divs.eq(2).addClass("f-hide")
                                    divs.eq(4).removeClass("f-hide")
                                }

                            }

                        }





                    })

                }
            }
        }])
})(angular)