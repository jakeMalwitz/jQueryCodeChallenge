$(document).ready(function(){
  console.log("test");
  var array = [];
  $('#spyInfo').on('submit', function(event){
    event.preventDefault();
    var spies = {};
    var fields = $('#spyInfo').serializeArray();

      fields.forEach(function(element, index, array) {
        spies[element.name] = element.value;
      });


      $('#employeeinfo').find('input[type=text]').val('');
      $('#employeeinfo').find('input[type=number]').val('');

      addSpy(spies);
  });
});//jQuery

function addSpy(spy){
  $('.spies').append('<div class="newSpy"></div>');
  var $el = $('.spies').children().last();
  var $yell = $('.spies').children().last();
  $el.append('<p class="NewSpy">' + spy.spyName + ' ' + spy.spyID + '</p>')
  $el.append('<button id="delete">Delete</button>');
  $el.append('<button id="change">Change</button>');
  $('.NewSpy').css('background-color', 'yellow');
  $el.on('click', function(){
    this.remove();
  });
}

//I'm trying to figure out how to delete each object I'm creating and changing the color.
//I wasted too much time doing my own random thing, then I went about using a form half way through and wasted 45 min.
//I should've used a form from the get go. :(
