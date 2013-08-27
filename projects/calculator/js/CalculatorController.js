function CalculatorController($scope) {
    $scope.inputs= [
        [1,2,3,"+"],
        [4,5,6,"-"],
        [7,8,9,"*"],
        [".",0,"","/"]
    ];

    var operators = ["+","-","*","/"];

    $scope.displayValue= "";
    $scope.add = function(value){

        if(operators.indexOf(value)>-1 && operators.indexOf($scope.displayValue.slice(-1))>-1) {
            $scope.deleteLast();
        }
        $scope.displayValue += value;
    };

    $scope.solve = function() {
        $scope.displayValue = "" + eval($scope.displayValue);
    };

    $scope.clean = function() {
        $scope.displayValue= "";
    };

    $scope.deleteLast = function() {
        $scope.displayValue = $scope.displayValue.slice(0,-1);
    };
}