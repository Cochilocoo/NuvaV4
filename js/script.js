$(document).ready(function(){
	"use strict";

});
/*
$('#infoWeb.infoService').show();

$('.serviceMenu').on('click', function(){
    var indx = $(this).index();
    $('.infoService div').hide();
    $('.infoService div').eq(indx+4).show();
})
*/

$('#infoWeb.infoService').show();

$('#webDesign').on('click', function(){
    $('#infoWeb').show();
    $('#infoApp').hide();
    $('#infoSoc').hide();
    $('#infoBra').hide();
    $('#infoPho').hide();
})
$('#appDev').on('click', function(){
    $('#infoWeb').hide();
    $('#infoApp').show();
    $('#infoSoc').hide();
    $('#infoBra').hide();
    $('#infoPho').hide();
})
$('#socialMedia').on('click', function(){
    $('#infoWeb').hide()
    $('#infoApp').hide();
    $('#infoSoc').show();
    $('#infoBra').hide();
    $('#infoPho').hide();
})
$('#branding').on('click', function(){
    $('#infoWeb').hide()
    $('#infoApp').hide();
    $('#infoSoc').hide();
    $('#infoBra').show();
    $('#infoPho').hide();
})
$('#photo').on('click', function(){
    $('#infoWeb').hide()
    $('#infoApp').hide();
    $('#infoSoc').hide();
    $('#infoBra').hide();
    $('#infoPho').show();
})
