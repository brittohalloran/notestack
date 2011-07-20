var britt = function(){

	// JQUERY NO CONFLICT
	var $=jQuery.noConflict();

	// ON LOAD
	$(function(){
	
		// EVALUATE LOCALSTORAGE
		if(localStorage.email){
			$('.email').val(localStorage.email);
		};
		if(localStorage.index){
			index = $.parseJSON(localStorage.index);
			localnotes = 0;
			for (i=0;i<=index.data.length-1;i++){
				if(index.data[i].deleted==0){
					localnotes++;
				};
			};
			$('.login_data_status').hide().text('found ' + localnotes + " local notes | ").fadeIn(2000);
		}
		else{
			$('.login_data_status').hide().text("no local notes | ").delay(500).fadeIn(1000);
		};
		if(localStorage.token){
			tokenAge = parseFloat((new Date()).getTime()/1000) - parseFloat(localStorage.tokenDate);
			if(tokenAge > 72000.0){
				$('.login_message').text('Your simplenote login has expired, please login again.').slideDown('fast');
			}
			else{
				$('.login_message').html('<a href="/+/">' + localStorage.email + '</a>').slideDown('fast');
				$('.login_inner form').hide();
			};
		};
		
		// ON PASSWORD - ENTER
		$('.password').keypress(function(e){
			if(e.which == 13){
				sn_login($('.email').val().trim(),$('.password').val().trim());
				$('.login_message').text('authenticating').slideDown('fast');
			};
		});

		// ON CLICK 'CLEAR DATA'
		$('.clear_data').click(function(){
			localStorage.clear();
			window.location = '/';
			return false;
		});
		
	});

	// ATTEMPT LOGIN
	function sn_login(email,password){
		localStorage.setItem('email',email);
		$.ajax('/sn.php',{
			type: 'POST',
			data: {'action': 'login','email': email,'password': password},
			complete: function(response){
				token = response.responseText;
				if(token=='notinlist'){
					$('.login_message').text("Sorry, Notestack is still in private beta testing. Email britt.j.ohalloran@gmail.com if you're interested in helping to test.").css('text-align','left');
				}
				else if(token==''){ // error authenticating
					$('.login_message').slideUp(200);
					$('.login').effect('shake',{times:3},100);
					
				}
				else{ // good token, save and login
					localStorage.setItem('token',token); // store token locally
					localStorage.setItem('tokenDate',((new Date()).getTime()/1000));
					window.location = "http://notestack.me/+/";
				};
			}
		});
	};
	
}();