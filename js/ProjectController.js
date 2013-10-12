var app = angular.module("rhayene-projects", ["ngStorage"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "index.html"
        })
        .when('/projects/:projectName', {
            action: 'project' // not used yet - useful anyway with other routes later on
        })
        .otherwise({
            redirectTo: "/"
        });
});

function ProjectController($scope, $route, $routeParams) {
    $scope.projects = {
        calculator: new Project("calculator"),
        toDoList: new Project("toDoList"),
        mastermind: new Project("mastermind")
    };

    $scope.currentProject = null;

    $scope.$on(
        "$routeChangeSuccess",
        function ($currentRoute, $previousRoute) {
            // Update the rendering.
            var action = $route.current.action;
            if (action === 'project') {
                var projectName = ($routeParams.projectName || "");
                $scope.currentProject = $scope.projects[projectName];
            }
        }
    );
}

function Project(name) {
    this.name = name;
    this.url = "projects/" + name + "/fragment.html";
}