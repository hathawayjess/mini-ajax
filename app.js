$(document).ready(function() {

$('.js-get-users').on('click', function () {
    return $.ajax({
		method: 'GET',
		url: 'http://reqres.in/api/users?page=1',
		success: function(data) {
			console.log('success', data);
		}
	});
  });



$('.js-get-users').on('click', function() {

	function handleSuccess(res) {
		console.log(res);
	}

	$.ajax({
		method: 'GET',
		url: 'http://reqres.in/api/users?page=1',
	}).then(handleSuccess);
})

var insertData = function (arr) {
	var tpl = '<div>' +
		'User Info: <ul>' +
		'<li>First name: <span class="js-first">none</span></li>' +
		'<li>Last name: <span class="js-last">none</span></li>' +
		'</ul>' +
		'<hr>' +
		'</div>';

	arr.forEach(function (item, i) {
		var $copy = $(tpl);

		$copy.find('.js-first').text(item.first_name);
		$copy.find('.js-last').text(item.last_name);

		$('.js-user-info-' + (i + 1)).html($copy);
	});

	}


  $('.js-get-users').on('click', function () {
    return $.ajax({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=1',
    }).then(function (res) {
      console.log(res);
      insertData(res.data);
    }, function (err) {
      console.error(err);
    });
  })

  $('.js-add-user').on('submit', function (ev) {
    // By default a form submission will cause a page to reload
    // but it is possible to tell the event to cancel it's default action like this
    ev.preventDefault();

    // do thing here
  });

 	//return AJAX post request 
$('.js-add-user').on('submit', function () {
    var userName = $('.js-name').val();
    var userJob = $('.js-job').val();
     return $.ajax({
      method: 'POST',
      url: 'http://reqres.in/api/users',
      data: {name: userName, job: userJob}
    }).then(function (res) {
    	 var tpl = '<li>name: <span class="js-name">none</span></li>' +
        '<li>job: <span class="js-job">none</span></li>' +
        '<li>id: <span class="js-id">none</span></li>' +
        '<li>created at:  <span class="js-created-at">none</span></li>'
        ;

      $copy = $(tpl);
      $copy.find('.js-name').text(res.name);
      $copy.find('.js-job').text(res.job);
      $copy.find('.js-id').text(res.id);
      $copy.find('.js-created-at').text(res.createdAt);

      $('.js-recent-user').html($copy);
    }, function (error) {
    	console.error(err);
      	window.alert('Something went wrong!');
    });
  });



















});