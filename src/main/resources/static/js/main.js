var app = angular.module("front-end", []);

app.service("mainService", mainService);
app.service("replaceServ", replaceService);
app.controller("mainCtrl", mainController);
app.controller("replaceCtrl", replaceCtrl);

function mainController($scope, mainService) {
    $scope.tekst = "Moja pierwsza apka";

    $scope.skladnikNumerJeden = 0;
    $scope.skladnikNumerDwa = 0;

    $scope.wynik = "";

    $scope.customSum = function () {
        mainService.customSumInService($scope.skladnikNumerJeden, $scope.skladnikNumerDwa).then(function (data) {
            $scope.wynik = data.data;
        })
    }

    $scope.customSub = function () {
        mainService.customSubInService($scope.skladnikNumerJeden, $scope.skladnikNumerDwa).then(function (data) {
            $scope.wynik = data.data;
        })
    }
}
function replaceCtrl($scope, replaceServ) {
    $scope.textToChange = "";
    $scope.chartToReplace = "";
    $scope.wynik = "";
    $scope.replaceChartInText = function () {
        replaceServ.customReplaceInBackend($scope.textToChange, $scope.chartToReplace).then(function (response) {
            $scope.wynik = response.data;
        })
    }

}


function mainService($http) {
    return {
        customSumInService: function (s1, s2) {
            return $http.get("/api/math/add/" + s1 + "/" + s2);
        },
        customSubInService: function (s1, s2) {
            return $http.get("/api/math/sub/" + s1 + "/" + s2);
        }
    }
}

function replaceService($http){
    return{
        customReplaceInBackend: function (text, char) {
            return $http.get("/api/text/change/" + text + "/" + char);
        },
        customReplaceInBackendPost: function (text, char) {
            return $http.post("/api/text/change/", {text: text, char: char});
        }
    }
}