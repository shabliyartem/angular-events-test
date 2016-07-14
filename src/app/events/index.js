import angular from 'angular';
import uirouter from 'angular-ui-router';

import './list/style.scss';

import pagination from 'angular-ui-bootstrap/src/pagination';

import eventsStore from '../../services/eventsStore.service';
import formField from '../../directives/form-field/form-field.dir';
import EventsListCtrl from './list/list.ctrl';
import EventsNewCtrl from './new/new.ctrl';
import EventsEditCtrl from './edit/edit.ctrl';

export default angular.module('app.events', [uirouter, pagination, eventsStore, formField])
  .controller('EventsListCtrl', EventsListCtrl)
  .controller('EventsNewCtrl', EventsNewCtrl)
  .controller('EventsEditCtrl', EventsEditCtrl)
  .name;
