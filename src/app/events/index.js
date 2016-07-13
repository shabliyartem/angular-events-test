import angular from 'angular';
import uirouter from 'angular-ui-router';

import './list/style.scss';

import eventsStore from '../../services/eventsStore.service';
import EventsListCtrl from './list/list.ctrl';
import EventsNewCtrl from './new/new.ctrl';
import EventsEditCtrl from './edit/edit.ctrl';

export default angular.module('app.events', [uirouter, eventsStore])
  .controller('EventsListCtrl', EventsListCtrl)
  .controller('EventsNewCtrl', EventsNewCtrl)
  .controller('EventsEditCtrl', EventsEditCtrl)
  .name;
