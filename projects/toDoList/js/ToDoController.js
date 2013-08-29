function ToDoController($scope, $localStorage) {


    $scope.toDoList =$localStorage.toDoList || [];
    $scope.toDoInput = "";

    $scope.add = function () {
        var toDoItem = new ToDoItem($scope.toDoInput);
        $scope.toDoList.push(toDoItem);
        $scope.toDoInput = "";
        updateStorage();
    };

    $scope.toggleDone = function (toDoItem) {
        toDoItem.done = !toDoItem.done;
        updateStorage();
    };

    $scope.archive = function () {
        $scope.toDoList = $scope.toDoList.filter(function (toDoItem) {
            return !toDoItem.done;
        });
        updateStorage();
    };

    var updateStorage = function(){
        $localStorage.toDoList= $scope.toDoList;
    }
}

function ToDoItem(text) {
    this.text = text;
    this.done = false;
}
