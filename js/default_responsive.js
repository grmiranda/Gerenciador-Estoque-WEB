$(document).ready(function(){
      //inicialização do carousel
      $('.carousel').carousel();

      //inicialização do tooltip
      $('.tooltipped').tooltip({delay: 50});

      //inicialização do menu lateral para mobile
      $(".button-collapse").sideNav({
        menuWidth: 240, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      });

      //inicialização do contador do characterCounter
      $('input#input_text, textarea#textarea1').characterCounter();
  });
