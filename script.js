var main = function () {

	// This scroll function changes the header style after a certain number of scrolls
	var changeHeader = false;
	$(document).ready(function(){
		if( $(this).scrollTop() > 50) {
			if(!changeHeader) {
				changeHeader = true;
				$('#header').addClass('add-Background');
			}
		}
		else {
			if(changeHeader) {
				changeHeader = false;
				$('#header').removeClass('add-Background');
			}
		}
	});
	$(document).scroll(function(){
		if( $(this).scrollTop() > 50) {
			if(!changeHeader) {
				changeHeader = true;
				$('#header').addClass('add-Background');
			}
		}
		else {
			if(changeHeader) {
				changeHeader = false;
				$('#header').removeClass('add-Background');
			}
		}
	});

	// This CLICK function toggles the project list when the project-menu navigation header is clicked
	$('#projects-menu').click(function(){
		$('.project-list').delay(25).toggle(0);
		$('#projects-menu').toggleClass('active');
	});

	// This CLICK function hides the project list and de-activates the project-menu navigation
	// header when any object other than the project-menu header or the project list is clicked
	$('*').click(function(e) {
		var targ = e.target;
		var projectList = $('.project-list');
		if ((targ.id != 'projects-menu') && !(projectList.has(targ).length)) {
			projectList.delay(25).hide(0);
			$('#projects-menu').removeClass('active');
		}
	});

	// This CLICK function toggles the mobile-menu when the mobile navigation button is clicked
	$('#mobile-NAV-button').click(function(){
		$('#mobile-menu').delay(25).toggle(0);
		$('#mobile-NAV-button').toggleClass('glow');
	});

	// This CLICK function hides the mobile-menu and de-activates the mobile navigation button
	// when any object other than the mobile-menu or the mobile nav button is clicked
	$('*').click(function(e) {
		var targ = e.target;
		var mobileMenu = $('#mobile-menu')
		if ((targ.id != 'mobile-NAV-button') && !(mobileMenu.has(targ).length)) {
			mobileMenu.delay(25).hide(0);
			$('#mobile-NAV-button').removeClass('glow');
		}
	})

	// This CLICK function toggles the mobile-project-list when the mobile-project-menu is clicked
	$('#mobile-projects-menu').click(function(){
		$('.mobile-project-list').delay(25).toggle(0);
		$('#mobile-projects-menu').toggleClass('active');
	});
	// This CLICK function hides the mobile-project-list and de-activates the mobile-project-menu navigation
	// header when any object other than the mobile-project-menu header or the mobile-project-list is clicked
	$('*').click(function(e) {
		var targ = e.target;
		var mobileProjectList = $('.mobile-project-list');
		if ((targ.id != 'mobile-projects-menu') && !(mobileProjectList.has(targ).length)) {
			mobileProjectList.delay(25).hide(0);
			$('#mobile-projects-menu').removeClass('active');
		}
	});

	//Create a hover/not-hover functionality to the project menu
	$('#projects-menu').hover(
		function() {
			$(this).addClass('active');
			$('.project-list').stop().delay(100).show(0);
		},
		function() {
			if( $('.project-list').is(':hover') ) {
			}
			else {
				$(this).removeClass('active');
				$('.project-list').stop().delay(100).hide(0);
			}
	});
	$('.project-list').hover(
		function() {
			$('#projects-menu').addClass('active');
			$('.project-list').stop(true, false);
		},
		function() {
			if( $('#projects-menu').is(':hover') ) {
			}
			else {
				$('#projects-menu').removeClass('active');
				$('.project-list').delay(100).hide(0);
			}
	});

	// Create a hover/not-hover functionality to the mobile project menu
	$('#mobile-projects-menu').hover(
		function() {
			$(this).addClass('active');
			$('.mobile-project-list').stop().delay(100).show(0);
		},
		function() {
			if( $('.mobile-project-list').is(':hover') ) {
			}
			else {
				$(this).removeClass('active');
				$('.mobile-project-list').stop().delay(100).hide(0);
			}
	});
	$('.mobile-project-list').hover(
		function() {
			$('#mobile-projects-menu').addClass('active');
			$('.mobile-project-list').stop(true, false);
		},
		function() {
			if( $('#mobile-projects-menu').is(':hover') ) {
			}
			else {
				$('#mobile-projects-menu').removeClass('active');
				$('.mobile-project-list').delay(100).hide(0);
			}
	});

	//Attempting to create a hover/not-hover functionality to the mobile-menu

	$('#mobile-NAV-button').hover(
		function() {
			$(this).addClass('glow');
			$('#mobile-menu').stop().delay(100).show(0);
		},
		function() {
			if( $('#mobile-menu').is(':hover') ) {
			}
			else {
				$(this).removeClass('glow');
				$('#mobile-menu').stop().delay(100).hide(0);
			}
	});

	$('#mobile-menu').hover(
		function() {
			$('#mobile-NAV-button').addClass('glow');
			$('#mobile-menu').stop(true, false);
		},
		function() {
			if( $('#mobile-NAV-button').is(':hover') ) {
			}
			else {
				$('#mobile-NAV-button').removeClass('glow');
				$('#mobile-menu').delay(100).hide(0);
			}
	});


	// This function reveals/hides the corresponding project popup when a thumbnail is clicked
	$('.project-thumbnail').click(function() {
		// this checks whether the "child" popup is currently showing
		var currentlyUp; 
		currentlyUP = false;
		var element = $(this).next('.project-popup');

		if(element.css("max-height") !== "0px") {
			currentlyUP = true;
		}
		// this hides all popups to prevent a "stacking" of shown popups
		$('.project-popup').css("max-height", "0px");
		$('.project-popup').css("border", "none");

		// this shows the popup if it was not already showing
		if(!currentlyUP) {
			element.css("max-height", "100vh");
			element.css("border", "white solid 1px")
		}
	});

	// This function hides all projects popup windows when anything other than a thumbnail or popup window is clicked
	$('*').click(function(e) {
		var targ = e.target;
		var classname = targ.className;
		var targId = targ.id;
		if ((classname != 'project-thumbnail') && !($(targ).parents('.project-thumbnail').length) && (classname != 'project-popup') && !($(targ).parents('.project-popup')).length && (targId != 'projects-menu') && !($.contains('.project-list', targ)) && (targId != 'mobile-NAV-button') && !($.contains('.mobile-menu', targ))) {
			$('.project-popup').css("max-height", "0px");
			$('.project-popup').css("border", "none");
		}
	});

	// This function hids the corresponding project popup when a "close" button is clicked
	$('.btn-popup-close').click(function(){
		var element = $(this).parents('.project-popup');
		$('.project-popup').css("max-height", "0px");
		$('.project-popup').css("border", "none");
	});



}

$(document).ready(main);