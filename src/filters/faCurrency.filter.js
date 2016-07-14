import angular from 'angular';

function faCurrency () {
  return (number, icon) => {
    return `<span><i class="fa fa-${icon}"></i>${number}</span>`;
  };
}

export default angular.module('filters.faCurrency', [])
  .filter('faCurrency', faCurrency)
  .name;
