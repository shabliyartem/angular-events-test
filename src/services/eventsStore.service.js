import angular from 'angular';
import _ from 'lodash';

class EventsStore {
  constructor ($window) {
    this._storage = $window.localStorage;
    this._readStorage();
  }

  _readStorage () {
    let rawEvents = this._storage.getItem('events');
    this._events = rawEvents ? JSON.parse(rawEvents) : [];
  }

  _setStorage (events) {
    this._storage.setItem('events', JSON.stringify(this._events));
  }

  all () {
    return _.cloneDeep(this._events);
  }

  find (id) {
    return _.cloneDeep(_.find(this._events, {id: id}));
  }

  create (event) {
    let lastEvent = _.last(this._events);
    event.id = lastEvent ? lastEvent.id + 1 : 1;
    this._events.push(event);
    this._setStorage(this._events);
  }

  update (id, newEvent) {
    let event = _.find(this._events, {id: id});
    _.assign(event, newEvent);
    this._setStorage(this._events);
  }

  destroy (id) {
    let event = _.find(this._events, {id: id});
    _.remove(this._events, event);
    this._setStorage(this._events);
  }

  destroyAll () {
    this._events = [];
    this._setStorage(this._events);
  }
}


export default angular.module('services.eventsStore', [])
  .service('eventsStore', EventsStore)
  .name;
