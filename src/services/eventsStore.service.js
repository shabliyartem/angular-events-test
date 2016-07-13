import angular from 'angular';
import _ from 'lodash';

class EventsStore {
  constructor ($window) {
    this._storage = $window.localStorage;
    let rawEvents = this._storage.getItem('events');
    this._events = rawEvents ? JSON.parse(rawEvents) : [];
  }

  get () {
    return this._events;
  }

  set (events) {
    this._events = events;
    this._storage.setItem('events', JSON.stringify(this._events));
  }

  add (event) {
    let lastEvent = _.last(this._events);
    event.id = lastEvent ? lastEvent.id + 1 : 1;
    this._events.push(event);
    this.set(this._events);
  }

  remove (id) {
    let event = _.find(this._events, {id: id});
    _.remove(this._events, event);
    this.set(this._events);
  }

  clear () {
    this._events = [];
    this.set(this._events);
  }
}


export default angular.module('services.eventsStore', [])
  .service('eventsStore', EventsStore)
  .name;
