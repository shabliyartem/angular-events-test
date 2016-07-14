import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate'
import ngSanitize from 'angular-sanitize'

import routing from '../config/router.js';

import '../style/app.scss';

import collapse from 'angular-ui-bootstrap/src/collapse';
import modal from 'angular-ui-bootstrap/src/modal';
import faCurrency from '../filters/faCurrency.filter';
import confirmModal from '../services/confirmModal/confirmModal.service';
import eventFormModal from '../services/eventFormModal.service';

import appCtrl from './app.ctrl';
import events from './events';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

angular.module('app', [uirouter, ngAnimate, ngSanitize, collapse, modal, faCurrency, confirmModal, eventFormModal, events])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', appCtrl);

export default 'app';
