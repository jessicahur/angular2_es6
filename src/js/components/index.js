import angular from 'angular';

let componentsModule = angular.module('app.components', []);

//components: meant to be standalone HTML elements
//<list-errors></list-errors>
import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

//directives: used to invoke functionality on an existing HTML element via attribute
//<div hide-this-element="true"> ... </div>
import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

export default componentsModule;
