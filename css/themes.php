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



/* ########## THEME OPTIONS ########## */
<?PHP 
	
	$themes = array(
		'clean' => array(
			'window-bg' 			=> "white",
			'sidebar-bg' 			=> '#262626',
			'sidebar-boxshadow' 	=> '5px 0px 10px rgba(0,0,0,0.1)',
			'sidebar-borders'		=> '1px solid white',
			'listnote-text-color' 	=> 'white',
			'listnote-font' 		=> '"DroidSansRegular", sans-serif',
			'listnote-title-style' 	=> 'text-transform: uppercase;',
			'listnote-hover-bg'		=> '#525252',
			'pin-icon'				=> 'url(/images/pin-white.png) center no-repeat',
			'highlight-text-color' 	=> 'white', // same as non-highlight
			'highlight-text-style'  => 'text-shadow: 0px 1px 0px rgba(255,255,255,0.1);',
			'highlight-bg' 			=> "-moz-linear-gradient(top,#F29101,#E68901); 
										background: -o-linear-gradient(top,#F29101,#E68901);
										background: -webkit-gradient(linear,left top,left bottom,from(#F29101),to(#E68901));", 
			'note-bg' 				=> 'none',
			'note-current-bg' 		=> 'none',
			'note-edit-bg' 			=> 'rgba(150,150,150,0.1)',
			'note-edit-border'		=> '1px solid rgba(0,0,0,0)',
			'note-border-rad-px' 	=> '0',
			'note-border' 			=> '1px solid rgba(0,0,0,0)',
			'note-buttons-color' 	=> 'none',
			'note-buttons-simple' 	=> 'true',
			'note-boxshadow' 		=> 'none',
			'note-textarea-bg' 		=> 'none',
			'textarea-box-shadow'	=> 'none',
			'textarea-border-top'	=> 'none',
			'textarea-highlight-bg' => '#F29101' ,
      		'textarea-highlight-color' => '#222222' ,
			'font-mono'				=> '"DroidSansMonoRegular", monospace',
			'font-sans'				=> '"DroidSansRegular", sans-serif',
			'font-serif'			=> '"courier new", monospace',
			'button-border'			=> 'none',
			'button-bg'				=> '#262626',
			'button-color'			=> 'white',
			'button-hover-bg'		=> '#F29101',
			'button-add-icon'		=>	'url(/images/plus-white.png) center no-repeat',
			'button-reload-icon'	=>	'url(/images/reload-white.png) center no-repeat',
			'button-tag-icon'		=>	'url(/images/tag-white.png) center no-repeat',
			'button-action-icon'	=>	'url(/images/actionoverflow-white.png) center no-repeat',
			'default-font' 			=> '"courier new", monospace',
			'markdown-header-style'	=> 'font-family: "Museo500";
										text-transform: uppercase;
										font-weight: normal;',
			'markdown-body-style'	=>	'font-family: "MuseoSans-500";',
			'tag-area-bg' 			=> 'url(../images/moleskine.jpg)',
			'tag-bg' 				=> '#262626',
			'tag-border' 			=> 'none',
			'overlay-bg'			=> 'rgba(255,255,255,0.95)',
			'show-non-current'		=> 'false',
			'theme-card-inner-bg' 	=> 'white',
			'theme-card-outer-bg'	=> 'rgba(30,30,30,1)',
			'theme-card-border' 	=> '1px solid rgba(244,241,232,0.3)'
		),
		'hacker' => array(
			'window-bg' 			=> "rgba(0,0,0,1)",
			'sidebar-bg' 			=> 'rgba(0,0,0,0.1)',
			'sidebar-boxshadow' 	=> '5px 0px 10px rgba(0,0,0,0.1)',
			'sidebar-borders'		=> '1px solid rgba(0,0,0,0.2)',
			'listnote-text-color' 	=> '#454545',
			'listnote-font' 		=> '"MuseoSans-500", sans-serif',
			'listnote-title-style' 	=> 'text-transform: uppercase;',
			'pin-icon'				=> 'url(/images/pin-white.png) center no-repeat',
			'highlight-text-color' 	=> '#454545', // same as non-highlight
			'highlight-text-style'  => 'text-shadow: 0px 1px 0px rgba(255,255,255,0.1);',
			'highlight-bg' 			=> "-moz-linear-gradient(top,#F29101,#E68901); 
										background: -o-linear-gradient(top,#F29101,#E68901);
										background: -webkit-gradient(linear,left top,left bottom,from(#F29101),to(#E68901));", 
			'note-bg' 				=> 'none',
			'note-current-bg' 		=> 'none',
			'note-edit-bg' 			=> 'none',
			'note-edit-border'		=> '1px solid rgba(0,0,0,0)',
			'note-border-rad-px' 	=> '0',
			'note-border' 			=> '1px solid rgba(0,0,0,0)',
			'note-buttons-color' 	=> 'none',
			'note-buttons-simple' 	=> 'true',
			'note-boxshadow' 		=> 'none',
			'note-textarea-bg' 		=> 'none',
			'note-text-color' 		=> 'rgba(0,255,0,1)',
			'textarea-box-shadow'	=> 'none',
			'textarea-border-top'	=> 'none',
			'textarea-highlight-bg' => '#F29101' ,
      		'textarea-highlight-color' => '#222222' ,
			'button-border'			=> '1px solid #333',
			'button-bg'				=> 'rgba(255,255,255,0.1)',
			'button-hover-bg'		=> 'rgba(255,255,255,0.2)',
			'button-add-icon'		=>	'url(/images/plus-white.png) center no-repeat',
			'button-reload-icon'	=>	'url(/images/reload-white.png) center no-repeat',
			'button-tag-icon'		=>	'url(/images/tag-white.png) center no-repeat',
			'button-action-icon'	=>	'url(/images/actionoverflow-white.png) center no-repeat',
			'default-font' 			=> '"courier new", monospace',
			'markdown-header-style'	=> 'font-family: "Museo500";
										text-transform: uppercase;
										font-weight: normal;',
			'markdown-body-style'	=>	'font-family: "MuseoSans-500";',
			'tag-area-bg' 			=> 'url(../images/moleskine.jpg)',
			'tag-bg' 				=> 'rgba(255,255,255,0.8)',
			'tag-border' 			=> '1px solid rgba(0,0,0,0.5)',
			'overlay-bg'			=> 'rgba(30,30,30,0.95)',
			'show-non-current'		=> 'false',
			'theme-card-inner-bg' 	=> 'black',
			'theme-card-outer-bg'	=> 'black',
			'theme-card-border' 	=> '1px solid rgba(244,241,232,0.3)'
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
}
	.theme-<?php echo $theme; ?> .sidebar {
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
			color: <?php echo $options['listnote-text-color']; ?>;
			font-family: <?php echo $options['listnote-font']; ?>;
		}

	/*SIDEBAR NOTE TEXT*/
	.theme-<?php echo $theme; ?> .list .listnote,
	.theme-<?php echo $theme; ?> .versions .versions-left .version-item {
		border-bottom: <?php echo $options['sidebar-borders']; ?>;
		font-size: 0.8em;
		color: <?php echo $options['listnote-text-color']; ?>;
	}
		.theme-<?php echo $theme; ?> .list .listnote:hover,
		.theme-<?php echo $theme; ?> .versions .versions-left .version-item:hover {
			background: <?php echo $options['listnote-hover-bg']; ?>;
		}
		/*SIDEBAR NOTE FONT*/
		.theme-<?php echo $theme; ?> .listnote .title,
		.theme-<?php echo $theme; ?> .listnote .preview {
			font-family: <?php echo $options['listnote-font']; ?>;
		}
	
	/*SELECTED NOTE IN SIDEBAR AND SETTINGS PANE*/
	.theme-<?php echo $theme; ?> .list .listnote.selected,
	.theme-<?php echo $theme; ?> .labels .item.label-select,
	.theme-<?php echo $theme; ?> .versions .versions-left .version-select,
	.theme-<?php echo $theme; ?> .versions .versions-left .version-select:hover	{
		background: <?php echo $options['highlight-bg']; ?>;
		color: <?php echo $options['highlight-text-color']; ?>;
		<?php echo $options['highlight-text-style']; ?>
	}
	
		.theme-<?php echo $theme; ?> .list .listnote .title{
			<?php echo $options['listnote-title-style']; ?>
		}
		
		.theme-<?php echo $theme; ?> .list .listnote.pinned>.pinboard {
			background: <?php echo $options['pin-icon']; ?>;
		}
	
	/*BUTTON STYLES*/
	.theme-<?php echo $theme; ?> .button {
		border: <?php echo $options['button-border']; ?>;
		cursor: pointer;
		background-color: <?php echo $options['button-bg']; ?>; 
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
	}
		.theme-<?php echo $theme; ?> .button:hover {
			background-color: <?php echo $options['button-hover-bg']; ?>; 
		}
	
	/*ADD NOTE BUTTON*/
	.theme-<?php echo $theme; ?> .sidebar .addnote .inner {
		background: <?php echo $options['button-add-icon']; ?>;
	}
	
	/*RELOAD BUTTON*/
	.theme-<?php echo $theme; ?> .sidebar .reload .inner {
		background: <?php echo $options['button-reload-icon']; ?>;
	}
	
	/*TAG BUTTON*/
	.theme-<?php echo $theme; ?> .sidebar .tags .inner {
		background: <?php echo $options['button-tag-icon']; ?>;
	}
	
	/*SIDEBAR HIDER BUTTON*/
	.theme-<?php echo $theme; ?> .sidebar-hider {
		border-left: none;
		-webkit-border-top-left-radius: 0px;
		-webkit-border-bottom-left-radius: 0px;
		-moz-border-radius-topleft: 0px;
		-moz-border-radius-bottomleft: 0px;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
	}
	
	/*ACTION OVERFLOW BUTTON*/
	.theme-<?php echo $theme; ?> .actionoverflow {
		background: <?php echo $options['button-action-icon']; ?>;
		background-color: <?php echo $options['button-bg']; ?>;
	}
		.theme-<?php echo $theme; ?> .actionoverflow:hover {
			background-color: <?php echo $options['button-hover-bg']; ?>;
		}
		.theme-<?php echo $theme; ?> .actionoverflow .buttons,
		.theme-<?php echo $theme; ?> .actionoverflow:hover .buttons {
			color: <?php echo $options['button-color']; ?>;
			background: <?php echo $options['button-bg']; ?>;
			-webkit-border-radius: 3px;
			-moz-border-radius: 3px;
			border-radius: 3px;
		}
	
	/*BUTTONS IN VERSION TOOLBAR*/
	.theme-<?php echo $theme; ?> .versions-toolbar .button {
		text-align: center;
		color: <?php echo $options['button-color']; ?>;
		background: <?php echo $options['button-bg']; ?>; 
	}
		.theme-<?php echo $theme; ?> .versions-toolbar .button-first {
			-webkit-border-top-right-radius: 0px;
			-webkit-border-bottom-right-radius: 0px;
			-moz-border-radius-topright: 0px;
			-moz-border-radius-bottomright: 0px;
			border-top-right-radius: 0px;
			border-bottom-right-radius: 0px;
		}
		.theme-<?php echo $theme; ?> .versions-toolbar .button-last {
			-webkit-border-top-left-radius: 0px;
			-webkit-border-bottom-left-radius: 0px;
			-moz-border-radius-topleft: 0px;
			-moz-border-radius-bottomleft: 0px;
			border-top-left-radius: 0px;
			border-bottom-left-radius: 0px;
		}
		.theme-<?php echo $theme; ?> .versions-toolbar .button:hover {
			background-color: <?php echo $options['listnote-hover-bg']; ?>;
		}
		.theme-<?php echo $theme; ?> .versions-toolbar .button.depressed,
		.theme-<?php echo $theme; ?> .versions-toolbar .button:active,
		.theme-<?php echo $theme; ?> .versions-toolbar .button:focus {
			background-color: <?php echo $options['button-hover-bg']; ?>;
			box-shadow: inset 0px 0px 3px rgba(0,0,0,0.1);
		}
	
	/*TAG / LABEL OVERLAY*/
	.theme-<?php echo $theme; ?> .labels .items {
		background: <?php echo $options['sidebar-bg']; ?>;
	}
		.theme-<?php echo $theme; ?> .labels .item {
			border-bottom: <?php echo $options['sidebar-borders']; ?>;
			color: <?php echo $options['listnote-text-color']; ?>
		}
		.theme-<?php echo $theme; ?> .labels .item:hover {
			background: <?php echo $options['listnote-hover-bg']; ?>;
		}
		.theme-<?php echo $theme; ?> .labels .item.item-select {
			background: <?php echo $options['highlight-bg']; ?>;
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

	<?php if ($options['show-non-current'] == 'false') { ?>
	/*HIDE NON-CURRENT NOTES*/
	.theme-<?php echo $theme; ?> .window .note {
		display: none;
	}
	<?php }; ?>

	/*FRAME AROUND SELECTED NOTE CARD*/
	.theme-<?php echo $theme; ?> .window .current.note {
		background: <?php echo $options['note-current-bg']; ?>;
		display: block;
	}

	/*FRAME AROUND NOTE WHEN EDITING*/
	.theme-<?php echo $theme; ?> .window .current.highlight {
		background: <?php echo $options['note-edit-bg']; ?>;
		border: <?php echo $options['note-edit-border']; ?>;
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
	
		.theme-<?php echo $theme; ?> .window .note .textarea textarea {
			color: <?php echo $options['note-text-color']; ?>;
		}
	
		.theme-<?php echo $theme; ?> .window .note .textarea {
			box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
			-webkit-box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
			-moz-box-shadow: <?php echo $options['textarea-box-shadow']; ?>;
			border-top: <?php echo $options['textarea-border-top']; ?>;
		}
		.theme-<?php echo $theme; ?> .window .note .textarea .ta-inner,
		.theme-<?php echo $theme; ?> .window .note .markdown {
			border-bottom: 2px solid #262626;
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
	
		
		.theme-<?php echo $theme; ?> .window .note.pinned .pin-button,
		.theme-<?php echo $theme; ?> .window .note.markdown-on .markdown-button {
			<?php if ($options['note-buttons-simple'] == 'true') { ?>
				background: rgba(0,0,0,0.2);
				box-shadow: none;
			<?php }; ?>
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

	/*TAG AREA*/
	.theme-<?php echo $theme; ?> .window .note .tag-area {
		border-top: none;
	}
	
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

/*MONO FONT*/
.theme-<?php echo $theme; ?>.font-mono .window .note textarea,
.appearance .font .name.mono {
	font-family: <?php echo $options['font-mono']; ?>;
}

/*SANS FONT*/
.theme-<?php echo $theme; ?>.font-sans .window .note textarea,
.appearance .font .name.sans {
	font-family: <?php echo $options['font-sans']; ?>;
}

/*SERIF FONT*/
.theme-<?php echo $theme; ?>.font-serif .window .note textarea,
.appearance .font .name.serif {
	font-family: <?php echo $options['font-serif']; ?>;
}

<?php }; //end foreach theme loop ?> 

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

.fontsize-17 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-17 {
	font-size: 17px;
	line-height: 1.2
}

.fontsize-18 .window .note .textarea textarea,
.appearance .fontsize .name.fontsize-18 {
	font-size: 18px;
	line-height: 1.2
}

/* ############################################################################ */
/* ##### NON THEME STUFF ###################################################### */
/* ############################################################################ */
	
/*SETTINGS*/
.settings {
	background: #262626;
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
			font-size: 14px;
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