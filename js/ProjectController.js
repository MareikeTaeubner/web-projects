function ProjectController($scope) {
    $scope.projects = [
        new Project("calculator", ["angularjs"]),
        new Project("toDoList", ["jquery", "angularjs"])
    ];
}

function Project(name, types) {
    this.name = name;
    this.types = types;
}