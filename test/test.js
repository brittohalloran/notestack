var $jb = jQuery.noConflict();

$jb('.message1').text('message 1');
$jb('.message2').text('message 2');
$jb('.message3').text('message 3');

// JQUERY FUNCTION TESTS
jQuery.fn.function2 = (function(){
	$jb('.message2').text('function2 has executed');
})();
jQuery.fn.function1 = (function(){
	$jb('.message1').text('function1 has executed');
	$jb.delay(2000);
})();
$jb(function(){ 
	$jb.function1().done().function2();
});

//DATA STORAGE TEST
// var rawnote = localStorage.getItem('agtzaW1wbGUtbm90ZXINCxIETm90ZRjS3PMDDA');
// parsenote = $jb.parseJSON(rawnote);
// $jb('.message1').text(parsenote.key);
// $jb('.message1').data(parsenote);
// $jb('.message2').text($jb('.message1').data().key);

// DATE HANDLING TEST
// localStorage.datetest = (new Date()).getTime()/1000;
// $jb('.message1').text(localStorage.datetest);
// $jb('.message2').text(localStorage.timeoffset);
// $jb('.message3').text('');
// index_date = stackTime(localStorage.datetest);
// $jb('.timeago').attr('title',index_date);
// $jb('.timeago').timeago();

// function stackTime(epoch_seconds){
	// offset_dt = (new Date()).getTimezoneOffset()*60;
	// epoch_num = parseFloat(epoch_seconds);
	// time_num = (epoch_num + offset_dt)*1000;
	// time_dt = new Date(time_num);
	// return time_dt;
// };

// COMMUNICATION TEST
// $jb(function(){
	// test_comm({
		// 'action': 'index',
		// 'email': 'britt.j.ohalloran@gmail.com',
		// 'token': '703C9A0792960BEDADF1E30B003C47D41F4DBB92BEE96B614C2C29843824D140',
		// 'since': '1309269841.109',
	// });
// });
// function test_comm(postData){
	// $jb.ajax('/sn.php',{
		// type: 'POST',
		// data: postData,
		// success: function(data){
			// $jb('.message').text(data);
		// },
		// error: function(msg){alert(msg);}
	// });
// };