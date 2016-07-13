import angular from 'angular';

function faCurrency ($sce) {
  return function (number, icon) {
    return $sce.trustAsHtml(`<i class="fa fa-${icon}></i> ${number}`);
  };
}

export default angular.module('filters.faCurrency', [])
  .filter('faCurrency', faCurrency)
  .name;
