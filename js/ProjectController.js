function ProjectController($scope) {
    $scope.projects = [
        new Project("calculator"),
        new Project("toDoList")
    ];
}

function Project(name) {
    this.name = name;

}