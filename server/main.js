import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  // Players.insert({
  //   name : 'Pratik',
  //   score : 3
  // });
  console.log(Players.find().fetch());
});
