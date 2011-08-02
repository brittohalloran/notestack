<?php header("Content-type: text/css"); ?>

/* STYLE ################################################################## */

a {
	text-decoration: none;
	color: #628EB5;
}

a:hover {
	color: #B56262;
}
	
.button1 {
	border-radius: 3px;
	-moz-border-radius: 3px;
	background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ddd));
	background: -moz-linear-gradient(top, #fff, #ddd);  
	border: 1px solid #bbb;
}

.button {
	border: 1px solid rgba(0,0,0,0.3);
	text-align: center;	
	cursor: pointer;
	background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ddd));
	background: -moz-linear-gradient(top, #fff, #ddd);  
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
}

	.button:hover {
		background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ccc));
		background: -moz-linear-gradient(top, #fff, #ccc); 
	}

	.button.depressed,
	.button:active,
	.button:focus {
		background: -webkit-gradient(linear, left top, left bottom, from(#C2C2C2), to(#ddd));
		background: -moz-linear-gradient(top, #C2C2C2, #ddd);
		box-shadow: inset 1px 1px 3px rgba(0,0,0,0.3);
	}
	
	.button.button-first {
		-webkit-border-top-right-radius: 0px;
		-webkit-border-bottom-right-radius: 0px;
		-moz-border-radius-topright: 0px;
		-moz-border-radius-bottomright: 0px;
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
	}
	
	.button.button-last {
		-webkit-border-top-left-radius: 0px;
		-webkit-border-bottom-left-radius: 0px;
		-moz-border-radius-topleft: 0px;
		-moz-border-radius-bottomleft: 0px;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
	}

/* TAGS ############################################################################ */

.tagsinput { 
	padding:0px 5px; 
	background: white;
}

.tagsinput .tag { 
	border: 1px solid #a5d24a; 
	-moz-border-radius:2px; 
	-webkit-border-radius:2px; 
	display: block; 
	float: left; 
	padding: 2px; 
	text-decoration:none; 
	background: #cde69c; 
	color: #638421; 
	margin-right: 5px; 
	margin-top:5px;
	font-family: helvetica;  
	font-size:13px;
	height: 16px;
}

.tagsinput .tag a { 
	font-weight: bold; 
	color: #82ad2b; 
	text-decoration:none; 
	font-size: 11px;
} 

.tagsinput input { 
	width:80px; 
	margin:0px; 
	font-family: helvetica; 
	font-size: 13px; 
	border:1px solid transparent; 
	padding:5px; 
	background: transparent; 
	color: #000; 
	outline:0px;  
	margin-right:5px; 
	margin-bottom:5px; 
}

.tagsinput div { 
	display:block; 
	float: left; 
} 
.tags_clear { 
	clear: both; 
	width: 100%; 
	height: 0px; 
}

/* ########## THEME OPTIONS ########## */
<?PHP 
	
	$themes = array(
		'android' => array(
			'window-bg' 			=> "linear-gradient(bottom, #FCFCFC, #DBDBDB);
										background: -webkit-gradient(linear, left bottom, left top, from(#FCFCFC), to(#DBDBDB));
										background: -moz-linear-gradient(bottom, #FCFCFC, #DBDBDB);",
			'sidebar-bg' 			=> '#636363',
			'sidebar-boxshadow' 	=> '5px 0px 10px rgba(0,0,0,0.1)',
			'sidebar-borders'		=> '1px solid #ccc',
			'listnote-text-color' 	=> 'white',
			'listnote-font' 		=> 'inherit',
			'listnote-title-style' 	=> 'font-weight: bold;',
			'highlight-text-color' 	=> 'white',
			'highlight-text-style'  => 'text-shadow: 0px 1px 0px rgba(0,0,0,0.1);',
			'highlight-bg' 			=> "-moz-linear-gradient(top,#A4C639,#9ABA36); 
										background: -o-linear-gradient(top,#A4C639,#9ABA36);
										background: -webkit-gradient(linear,left top,left bottom,from(#A4C639),to(#9ABA36));", // android green
			'note-bg' 				=> 'rgba(64,64,64,0.5)',
			'note-current-bg' 		=> 'rgba(64,64,64,0.8)',
			'note-edit-bg' 			=> 'rgba(64,64,64,0.3)',
			'note-edit-border'		=> '1px solid #4D90FE',
			'note-border-rad-px' 	=> '10',
			'note-border' 			=> '1px solid rgba(50,50,50,1)',
			'note-boxshadow' 		=> '2px 2px 16px rgba(0,0,0,0.6)',
			'note-buttons-color' 	=> 'rgba(255,255,255,1)',
			'note-textarea-bg' 		=> 'white',
			'textarea-box-shadow'	=> 'inset 1px 1px 5px rgba(0,0,0,0.4)',
			'default-font' 			=> '"courier new", monospace',
			'tag-area-bg' 			=> 'white',
			'tag-bg' 				=> '#CCC',
			'tag-border' 			=> 'rgba(0,0,0,0.2)',
			'overlay-bg'			=> 'rgba(64,64,64,0.3)',
			'theme-card-inner-bg' 	=> '#636363',
			'theme-card-outer-bg' 	=> '#A4C639',
			'theme-card-border' 	=> 'rgba(255,255,255,0.3)'
		),
		'moleskine' => array(
			'window-bg' 			=> "linear-gradient(bottom, #FCFCFC, #DBDBDB);
										background: -webkit-gradient(linear, left bottom, left top, from(#FCFCFC), to(#DBDBDB));
										background: -moz-linear-gradient(bottom, #FCFCFC, #DBDBDB);",
			'sidebar-bg' 			=> 'rgba(244,241,232,1)',
			'sidebar-boxshadow' 	=> '5px 0px 10px rgba(0,0,0,0.1)',
			'sidebar-borders'		=> '1px solid #ccc',
			'listnote-text-color' 	=> '#454545',
			'listnote-font' 		=> '"MuseoSans-500", sans-serif',
			'listnote-title-style' 	=> 'text-transform: uppercase;',
			'highlight-text-color' 	=> '#454545', // same as non-highlight
			'highlight-text-style'  => 'text-shadow: 0px 1px 0px rgba(255,255,255,0.1);',
			'highlight-bg' 			=> "-moz-linear-gradient(top,#F29101,#E68901); 
										background: -o-linear-gradient(top,#F29101,#E68901);
										background: -webkit-gradient(linear,left top,left bottom,from(#F29101),to(#E68901));", 
			'note-bg' 				=> 'rgba(30,30,30,0.5)',
			'note-current-bg' 		=> 'rgba(30,30,30,0.95)',
			'note-edit-bg' 			=> 'rgba(100,100,100,0.95)',
			'note-edit-border'		=> '2px solid rgba(0,0,0,0.5)',
			'note-border-rad-px' 	=> '10',
			'note-border' 			=> '1px solid rgba(50,50,50,1)',
			'note-buttons-color' 	=> 'rgba(50,50,50,1)',
			'note-boxshadow' 		=> '2px 2px 16px rgba(0,0,0,0.9)',
			'note-textarea-bg' 		=> 'url(../images/moleskine.jpg)',
			'textarea-box-shadow'	=> 'inset 1px 1px 5px rgba(0,0,0,0.4)',
			'default-font' 			=> '"courier new", monospace',
			'tag-area-bg' 			=> 'url(../images/moleskine.jpg)',
			'tag-bg' 				=> 'rgba(255,255,255,0.2)',
			'tag-border' 			=> '1px solid rgba(0,0,0,0.5)',
			'overlay-bg'			=> 'rgba(30,30,30,0.95)',
			'theme-card-inner-bg' 	=> 'url(../images/moleskine.jpg)',
			'theme-card-outer-bg'	=> 'rgba(30,30,30,1)',
			'theme-card-border' 	=> '1px solid rgba(244,241,232,0.3)'
		),
		'gmail' => array(
			'window-bg' 			=> 'white',
			'sidebar-bg' 			=> '#F1F1F1',
			'sidebar-boxshadow' 	=> '5px 0px 10px rgba(0,0,0,0.1)',
			'sidebar-borders'		=> '1px solid rgba(0,0,0,0.1)',
			'listnote-text-color' 	=> '#666',
			'listnote-font' 		=> 'arial, sans-serif',
			'listnote-title-style' 	=> 'font-weight: bold;',
			'highlight-text-color' 	=> 'white',
			'highlight-text-style'  => 'text-shadow: 0px 1px 0px rgba(0,0,0,0.1);',
			'highlight-bg' 			=> "-moz-linear-gradient(top,#DD4B39,#D14836); 
										background: -o-linear-gradient(top,#DD4B39,#D14836);
										background: -webkit-gradient(linear,left top,left bottom,from(#DD4B39),to(#D14836));", 
			'note-bg' 				=> 'rgba(241,241,241,0.5)',
			'note-current-bg' 		=> "-moz-linear-gradient(top,#F2F2F2,#E6E6E6); 
										background: -o-linear-gradient(top,#F2F2F2,#E6E6E6);
										background: -webkit-gradient(linear,left top,left bottom,from(#F2F2F2),to(#E6E6E6));",
			'note-edit-bg' 			=> 'rgba(200,200,200,0.95)',
			'note-edit-border'		=> '1px solid #4D90FE',
			'note-border-rad-px' 	=> '5',
			'note-border' 			=> '1px solid rgba(0,0,0,0.3)',
			'note-buttons-color' 	=> 'rgba(0,0,0,0.3)',
			'note-boxshadow' 		=> '2px 2px 16px rgba(0,0,0,0.6)',
			'note-textarea-bg' 		=> 'white',
			'textarea-box-shadow'	=> 'inset 1px 1px 5px rgba(0,0,0,0.2)',
			'default-font' 			=> '"courier new", monospace',
			'tag-area-bg' 			=> 'white',
			'tag-bg' 				=> 'rgba(100,100,100,0.2)',
			'tag-border' 			=> '1px solid rgba(0,0,0,0.1)',
			'overlay-bg'			=> "-moz-linear-gradient(top,#F2F2F2,#E6E6E6); 
										background: -o-linear-gradient(top,#F2F2F2,#E6E6E6);
										background: -webkit-gradient(linear,left top,left bottom,from(#F2F2F2),to(#E6E6E6));",
			'theme-card-inner-bg' 	=> 'rgba(200,200,200,0.95)',
			'theme-card-outer-bg' 	=> "-moz-linear-gradient(top,#DD4B39,#D14836); 
										background: -o-linear-gradient(top,#DD4B39,#D14836);
										background: -webkit-gradient(linear,left top,left bottom,from(#DD4B39),to(#D14836));",
			'theme-card-border' 	=> '1px solid rgba(200,200,200,0.5)'
		),
		'earthy' => array(
			'window-bg' 			=> '#B4B48D',
			'sidebar-bg' 			=> '#BFB68F',
			'sidebar-boxshadow' 	=> '5px 0px 10px rgba(0,0,0,0.1)',
			'sidebar-borders'		=> '1px solid rgba(0,0,0,0.1)',
			'listnote-text-color' 	=> 'black',
			'listnote-font' 		=> '"MuseoSans-500", sans-serif',
			'listnote-title-style' 	=> 'text-transform: uppercase;',
			'highlight-text-color' 	=> 'white',
			'highlight-text-style'  => 'text-shadow: 0px 1px 0px rgba(0,0,0,0.1);',
			'highlight-bg' 			=> "-moz-linear-gradient(top,#B55230,#A94D2D); 
										background: -o-linear-gradient(top,#B55230,#A94D2D);
										background: -webkit-gradient(linear,left top,left bottom,from(#B55230),to(#A94D2D));", 
			'note-bg' 				=> 'rgba(168,122,44,0.7)',
			'note-current-bg' 		=> 'rgba(168,122,44,1)',
			'note-edit-bg' 			=> 'rgba(219,179,79,1)',
			'note-edit-border'		=> '1px solid #A94D2D',
			'note-border-rad-px' 	=> '10',
			'note-border' 			=> '1px solid rgba(230,230,230,0.3)',
			'note-buttons-color' 	=> 'white',
			'note-boxshadow' 		=> '2px 2px 16px rgba(0,0,0,0.6)',
			'note-textarea-bg' 		=> '#FFFFD9',
			'textarea-box-shadow'	=> 'inset 1px 1px 5px rgba(0,0,0,0.4)',
			'default-font' 			=> '"MuseoSans-500", sans-serif',
			'tag-area-bg' 			=> '#FFFFD9',
			'tag-bg' 				=> 'rgba(100,100,100,0.2)',
			'tag-border' 			=> '1px solid rgba(0,0,0,0.1)',
			'overlay-bg'			=> 'rgba(168,122,44,1)',
			'theme-card-inner-bg' 	=> '#B4B48D',
			'theme-card-outer-bg' 	=> 'rgba(168,122,44,1)',
			'theme-card-border' 	=> '1px solid rgba(200,200,200,0.5)'
		)
	);
	
?>

<?php foreach ($themes as $theme => $options) { ?>

/*MAIN BACKGROUND BEHIND NOTES*/
.theme-<?php echo $theme; ?> {
	background: <?php echo $options['window-bg']; ?>;
}

/*SIDEBAR BACKGROUND*/
.theme-<?php echo $theme; ?> .sidebar,
.theme-<?php echo $theme; ?> .versions-left {
	background: <?php echo $options['sidebar-bg']; ?>;
	border-right: <?php echo $options['sidebar-borders']; ?>;
	-moz-box-shadow: <?php echo $options['sidebar-boxshadow']; ?>;
	-webkit-box-shadow: <?php echo $options['sidebar-boxshadow']; ?>;
	box-shadow: <?php echo $options['sidebar-boxshadow']; ?>;
}

	/*SEARCH AREA*/
	.theme-<?php echo $theme; ?> .search {
		border-bottom: <?php echo $options['sidebar-borders']; ?>;
	}

	/*SIDEBAR NOTE TEXT*/
	.theme-<?php echo $theme; ?> .list .listnote,
	.theme-<?php echo $theme; ?> .versions .versions-left .version-item {
		border-bottom: <?php echo $options['sidebar-borders']; ?>;
		font-size: 0.8em;
		color: <?php echo $options['listnote-text-color']; ?>;
	}
	
		/*SIDEBAR NOTE FONT*/
		.theme-<?php echo $theme; ?> .listnote .title,
		.theme-<?php echo $theme; ?> .listnote .preview {
			font-family: <?php echo $options['listnote-font']; ?>;
		}
	
	/*SELECTED NOTE IN SIDEBAR AND SETTINGS PANE*/
	.theme-<?php echo $theme; ?> .list .listnote.selected,
	.theme-<?php echo $theme; ?> .labels .item.label-select,
	.theme-<?php echo $theme; ?> .versions .versions-left .version-select {
		background: <?php echo $options['highlight-bg']; ?>;
		color: <?php echo $options['highlight-text-color']; ?>;
		<?php echo $options['highlight-text-style']; ?>
	}
	
		.theme-<?php echo $theme; ?> .list .listnote .title{
			<?php echo $options['listnote-title-style']; ?>
		}
		
		.theme-<?php echo $theme; ?> .list .listnote.pinned>.pinboard {
			background: url(../images/rsz_pin.png) no-repeat center;
		}

/*FRAME AROUND UNSELECTED NOTES (PARTIALLY OFFSCREEN)*/
.theme-<?php echo $theme; ?> .window .note {
	background: <?php echo $options['note-bg']; ?>;
	border: <?php echo $options['note-border']; ?>;
	border-radius: <?php echo $options['note-border-rad-px']; ?>px;
	-moz-border-radius: <?php echo $options['note-border-rad-px']; ?>px;
	-webkit-border-radius: <?php echo $options['note-border-rad-px']; ?>px;
	-moz-box-shadow: <?php echo $options['note-boxshadow']; ?>;
	-webkit-box-shadow: <?php echo $options['note-boxshadow']; ?>;
	box-shadow: <?php echo $options['note-boxshadow']; ?>;
}

	/*FRAME AROUND SELECTED NOTE CARD*/
	.theme-<?php echo $theme; ?> .window .current.note {
		background: <?php echo $options['note-current-bg']; ?>;
	}

	/*FRAME AROUND NOTE WHEN EDITING*/
	.theme-<?php echo $theme; ?> .window .current.highlight {
		background: <?php echo $options['note-edit-bg']; ?>;
	}
	
	/*FRAME AROUND OVERLAY*/
	.theme-<?php echo $theme; ?> .versions,
	.theme-<?php echo $theme; ?> .labels {
		background: <?php echo $options['overlay-bg']; ?>;
	}
	
	/*ACTUAL NOTE TEXT*/
	.theme-<?php echo $theme; ?> .window .note .textarea,
	.theme-<?php echo $theme; ?> .labels .inner,
	.theme-<?php echo $theme; ?> .versions .inner {
		font-family: <?php echo $options['default-font']; ?>;
		background: <?php echo $options['note-textarea-bg']; ?>;
		/*border: <?php echo $options['note-border']; ?>;*/
	}
	
		.theme-<?php echo $theme; ?> .window .note .textarea {
			box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
			-webkit-box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
			-moz-box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
		}
	
		/*NOTE TEXTAREA WHEN FOCUSED*/
		.theme-<?php echo $theme; ?> .window .note .textarea textarea:focus {
			outline: none;
			border: none;
		}
	
	/*MAXIMIZE AND HISTORY BUTTON*/
	.theme-<?php echo $theme; ?> .window .note .maximize,
	.theme-<?php echo $theme; ?> .window .note .versions-button,
	.theme-<?php echo $theme; ?> .window .note .delete {
		border-bottom: 1px solid <?php echo $options['note-buttons-color']; ?>;
		border-right: 1px solid <?php echo $options['note-buttons-color']; ?>;
		border-left: 1px solid <?php echo $options['note-buttons-color']; ?>;
		color: black;
		background: linear-gradient(bottom, #DDDDDD, #E6E6E6);
		background: -webkit-gradient(linear, left bottom, left top, from(#DDDDDD), to(#E6E6E6));
		background: -moz-linear-gradient(bottom, #DDDDD, #E6E6E6);
	}
		.theme-<?php echo $theme; ?> .window .note .maximize:hover,
		.theme-<?php echo $theme; ?> .window .note .versions-button:hover,
		.theme-<?php echo $theme; ?> .window .note .delete:hover {
			color: <?php echo $options['highlight-text-color']; ?>;
			background: <?php echo $options['highlight-bg']; ?>;
		}
	
	/*NOTE MESSAGE*/
	.theme-<?php echo $theme; ?> .window .note .message {
		background: <?php echo $options['highlight-bg']; ?>;
		color: <?php echo $options['highlight-text-color']; ?>;
	}
	
		/*NOTE MESSAGE LINKS*/
		.theme-<?php echo $theme; ?> .window .note .message a {
			color: <?php echo $options['highlight-text-color']; ?>;
			text-decoration: underline;
		}

	/*TAG AREA*/
	.theme-<?php echo $theme; ?> .window .note .tag-area {
		border: <?php echo $options['note-border']; ?>;
	}
	
	/*TAG AREA BACKGROUND*/
	.theme-<?php echo $theme; ?> .window .note .tagsinput {
		background: <?php echo $options['tag-area-bg']; ?>;
	}
	
		/*INDIVIDUAL TAG BACKGROUND*/
		.theme-<?php echo $theme; ?> .window .note .tagsinput .tag {
			border: <?php echo $options['tag-border']; ?>;
			background: <?php echo $options['tag-bg']; ?>;
		}
		
			/*INDIVIDUAL TAG TEXT*/
			.theme-<?php echo $theme; ?> .window .note .tagsinput .tag span {
				color: black;
			}
			
		/*'ADD A TAG' TEXT*/
		.theme-<?php echo $theme; ?> .window .note .tagsinput div input {
			color: black;
		}

/*TOOLBAR*/
.theme-<?php echo $theme; ?> .toolbar {
	font-size: 0.8em;
}
	
	/*USERDATA*/
	.theme-<?php echo $theme; ?> .toolbar .userdata {
		color: black;
	}

	/*STATUS BUSY ICON*/
	.theme-<?php echo $theme; ?> .status-div.loading .status-icon {
		background: url('../images/loading5.gif') no-repeat;
	}
	
	/*STATUS MESSAGE*/
	.theme-<?php echo $theme; ?> .status {
		text-transform: lowercase;
	}

/*THEME CARD INNER*/
.appearance .item.theme-<?php echo $theme; ?> .inner {
	background: <?php echo $options['theme-card-inner-bg']; ?>;
}

/*THEME CARD OUTER*/
.appearance .item.theme-<?php echo $theme; ?> {
	background: <?php echo $options['theme-card-outer-bg']; ?>;
	border: <?php echo $options['theme-card-border']; ?>;
}

<?php }; //end foreach ?>

/* FONT THEMES ############################################################################ */

.fullwindow.font-mono .window .note textarea,
.appearance .font .name.mono {
	font-family: "Courier New", Courier, monospace;
}

.fullwindow.font-veramono .window .note textarea,
.appearance .font .name.veramono {
	font-family: "BitstreamVeraSansMonoRoman", "Courier New", Courier, monospace;
}

.fullwindow.font-lmmono .window .note textarea,
.appearance .font .name.lmmono {
	font-family: "LatinModernMono10Regular", monospace;
}

.fullwindow.font-dsmono .window .note textarea,
.appearance .font .name.dsmono {
	font-family: "DroidSansMonoRegular", monospace;
}

.fullwindow.font-sans .window .note textarea,
.appearance .font .name.sans  {
	font-family: Arial, Helvetica, sans-serif;
}

.fullwindow.font-lmsans .window .note textarea,
.appearance .font .name.lmsans {
	font-family: "LatinModernSans10Regular", sans-serif;
}

.fullwindow.font-dssans .window .note textarea,
.appearance .font .name.dssans {
	font-family: "DroidSansRegular", sans-serif;
}

.fullwindow.font-museosans .window .note textarea,
.appearance .font .name.museosans {
	font-family: "MuseoSans-500", sans-serif;
}

.fullwindow.font-greyscale .window .note textarea,
.appearance .font .name.greyscale {
	font-family: "GreyscaleBasicRegular", sans-serif;
}

.fullwindow.font-serif .window .note textarea,
.appearance .font .name.serif {
	font-family: "Times New Roman", serif;
}

.fullwindow.font-architect .window .note textarea,
.appearance .font .name.architect {
	font-family: "FluxRegular", sans-serif;
}

.fullwindow.font-arvo .window .note textarea,
.appearance .font .name.arvo {
	font-family: "ArvoRegular", sans-serif;
}

.fullwindow.font-colaborate .window .note textarea,
.appearance .font .name.colaborate {
	font-family: "ColaborateLightRegular", sans-serif;
}

.appearance .font,
.appearance .fontsize {
	font-size: 1.5em;
	background: white;
	color: black;
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	cursor: pointer;
}

/* FONTSIZE ############################################################################ */

.fontsize-10 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-10 {
	font-size: 10px;
	line-height: 1.5;
}

.fontsize-11 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-11 {
	font-size: 11px;
	line-height: 1.4;
}

.fontsize-12 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-12 {
	font-size: 12px;
	line-height: 1.4;
}

.fontsize-13 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-13 {
	font-size: 13px;
	line-height: 1.3;
}

.fontsize-14 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-14 {
	font-size: 14px;
	line-height: 1.3;
}

.fontsize-15 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-15 {
	font-size: 15px;
	line-height: 1.2;
}

.fontsize-16 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-16 {
	font-size: 16px;
	line-height: 1.2
}

/* ############################################################################ */
/* ##### NON THEME STUFF ###################################################### */
/* ############################################################################ */
	
/*SETTINGS*/
.settings {
	background: rgba(0,0,0,0.93);
}
	
	.settings .tabs {
		font-size: 0.8em;
		color: white;
		border-bottom: 1px solid white;
	}
	
	.settings .tabs a {
		color: white;
		text-decoration: none;
	}
	
	.settings .content {
		color: white;
	}

	.appearance .item {
		background: white;
	}
	
	.keyboard_shortcuts {
		color: white;
	}
		
	table .l {
		text-align: left;
		padding-right: 20px;
	}
	
.rh_menu {
	background: #333;
	border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	opacity: 0.9;
	color: white;
}

/* ########### AutoSuggest CSS - Version 1.2 ################ */

ul.as-selections {
	list-style-type: none;
	border-top: 1px solid #888;
	border-bottom: 1px solid #b6b6b6;
	border-left: 1px solid #aaa;
	border-right: 1px solid #aaa;
	padding: 4px 0 4px 4px;
	margin: 0;
	overflow: auto;
	background-color: #fff;
	box-shadow:inset 0 1px 2px #888;
	-webkit-box-shadow:inset 0 1px 2px #888;
	-moz-box-shadow:inset 0 1px 2px #888;
}

ul.as-selections.loading {
	background-color: #eee;
}

ul.as-selections li {
	float: left;
	margin: 1px 4px 1px 0;
}

ul.as-selections li.as-selection-item {
	color: #2b3840;
	font-size: 13px;
	font-family: "Lucida Grande", arial, sans-serif;
	text-shadow: 0 1px 1px #fff;
	background-color: #ddeefe;
	background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ddeefe), to(#bfe0f1));
	border: 1px solid #acc3ec;
	border-top-color: #c0d9e9;
	padding: 2px 7px 2px 10px;
	border-radius: 12px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	box-shadow: 0 1px 1px #e4edf2;
	-webkit-box-shadow: 0 1px 1px #e4edf2;
	-moz-box-shadow: 0 1px 1px #e4edf2;
}

ul.as-selections li.as-selection-item:last-child {
	margin-left: 30px;
}

ul.as-selections li.as-selection-item a.as-close {
	float: right;
	margin: 1px 0 0 7px;
	padding: 0 2px;
	cursor: pointer;
	color: #5491be;
	font-family: "Helvetica", helvetica, arial, sans-serif;
	font-size: 14px;
	font-weight: bold;
	text-shadow: 0 1px 1px #fff;
	-webkit-transition: color .1s ease-in;
}

ul.as-selections li.as-selection-item.blur {
	color: #666666;
	background-color: #f4f4f4;
	background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#f4f4f4), to(#d5d5d5));
	border-color: #bbb;
	border-top-color: #ccc;
	box-shadow: 0 1px 1px #e9e9e9;
	-webkit-box-shadow: 0 1px 1px #e9e9e9;
	-moz-box-shadow: 0 1px 1px #e9e9e9;
}

ul.as-selections li.as-selection-item.blur a.as-close {
	color: #999;
}

ul.as-selections li:hover.as-selection-item {
	color: #2b3840;
	background-color: #bbd4f1;
	background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#bbd4f1), to(#a3c2e5));
	border-color: #6da0e0;
	border-top-color: #8bb7ed;
}

ul.as-selections li:hover.as-selection-item a.as-close {
	color: #4d70b0;
}

ul.as-selections li.as-selection-item.selected {
	border-color: #1f30e4;
}

ul.as-selections li.as-selection-item a:hover.as-close {
	color: #1b3c65;
}

ul.as-selections li.as-selection-item a:active.as-close {
	color: #4d70b0;
}

ul.as-selections li.as-original {
	margin-left: 0;
}

ul.as-selections li.as-original input {
	border: none;
	outline: none;
	font-size: 13px;
	width: 120px;
	height: 18px;
	padding-top: 3px;
}

ul.as-list {
	position: absolute;
	list-style-type: none;
	margin: 2px 0 0 0;
	padding: 0;
	font-size: 14px;
	color: #000;
	font-family: "Lucida Grande", arial, sans-serif;
	background-color: #fff;
	background-color: rgba(255,255,255,0.95);
	z-index: 2;
	box-shadow: 0 2px 12px #222;
	-webkit-box-shadow: 0 2px 12px #222;
	-moz-box-shadow: 0 2px 12px #222;
	border-radius: 5px;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
}

li.as-result-item, li.as-message {
	margin: 0 0 0 0;
	padding: 5px 12px;
	background-color: transparent;
	border: 1px solid #fff;
	border-bottom: 1px solid #ddd;
	cursor: pointer;
	border-radius: 5px;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
}

li:first-child.as-result-item {
	margin: 0;
}

li.as-message {
	margin: 0;
	cursor: default;
}

li.as-result-item.active {
	background-color: #3668d9;
	background-image: -webkit-gradient(linear, 0% 0%, 0% 64%, from(rgb(110, 129, 245)), to(rgb(62, 82, 242)));
	border-color: #3342e8;
	color: #fff;
	text-shadow: 0 1px 2px #122042;
}

li.as-result-item em { 
	font-style: normal; 
	background: #444;  
	padding: 0 2px;
	color: #fff;
}

li.as-result-item.active em { 
	background: #253f7a;  
	color: #fff;
}

/* Webkit Hacks  */
@media screen and (-webkit-min-device-pixel-ratio:0) {	
	ul.as-selections {
		border-top-width: 2px;
	}
	ul.as-selections li.as-selection-item {
		padding-top: 3px;
		padding-bottom: 3px;
	}
	ul.as-selections li.as-selection-item a.as-close {
		margin-top: -1px;
	}
	ul.as-selections li.as-original input {
		height: 19px;
	}
}

/* Opera Hacks  */
@media all and (-webkit-min-device-pixel-ratio:10000), not all and (-webkit-min-device-pixel-ratio:0) {
	ul.as-list {
		border: 1px solid #888;
	}
	ul.as-selections li.as-selection-item a.as-close {
		margin-left: 4px;
		margin-top: 0;
	}
}

/* IE Hacks  */
ul.as-list {
	border: 1px solid #888\9;
}
ul.as-selections li.as-selection-item a.as-close {
	margin-left: 4px\9;
	margin-top: 0\9;
}

/* Firefox 3.0 Hacks */
ul.as-list,  x:-moz-any-link, x:default { 
	border: 1px solid #888;
}
BODY:first-of-type ul.as-list, x:-moz-any-link, x:default { /* Target FF 3.5+ */
	border: none;
}