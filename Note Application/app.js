console.log('starting app.js');



const fs = require('fs');                    //fs module
const notes= require('./notes.js');          //explicitly calling

                                             //using yargs makes it easier to get inputs

const titleOptions =  {
  describe : 'Title of note',
  demand : true,
  alias : 't'
};
const bodyOptions =  {
  describe : 'body of note',
  demand: true,
  alias : 'b'
};
const yargs = require('yargs');
const _ = require('lodash');
const argv= yargs
.command('add','Add a new note', {
  title: titleOptions,
  body: bodyOptions

})
.command('list','list all notes')
.command('read','read an specific note',{
  title: titleOptions
})
.command('remove','remove a note',{
  title: titleOptions
})
.help()
.argv;

var command  = argv._[0];

// console.log(process.argv);

console.log('Yargs',argv);
// console.log('Command',command);

if(command==='add'){
var note = notes.addNote(argv.title,argv.body);
if(note===undefined){
    console.log('note already exists');
}
else {
  console.log('the title',note.title,'is added');
}
}
else if(command==='list'){
var allNote=notes.getAll();
console.log(`Printing ${allNote.length} notes.`);
allNote.forEach((note) =>  {
  console.log(`${note.title}`);
  console.log(`${note.body}`);
  console.log("--");

});

}
else if(command==='read'){

var note =notes.getNote(argv.title);
if(note)
{
  console.log(`the title : ${note.title}`);
  console.log(`the body :  ${note.body}`);
}
else {
  console.log('title does not exist');
}
}
else if(command==='remove')
{
var note = notes.removeNote(argv.title);

if(note)
{
      console.log('title deleted');
}
else {
      console.log('title does not exist');
}

}


else {
  console.log('Command not recognized');
}











































// const user = require('os');   //os module

// console.log(_.isString(true));
// console.log(_.isString('true'));


// var farray = _.uniq(['Mechy']);
// console.log(farray);

//console.log(user.username);  // variable user is like object, dot operator can access stuff.



//
// //one way of appending strings
// fs.appendFile('greeting.txt','Hi '+ user.shell + '!!', function(err){
// if(err){
//   console.log('Unable to write');
// }
// });
//
//
// // the other way
// fs.appendFile('greeting.txt',`Hello ${user.uid} You are ${notes.age}` , function(err){
// if(err){
//    console.log('Unable to write');
// }
// });
//
//
//
//
// console.log(notes.addNum (9,-2)); //created a addition function in notes.js file and
//                                     //exported from it this js file.
//
// var res= notes.addNote();
// console.log(res);
