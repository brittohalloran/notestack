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
			'note-border' 			=> '1px solid rgba(0,0,0,0.6)',
			'note-boxshadow' 		=> 'none',
			'note-buttons-color' 	=> 'rgba(255,255,255,1)',
			'note-textarea-bg' 		=> 'white',
			'default-font' 			=> '"courier new", monospace',
			'tag-area-bg' 			=> 'white',
			'tag-bg' 				=> '#CCC',
			'tag-border' 			=> 'rgba(0,0,0,0.2)',
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
			'highlight-text-style'  => 'text-shadow: 0px 1px 0px rgba(0,0,0,0.1);',
			'highlight-bg' 			=> "-moz-linear-gradient(top,#F29101,#E68901); 
										background: -o-linear-gradient(top,#F29101,#E68901);
										background: -webkit-gradient(linear,left top,left bottom,from(#F29101),to(#E68901));", 
			'note-bg' 				=> 'rgba(30,30,30,0.5)',
			'note-current-bg' 		=> 'rgba(30,30,30,0.95)',
			'note-edit-bg' 			=> 'rgba(100,100,100,0.95)',
			'note-edit-border'		=> '1px solid #4D90FE',
			'note-border-rad-px' 	=> '10',
			'note-border' 			=> '1px solid rgba(0,0,0,0.5)',
			'note-boxshadow' 		=> '5px 5px 10px rgba(0,0,0,0.3)',
			'note-textarea-bg' 		=> 'url(../images/moleskine.jpg)',
			'default-font' 			=> '"courier new", monospace',
			'tag-area-bg' 			=> 'url(../images/moleskine.jpg)',
			'tag-bg' 				=> 'rgba(255,255,255,0.2)',
			'tag-border' 			=> '1px solid rgba(0,0,0,0.5)',
			'note-buttons-color' 	=> 'white',
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
			'note-buttons-color' 	=> 'rgba(0,0,0,0.8)',
			'note-boxshadow' 		=> '5px 5px 10px rgba(0,0,0,0.3)',
			'note-textarea-bg' 		=> 'white',
			'default-font' 			=> '"courier new", monospace',
			'tag-area-bg' 			=> 'white',
			'tag-bg' 				=> 'rgba(100,100,100,0.2)',
			'tag-border' 			=> '1px solid rgba(0,0,0,0.1)',
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
			'note-border-rad-px' 	=> '5',
			'note-border' 			=> '1px solid rgba(255,255,255,0.2)',
			'note-buttons-color' 	=> 'white',
			'note-boxshadow' 		=> '5px 5px 10px rgba(0,0,0,0.3)',
			'note-textarea-bg' 		=> '#FFFFD9',
			'default-font' 			=> '"MuseoSans-500", sans-serif',
			'tag-area-bg' 			=> '#FFFFD9',
			'tag-bg' 				=> 'rgba(100,100,100,0.2)',
			'tag-border' 			=> '1px solid rgba(0,0,0,0.1)',
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
	.theme-<?php echo $theme; ?> .window .current.highlight,
	.theme-<?php echo $theme; ?> .versions {
		background: <?php echo $options['note-edit-bg']; ?>;
	}
	
	/*ACTUAL NOTE TEXT*/
	.theme-<?php echo $theme; ?> .window .note textarea,
	.theme-<?php echo $theme; ?> .labels .inner,
	.theme-<?php echo $theme; ?> .versions .inner {
		font-family: <?php echo $options['default-font']; ?>;
		line-height: 1.5;
		background: <?php echo $options['note-textarea-bg']; ?>;
		border: <?php echo $options['note-border']; ?>;
	}
	
		/*NOTE TEXTAREA WHEN FOCUSED*/
		.theme-<?php echo $theme; ?> .window .note textarea:focus {
			outline: none;
			border: <?php echo $options['note-edit-border']; ?>;
		}
	
	/*MAXIMIZE AND HISTORY BUTTON*/
	.theme-<?php echo $theme; ?> .window .note .maximize,
	.theme-<?php echo $theme; ?> .window .note .versions-button,
	.theme-<?php echo $theme; ?> .window .note .delete {
		border-bottom: 1px solid <?php echo $options['note-buttons-color']; ?>;
		border-right: 1px solid <?php echo $options['note-buttons-color']; ?>;
		border-left: 1px solid <?php echo $options['note-buttons-color']; ?>;
		color: <?php echo $options['note-buttons-color']; ?>;
	}
	
	/*NOTE MESSAGE*/
	.theme-<?php echo $theme; ?> .window .note .message {
		background: <?php echo $options['highlight-bg']; ?>;
		color: <?php echo $options['highlight-text-color']; ?>;
		<?php echo $options['highlight-text-style']; ?>
	}
	
		/*MESSAGE LINKS*/
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

.fullwindow.fontsize-10 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-10 {
	font-size: 10px;
}

.fullwindow.fontsize-11 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-11 {
	font-size: 11px;
}

.fullwindow.fontsize-12 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-12 {
	font-size: 12px;
}

.fullwindow.fontsize-13 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-13 {
	font-size: 13px;
}

.fullwindow.fontsize-14 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-14 {
	font-size: 14px;
}

.fullwindow.fontsize-15 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-15 {
	font-size: 15px;
}

.fullwindow.fontsize-16 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-16 {
	font-size: 16px;
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