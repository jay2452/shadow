// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require materialize-sprockets
//= require materialize/extras/nouislider
//= require masonry/jquery.masonry
//= require masonry/box-maker
//= require masonry/jquery.loremimages.min
//= require isotope/jquery.isotope
//= require videojs-contrib-hls
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
    $('.parallax').parallax();
    $('select').material_select();
    $('.materialboxed').materialbox();
    $('.modal-trigger').leanModal();
    $('.carousel').carousel();
    $(".button-collapse").sideNav();
});

$(document).on('ready page:change', function() {
	$('.parallax').parallax();
    $('select').material_select();
  Waves.displayEffect();
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
  $('.carousel').carousel();
  $('.materialboxed').materialbox();
});






  $('#masonry-container').masonry({
    itemSelector: '.box',
    columnWidth: 200,
    isAnimated: !Modernizr.csstransitions,
    isFitWidth: true
  });