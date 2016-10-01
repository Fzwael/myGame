/**
 * Created by Fzwael on 26/09/16.
 */
angular.module('mainApp')
    .controller('mainController', function ($scope , $ionicModal) {
        console.log("MAIN CONTROLLER");


        $scope.openModal = function(animation) {
            $ionicModal.fromTemplateUrl('pause-modal', {
                scope: $scope,
                animation: animation
            }).then(function(modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });

    });