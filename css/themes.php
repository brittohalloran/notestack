<?php header("Content-type: text/css"); ?>

/* STYLE ################################################################## */

a {
	text-decoration: none;
	color: inherit;
	border-bottom: 1px dotted black;
	-webkit-transition:background 0.25s ease-in;  
	-moz-transition:background 0.25s ease-in;  
	-o-transition:background 0.25s ease-in;  
	transition:background 0.25s ease-in; 
}

a:hover {
	background: #FFFBCC;
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
			'note-border' 			=> '1px solid rgba(50,50,50,0.6)',
			'note-boxshadow' 		=> '2px 2px 16px rgba(0,0,0,0.6)',
			'note-buttons-color' 	=> 'rgba(50,50,50,0.6)', 
			'note-textarea-bg' 		=> 'white',
			'textarea-box-shadow'	=> 'inset 0px 0px 10px rgba(0,0,0,0.5)',
			'textarea-highlight-bg' => '#b4d5fe' ,
      		'textarea-highlight-color' => '#222222' ,
			'default-font' 			=> '"courier new", monospace',
			'markdown-header-style'	=> 'font-family: "Museo500";
										text-transform: uppercase;
										font-weight: normal;',
			'markdown-body-style'	=>	'font-family: "MuseoSans-500";',
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
			'note-edit-bg' 			=> 'rgba(255,255,255,0.95)',
			'note-edit-border'		=> '2px solid rgba(0,0,0,0.5)',
			'note-border-rad-px' 	=> '10',
			'note-border' 			=> '1px solid rgba(50,50,50,1)',
			'note-buttons-color' 	=> 'rgba(50,50,50,1)',
			'note-boxshadow' 		=> '2px 2px 16px rgba(0,0,0,0.5)',
			'note-textarea-bg' 		=> 'url(../images/moleskine.jpg)',
			'textarea-box-shadow'	=> 'inset 0px 0px 10px rgba(0,0,0,0.6)',
			'textarea-highlight-bg' => '#F29101' ,
      		'textarea-highlight-color' => '#222222' ,
			'default-font' 			=> '"courier new", monospace',
			'markdown-header-style'	=> 'font-family: "Museo500";
										text-transform: uppercase;
										font-weight: normal;',
			'markdown-body-style'	=>	'font-family: "MuseoSans-500";',
			'tag-area-bg' 			=> 'url(../images/moleskine.jpg)',
			'tag-bg' 				=> 'rgba(255,255,255,0.8)',
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
			'note-current-bg' 		=> "#F2F2F2",
			'note-edit-bg' 			=> 'rgba(200,200,200,0.95)',
			'note-edit-border'		=> '1px solid #4D90FE',
			'note-border-rad-px' 	=> '5',
			'note-border' 			=> '1px solid rgba(0,0,0,0.3)',
			'note-buttons-color' 	=> 'rgba(0,0,0,0.3)',
			'note-boxshadow' 		=> '2px 2px 16px rgba(0,0,0,0.6)',
			'note-textarea-bg' 		=> 'white',
			'textarea-box-shadow'	=> 'inset 1px 1px 5px rgba(0,0,0,0.2)',
			'textarea-highlight-bg' => '#b4d5fe' ,
      		'textarea-highlight-color' => '#222222' ,
			'default-font' 			=> '"courier new", monospace',
			'markdown-header-style'	=> 'font-family: "Museo500";
										text-transform: uppercase;
										font-weight: normal;',
			'markdown-body-style'	=>	'font-family: "MuseoSans-500";',
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
			'note-border' 			=> '1px solid rgba(168, 122, 44, 0.8)',
			'note-buttons-color' 	=> 'rgba(0, 0, 0, 0.4)',
			'note-boxshadow' 		=> '2px 2px 16px rgba(0,0,0,0.6)',
			'note-textarea-bg' 		=> '#FFFFD9',
			'textarea-box-shadow'	=> 'inset 1px 1px 5px rgba(0,0,0,0.4)',
			'textarea-highlight-bg' => '#b4d5fe' ,
      		'textarea-highlight-color' => '#222222' ,
			'default-font' 			=> '"MuseoSans-500", sans-serif',
			'markdown-header-style'	=> 'font-family: "Museo300";
										text-transform: uppercase;
										font-weight: normal;',
			'markdown-body-style'	=>	'font-family: "MuseoSans-500";',
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
.theme-<?php echo $theme; ?> .fullwindow {
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
	
	/*FILTER STATUS BAR*/
	.theme-<?php echo $theme; ?> .active-tag-filter {
		border-bottom: <?php echo $options['sidebar-borders']; ?>;
	}
		.theme-<?php echo $theme; ?> .active-tag-filter span {
			font-family: <?php echo $options['listnote-font']; ?>;
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
		border: <?php echo $options['note-border']; ?>;
	}
		.theme-<?php echo $theme; ?> .window .note .textarea {
			box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
			-webkit-box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
			-moz-box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
		}

    .theme-<?php echo $theme; ?> .window .note .textarea textarea::selection,
    .theme-<?php echo $theme; ?> .window .note .textarea textarea::-moz-selection {
      background-color: <?php echo $options['textarea-highlight-bg']; ?>;
      /*color: <?php echo $options['textarea-highlight-color']; ?>;*/
    }	

		/*NOTE TEXTAREA WHEN FOCUSED*/
		.theme-<?php echo $theme; ?> .window .note .textarea textarea:focus {
			outline: none;
			border: none;
		}
		
		/* NOTE HEADERS DURING MARKDOWN */
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown h1,
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown h2,
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown h3,
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown h4,
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown h5,
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown h6 {
			<?php echo $options['markdown-header-style']; ?>
		}
		
		/* NOTE BODY DURING MARKDOWN */
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown p,
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown li,
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown ul,
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown ol,
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown a,
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown strong,
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown em {
			<?php echo $options['markdown-body-style']; ?>
		}
			.theme-<?php echo $theme; ?> .window .note .textarea .markdown strong {
				background: rgba(0,0,0,0.1);
				padding: 0px 3px;
			}
			.theme-<?php echo $theme; ?> .window .note .textarea .markdown em {
				background: rgba(0,0,0,0.1);
				padding: 0px 3px;
			}
		
		/* MARKDOWN LISTS */
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown ul li {
			list-style: none;
		}
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown ul li:before {
			content: "\00BB" "\0020";
		}
		
		/* MARKDOWN BLOCKQUOTE */
		.theme-<?php echo $theme; ?> .window .note .textarea .markdown blockquote {
			padding: 0 20px;
			font-style: italic;
		}
	
	/*MAXIMIZE AND HISTORY BUTTON*/
	.theme-<?php echo $theme; ?> .window .note .maximize,
	.theme-<?php echo $theme; ?> .window .note .versions-button,
	.theme-<?php echo $theme; ?> .window .note .delete,
	.theme-<?php echo $theme; ?> .window .note .pin-button,
	.theme-<?php echo $theme; ?> .window .note .markdown-button {
		border: 1px solid <?php echo $options['note-buttons-color']; ?>;
		color: black;
		background: linear-gradient(bottom, #BFBFBF, #D9D9D9);
		background: -webkit-gradient(linear, left bottom, left top, from(#BFBFBF), to(#D9D9D9));
		background: -moz-linear-gradient(bottom, #BFBFBF, #D9D9D9);
	}
		.theme-<?php echo $theme; ?> .window .note.pinned .pin-button,
		.theme-<?php echo $theme; ?> .window .note.markdown-on .markdown-button {
			/*color: <?php echo $options['highlight-text-color']; ?>;
			background: <?php echo $options['highlight-bg']; ?>;*/
			background: linear-gradient(bottom, #BFBFBF, #A9A9A9);
			background: -webkit-gradient(linear, left bottom, left top, from(#BFBFBF), to(#A9A9A9));
			background: -moz-linear-gradient(bottom, #BFBFBF, #A9A9A9);
			box-shadow: inset 0px 0px 3px rgba(0,0,0,0.3);
			-webkit-box-shadow: inset 0px 0px 3px rgba(0,0,0,0.3);
			-moz-box-shadow: inset 0px 0px 3px rgba(0,0,0,0.3);
		}
		.theme-<?php echo $theme; ?> .window .note .maximize:hover,
		.theme-<?php echo $theme; ?> .window .note .versions-button:hover,
		.theme-<?php echo $theme; ?> .window .note .delete:hover,
		.theme-<?php echo $theme; ?> .window .note .pin-button:hover,
		.theme-<?php echo $theme; ?> .window .note .markdown-button:hover {
			color: <?php echo $options['highlight-text-color']; ?>;
			background: <?php echo $options['highlight-bg']; ?>;
			
		}
	
	/*NOTE MESSAGE*/
	.theme-<?php echo $theme; ?> .window .note .message {
		background: <?php echo $options['highlight-bg']; ?>;
		color: <?php echo $options['highlight-text-color']; ?>;
		<?php echo $options['highlight-text-style']; ?>
	}
	
		/*NOTE MESSAGE LINKS*/
		.theme-<?php echo $theme; ?> .window .note .message a {
			color: <?php echo $options['highlight-text-color']; ?>;
			text-decoration: underline;
		}

	/*TAG AREA
	.theme-<?php echo $theme; ?> .window .note .tag-area {
		border: <?php echo $options['note-border']; ?>;
		background: <?php echo $options['tag-area-bg']; ?>;
		box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
		-webkit-box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
		-moz-box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
	}*/
	
	/*TAG AREA BACKGROUND*/
	.theme-<?php echo $theme; ?> .window .note .tagsinput {
		background: transparent;
	}
	
		/*INDIVIDUAL TAG BACKGROUND*/
		.theme-<?php echo $theme; ?> .tagit-choice {
			border: <?php echo $options['tag-border']; ?>;
			background: <?php echo $options['tag-bg']; ?>;
			border-radius: 4px;
			-moz-border-radius: 4px;
			-webkit-border-radius: 4px;
			cursor: pointer;
		}
		
			/*INDIVIDUAL TAG TEXT*/
			.theme-<?php echo $theme; ?> .tagit-label {
				color: <?php echo $options['listnote-text-color']; ?>;
				font-family: <?php echo $options['listnote-font']; ?>;
				font-size: 0.8em;
			}
			.theme-<?php echo $theme; ?> .tagit-choice .close {
				right: 4px;
				color: <?php echo $options['listnote-text-color']; ?>;
			}
			
			/*AUTOCOMPLETE*/
			.theme-<?php echo $theme; ?> .ui-autocomplete {
				width: 175px;
				border: 1px solid rgba(0,0,0,0.1);
				border-radius: 5px;
				padding: 2px;
				background: <?php echo $options['sidebar-bg']; ?>;
			}
				.theme-<?php echo $theme; ?> .ui-autocomplete li {
					font-size: 0.8em;
					list-style: none;
				}
					.theme-<?php echo $theme; ?> .ui-autocomplete li a {
						display: block;
						height: 20px;
						line-height: 20px;
						padding: 0px 5px;
						border-radius: 3px;
						color: <?php echo $options['listnote-text-color']; ?>;
						font-family: <?php echo $options['listnote-font']; ?>;
						-webkit-transition: none;  
						-moz-transition: none;  
						-o-transition: none;  
						transition: none; 
					}
					.theme-<?php echo $theme; ?> .ui-autocomplete li a.ui-state-hover {
						background: <?php echo $options['highlight-bg']; ?>;
						color: <?php echo $options['highlight-text-color']; ?>;
						<?php echo $options['highlight-text-style']; ?>
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
	
		/*PROGRESS BAR*/
		.theme-<?php echo $theme; ?> .status .progress .inner {
			background: <?php echo $options['highlight-bg']; ?>;
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

.font-mono .window .note textarea,
.appearance .font .name.mono {
	font-family: "Courier New", Courier, monospace;
}

.font-veramono .window .note textarea,
.appearance .font .name.veramono {
	font-family: "BitstreamVeraSansMonoRoman", "Courier New", Courier, monospace;
}

.font-lmmono .window .note textarea,
.appearance .font .name.lmmono {
	font-family: "LatinModernMono10Regular", monospace;
}

.font-dsmono .window .note textarea,
.appearance .font .name.dsmono {
	font-family: "DroidSansMonoRegular", monospace;
}

.font-sans .window .note textarea,
.appearance .font .name.sans  {
	font-family: Arial, Helvetica, sans-serif;
}

.font-lmsans .window .note textarea,
.appearance .font .name.lmsans {
	font-family: "LatinModernSans10Regular", sans-serif;
}

.font-dssans .window .note textarea,
.appearance .font .name.dssans {
	font-family: "DroidSansRegular", sans-serif;
}

.font-museosans .window .note textarea,
.appearance .font .name.museosans {
	font-family: "MuseoSans-500", sans-serif;
}

.font-greyscale .window .note textarea,
.appearance .font .name.greyscale {
	font-family: "GreyscaleBasicRegular", sans-serif;
}

.font-serif .window .note textarea,
.appearance .font .name.serif {
	font-family: "Times New Roman", serif;
}

.font-architect .window .note textarea,
.appearance .font .name.architect {
	font-family: "FluxRegular", sans-serif;
}

.font-arvo .window .note textarea,
.appearance .font .name.arvo {
	font-family: "ArvoRegular", sans-serif;
}

.font-colaborate .window .note textarea,
.appearance .font .name.colaborate {
	font-family: "ColaborateLightRegular", sans-serif;
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
		border-bottom: none;
	}
		.settings .tabs a:hover {
			background: rgb(100,100,100);
		}
	
	.settings .content {
		color: white;
	}
	
		.settings .content a {
			border-bottom: 1px dotted white;
		}
			.settings .content a:hover {
				background: rgb(100,100,100);
			}

	.appearance .item {
		background: white;
	}
	
		.appearance .font,
		.appearance .fontsize,
		.appearance .sortby,
		.appearance .tag-pref {
			font-size: 1.5em;
			background: white;
			color: black;
			border-radius: 5px;
			-moz-border-radius: 5px;
			-webkit-border-radius: 5px;
			cursor: pointer;
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

/* TAGIT PLUGIN */
ul.tagit {
	padding: 1px 5px;
	overflow: auto;
    margin-left: inherit; /* usually we don't want the regular ul margins. */
    margin-right: inherit;
}
ul.tagit li {
	display: block;
	float: left;
	margin: 2px 5px 2px 0;
}
ul.tagit li.tagit-choice {
	padding: .2em 18px .2em .5em;
    position: relative;
    line-height: inherit;
}
ul.tagit li.tagit-new {
	padding: .25em 4px .25em 0;
}

ul.tagit li.tagit-choice a.tagit-label {
	cursor: pointer;
	text-decoration: none;
}
ul.tagit li.tagit-choice .close {
	cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top: -8px;
    border-bottom: none;
}

ul.tagit li.tagit-choice input {
	display: block;
	float: left;
	margin: 2px 5px 2px 0;
}
ul.tagit input[type="text"] {
    -moz-box-sizing:    border-box;
    -webkit-box-sizing: border-box;
    box-sizing:         border-box;

    border: none;
	margin: 0;
	padding: 0;
	width: inherit;
	background-color: inherit;
    outline: none;
}