import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate'

import routing from '../config/router.js';

import '../style/app.scss';
import 'bootstrap/dist/css/bootstrap.css';

import collapse from 'angular-ui-bootstrap/src/collapse';
import modal from 'angular-ui-bootstrap/src/modal';

import appCtrl from './app.ctrl';
import events from './events';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

angular.module('app', [uirouter, ngAnimate, collapse, modal, events])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', appCtrl);

export default 'app';
