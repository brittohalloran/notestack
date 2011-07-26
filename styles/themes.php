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

/* THEME VARIABLES ########## */
<?PHP 
	$themes = array('$android','$moleskine','$gmail','$earthy');
	
	// ANDROID
	// MOLESKINE
	$moleskine = array(
		'highlight_color' => '#',
	);
?>

/* DEFAULT THEME1 ################################################################## */

/*BACKGROUND BEHIND NOTES*/
.fullwindow.theme-1 {
	background: linear-gradient(bottom, #FCFCFC, #DBDBDB);
	background: -webkit-gradient(linear, left bottom, left top, from(#FCFCFC), to(#DBDBDB));
	background: -moz-linear-gradient(bottom, #FCFCFC, #DBDBDB);
}

/*SIDEBAR BACKGROUND*/
.fullwindow.theme-1 .sidebar,
.appearance .item.theme-1 .inner {
	background: gray;
}

	/*SEARCH AREA*/
	.fullwindow.theme-1 .search {
		border-bottom: 1px solid #333;
	}

	/*SIDEBAR NOTE TEXT*/
	.fullwindow.theme-1 .list .listnote {
		border-bottom: 1px solid #CCC;
		font-size: 0.8em;
		color: white;
	}
	
	/*SELECTED NOTE IN SIDEBAR AND SETTINGS PANE*/
	.fullwindow.theme-1 .list .listnote.selected,
	.labels .item.label-select,
	.appearance .item.theme-1 {
		background: #8AC8FF; 
	}
	
		.fullwindow.theme-1 .list .listnote .title{
			font-weight:bold;
		}
		
		.fullwindow.theme-1 .list .listnote.pinned>.pinboard {
			background: url(../images/rsz_pin.png) no-repeat center;
		}

/*FRAME AROUND UNSELECTED NOTES (PARTIALLY OFFSCREEN)*/
.fullwindow.theme-1 .window .note {
	background: rgba(128,128,128,0.5);
	border: none;
	border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
}

	/*FRAME AROUND SELECTED NOTE*/
	.fullwindow.theme-1 .window .current.note {
		background: rgba(128,128,128,0.80);
	}

	/*FRAME AROUND NOTE WHEN EDITING*/
	.fullwindow.theme-1 .window .current.highlight {
		background: rgba(138, 200, 255,0.80);
	}
	
	/*ACTUAL NOTE TEXT*/
	.fullwindow.theme-1 .window .note textarea {
		font-family: courier new;
		line-height: 1.5;
	}

/*TOOLBAR*/
.fullwindow.theme-1 .toolbar {
	font-size: 0.8em;
}
	
	/*USERDATA*/
	.fullwindow.theme-1 .toolbar .userdata {
		color: black;
	}

	/*STATUS ICON*/
	.fullwindow.theme-1 .status-div.loading .status-icon {
		background: url('../images/loading5.gif') no-repeat;
	}
	
	/*STATUS MESSAGE*/
	.fullwindow.theme-1 .status {
		text-transform: lowercase;
	}

	
/* ANDROID THEME ################################################################## */

/*MAIN BACKGROUND BEHIND NOTES*/
.fullwindow.theme-android {
	background: linear-gradient(bottom, #FCFCFC, #DBDBDB);
	background: -webkit-gradient(linear, left bottom, left top, from(#FCFCFC), to(#DBDBDB));
	background: -moz-linear-gradient(bottom, #FCFCFC, #DBDBDB);
}

/*SIDEBAR BACKGROUND*/
.fullwindow.theme-android .sidebar,
.appearance .item.theme-android .inner {
	background: #636363;
}

	/*SEARCH AREA*/
	.fullwindow.theme-android .search {
		border-bottom: 1px solid #333;
	}

	/*SIDEBAR NOTE TEXT*/
	.fullwindow.theme-android .list .listnote {
		border-bottom: 1px solid #CCC;
		font-size: 0.8em;
		color: white;
	}
	
	/*SELECTED NOTE IN SIDEBAR AND SETTINGS PANE*/
	.fullwindow.theme-android .list .listnote.selected,
	.labels .item.label-select,
	.appearance .item.theme-android {
		background: #A4C639; 
	}
	
		.fullwindow.theme-android .list .listnote .title{
			font-weight:bold;
		}
		
		.fullwindow.theme-android .list .listnote.pinned>.pinboard {
			background: url(../images/rsz_pin.png) no-repeat center;
		}

/*FRAME AROUND UNSELECTED NOTES (PARTIALLY OFFSCREEN)*/
.fullwindow.theme-android .window .note {
	background: rgba(64,64,64,0.5);
	border: none;
	border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
}

	/*FRAME AROUND SELECTED NOTE CARD*/
	.fullwindow.theme-android .window .current.note {
		background: rgba(64,64,64,0.8);
	}

	/*FRAME AROUND NOTE WHEN EDITING*/
	.fullwindow.theme-android .window .current.highlight {
		background: rgba(164, 198, 57, 0.8);
	}
	
	/*ACTUAL NOTE TEXT*/
	.fullwindow.theme-android .window .note textarea {
		font-family: courier new;
		line-height: 1.5;
	}

/*TOOLBAR*/
.fullwindow.theme-android .toolbar {
	font-size: 0.8em;
}
	
	/*USERDATA*/
	.fullwindow.theme-android .toolbar .userdata {
		color: black;
	}

	/*STATUS ICON*/
	.fullwindow.theme-android .status-div.loading .status-icon {
		background: url('../images/loading5.gif') no-repeat;
	}
	
	/*STATUS MESSAGE*/
	.fullwindow.theme-android .status {
		text-transform: lowercase;
	}

/* MOLESKINE THEME ################################################################## */

/*MAIN BACKGROUND BEHIND NOTES*/
.fullwindow.theme-moleskine {
	background: linear-gradient(bottom, #FCFCFC, #DBDBDB);
	background: -webkit-gradient(linear, left bottom, left top, from(#FCFCFC), to(#DBDBDB));
	background: -moz-linear-gradient(bottom, #FCFCFC, #DBDBDB);
}

/*SIDEBAR BACKGROUND*/
.fullwindow.theme-moleskine .sidebar,
.fullwindow.theme-moleskine .versions-left {
	background: rgba(244,241,232,1);
}

	/*SEARCH AREA*/
	.fullwindow.theme-moleskine .search {
		border-bottom: 1px solid #333;
	}

	/*SIDEBAR NOTE ITEM*/
	.fullwindow.theme-moleskine .list .listnote,
	.fullwindow.theme-moleskine .versions-left .version-item {
		border-bottom: 1px solid #CCC;
		font-size: 0.8em;
		color: #454545;
	}
	
		/*SIDEBAR NOTE ITEM TEXT*/
		.fullwindow.theme-moleskine .listnote .title,
		.fullwindow.theme-moleskine .listnote .preview {
			font-family: "MuseoSans-500", sans-serif;
		}
		
		/*SIDEBAR NTOE ITEM TITLE*/
		.fullwindow.theme-moleskine .list .listnote .title{
			text-transform: uppercase;
		}
	
	/*SELECTED NOTE IN SIDEBAR AND SETTINGS PANE*/
	.fullwindow.theme-moleskine .list .listnote.selected,
	.fullwindow.theme-moleskine .labels .item.label-select,
	.fullwindow.theme-moleskine .versions .version-select {
		background: rgba(241, 144, 1, 1); 
	}
	
		.fullwindow.theme-moleskine .list .listnote.pinned>.pinboard {
			background: url(../images/rsz_pin.png) no-repeat center;
		}

/*FRAME AROUND UNSELECTED NOTES (PARTIALLY OFFSCREEN)*/
.fullwindow.theme-moleskine .window .note {
	background: rgba(30,30,30,0.5);
	border: none;
	border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	-moz-box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
	-webkit-box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
	box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
}

	/*FRAME AROUND SELECTED NOTE CARD (CENTERED ON SCREEN)*/
	.fullwindow.theme-moleskine .window .current.note {
		background: rgba(30,30,30,0.95);
		-moz-box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
		-webkit-box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
		box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
	}

	/*FRAME AROUND NOTE WHEN EDITING*/
	.fullwindow.theme-moleskine .window .current.highlight,
	.fullwindow.theme-moleskine .versions {
		background: rgba(100,100,100,0.95);
	}
	
	/*ACTUAL NOTE TEXT*/
	.fullwindow.theme-moleskine .window .note textarea,
	.fullwindow.theme-moleskine .labels .inner,
	.fullwindow.theme-moleskine .versions .inner {
		font-family: "FluxRegular", sans-serif;
		background: url(../images/moleskine.jpg);
		line-height: 1.5;
	}
	
	/*TAG AREA BACKGROUND*/
	.fullwindow.theme-moleskine .window .note .tagsinput {
		background: url(../images/moleskine.jpg);
	}
	
		/*INDIVIDUAL TAG BACKGROUND*/
		.fullwindow.theme-moleskine .window .note .tagsinput .tag {
			border: 1px solid rgba(0,0,0,0.5);
			background: rgba(255,255,255,0.2);
		}
		
			/*INDIVIDUAL TAG TEXT*/
			.fullwindow.theme-moleskine .window .note .tagsinput .tag span {
				color: black;
			}
			
		/*'ADD A TAG' TEXT*/
		.fullwindow.theme-moleskine .window .note .tagsinput div input {
			color: black;
		}

/*TOOLBAR*/
.fullwindow.theme-moleskine .toolbar {
	font-size: 0.8em;
}
	
	/*USERDATA*/
	.fullwindow.theme-moleskine .toolbar .userdata {
		color: black;
	}

	/*STATUS ICON*/
	.fullwindow.theme-moleskine .status-div.loading .status-icon {
		background: url('../images/loading5.gif') no-repeat;
	}
	
	/*STATUS MESSAGE*/
	.fullwindow.theme-moleskine .status {
		text-transform: lowercase;
	}

/*THEME CARD INNER*/
.appearance .item.theme-moleskine .inner {
	background: url(../images/moleskine.jpg);
}

/*THEME CARD OUTER*/
.appearance .item.theme-moleskine {
	background: rgba(30,30,30,1);
	border: 1px solid rgba(244,241,232,0.3);
}

/* GMAIL THEME ################################################################## */

/*MAIN BACKGROUND BEHIND NOTES*/
.fullwindow.theme-gmail {
	background: white;
}

/*SIDEBAR BACKGROUND*/
.fullwindow.theme-gmail .sidebar {
	background: #F1F1F1;
	border-right: 1px solid rgba(0,0,0,0.1);
	-moz-box-shadow: 5px 0px 10px rgba(0,0,0,0.1);
	-webkit-box-shadow: 5px 0px 10px rgba(0,0,0,0.1);
	box-shadow: 5px 0px 10px rgba(0,0,0,0.1);
}

	/*SEARCH AREA*/
	.fullwindow.theme-gmail .search {
		border-bottom: 1px solid rgba(0,0,0,0.1);
	}

	/*SIDEBAR NOTE TEXT*/
	.fullwindow.theme-gmail .list .listnote {
		border-bottom: 1px solid rgba(0,0,0,0.1);
		font-size: 0.8em;
		color: #666;
	}
	
	/*SELECTED NOTE IN SIDEBAR AND SETTINGS PANE*/
	.fullwindow.theme-gmail .list .listnote.selected,
	.labels .item.label-select {
		background-image: -moz-linear-gradient(top,#DD4B39,#D14836); 
		background-image: -o-linear-gradient(top,#DD4B39,#D14836);
		background-image: -webkit-gradient(linear,left top,left bottom,from(#DD4B39),to(#D14836));
		color: white;
		border: 1px solid rgba(0,0,0,0.1);
		border-radius: 3px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
	}
	
		.fullwindow.theme-gmail .list .listnote.selected .title {
			text-shadow: 0px 1px 0px rgba(0,0,0,0.1);
		}
	
		.fullwindow.theme-gmail .list .listnote .title{
			text-transform: uppercase;
			font-family: arial, sans-serif;
			font-weight: bold;
		}
		
		.fullwindow.theme-gmail .list .listnote .preview{
			font-family: arial, sans-serif;
		}
		
		.fullwindow.theme-gmail .list .listnote.pinned>.pinboard {
			background: url(../images/rsz_pin.png) no-repeat center;
		}

/*FRAME AROUND GENERIC NOTE CARD (PARTIALLY OFFSCREEN)*/
.fullwindow.theme-gmail .window .note {
	background: rgba(241,241,241,0.5);
	border: 1px solid rgba(0,0,0,0.1);
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
}

	/*FRAME AROUND SELECTED NOTE CARD (CENTERED ON SCREEN)*/
	.fullwindow.theme-gmail .window .current.note {
		background: rgba(241,241,241,0.95);
	}

	/*FRAME AROUND SELECTED NOTE CARD WHEN EDITING*/
	.fullwindow.theme-gmail .window .current.highlight {
		background: rgba(200,200,200,0.95);
	}
	
	/*ACTUAL NOTE TEXT*/
	.fullwindow.theme-gmail .window .note textarea,
	.labels .inner {
		font-family: "FluxRegular", sans-serif;
		line-height: 1.5;
	}
	
	.fullwindow.theme-gmail .window .note .textarea textarea:focus {
		outline: none;
		border: 1px solid #4D90FE;
	}
	
	/*MAXIMIZE AND HISTORY BUTTON*/
	.fullwindow.theme-gmail .window .note .maximize,
	.fullwindow.theme-gmail .window .note .versions-button {
		border-bottom: 1px solid rgba(0,0,0,0.3);
		border-right: 1px solid rgba(0,0,0,0.3);
		border-left: 1px solid rgba(0,0,0,0.3);
		color: rgba(0,0,0,0.4);
	}

/*TOOLBAR*/
.fullwindow.theme-gmail .toolbar {
	font-size: 0.8em;
}
	
	/*USERDATA*/
	.fullwindow.theme-gmail .toolbar .userdata {
		color: black;
	}

	/*STATUS ICON*/
	.fullwindow.theme-gmail .status-div.loading .status-icon {
		background: url('../images/loading5.gif') no-repeat;
	}
	
	/*STATUS MESSAGE*/
	.fullwindow.theme-gmail .status {
		text-transform: lowercase;
	}

/*THEME CARD INNER*/
.appearance .item.theme-gmail .inner {
	background: rgba(200,200,200,0.95);
}

/*THEME CARD OUTER*/
.appearance .item.theme-gmail {
	background-image: -moz-linear-gradient(top,#DD4B39,#D14836); 
	background-image: -o-linear-gradient(top,#DD4B39,#D14836);
	background-image: -webkit-gradient(linear,left top,left bottom,from(#DD4B39),to(#D14836));
	border: 1px solid rgba(200,200,200,0.5);
}

/* EARTHY THEME ################################################################## */

/*MAIN BACKGROUND BEHIND NOTES*/
.fullwindow.theme-earthy {
	background: #B4B48D;
}

/*SIDEBAR*/
.fullwindow.theme-earthy .sidebar {
	background: #BFB68F;
	border-right: 1px solid rgba(0,0,0,0.1);
	-moz-box-shadow: 5px 0px 10px rgba(0,0,0,0.1);
	-webkit-box-shadow: 5px 0px 10px rgba(0,0,0,0.1);
	box-shadow: 5px 0px 10px rgba(0,0,0,0.1);
}

	/*SEARCH AREA*/
	.fullwindow.theme-earthy .search {
		border-bottom: 1px solid rgba(0,0,0,0.1);
	}

	/*LISTED NOTES IN SIDEBAR*/
	.fullwindow.theme-earthy .list .listnote {
		border-bottom: 1px solid rgba(0,0,0,0.1);
		font-size: 0.8em;
		color: black;
	}
	
	/*SELECTED NOTE IN SIDEBAR AND SELECTED LABEL IN SETTINGS PANE*/
	.fullwindow.theme-earthy .list .listnote.selected,
	.labels .item.label-select {
		background: #A94D2D;
		color: white;
		border: 1px solid rgba(0,0,0,0.1);
		border-radius: 3px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
	}
	
		.fullwindow.theme-earthy .list .listnote.selected .title {
			text-shadow: 0px 1px 0px rgba(0,0,0,0.1);
		}
	
		.fullwindow.theme-earthy .list .listnote .title{
			font-family: "MuseoSans-500", sans-serif;
			font-weight: bold;
		}
		
		.fullwindow.theme-earthy .list .listnote .preview{
			font-family: "MuseoSans-500", sans-serif;
		}
		
		.fullwindow.theme-earthy .list .listnote.pinned>.pinboard {
			background: url(../images/rsz_pin.png) no-repeat center;
		}

/*FRAME AROUND NOTE CARDS*/
.fullwindow.theme-earthy .window .note {
	background: rgba(168,122,44,0.7);
	border: 1px solid rgba(0,0,0,0.1);
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
}

	/*FRAME AROUND NOTE CARD (WHEN CENTERED ON SCREEN)*/
	.fullwindow.theme-earthy .window .current.note,
	.fullwindow.theme-earthy .labels {
		background: rgba(168,122,44,1);
	}

	/*FRAME AROUND SELECTED NOTE CARD WHEN EDITING*/
	.fullwindow.theme-earthy .window .current.highlight {
		background: rgba(219,179,79,1);
	}
	
	/*NOTE TEXTAREA*/
	.fullwindow.theme-earthy .window .note textarea,
	.fullwindow.theme-earthy .labels .inner,
	.fullwindow.theme-earthy div.tagsinput {
		font-family: "MuseoSans-500", sans-serif;
		color: black;
		line-height: 1.5;
		background: #FFFFD9;
	}
	
	/*BORDER AROUND TEXTAREA AND TAG AREA*/
	.fullwindow.theme-earthy .window .note textarea,
	.fullwindow.theme-earthy .tag-area {
		border: 1px solid rgba(0,0,0,0.3);
		outline: none;
	}
	
	.fullwindow.theme-earthy .window .note textarea:focus {
		outline: none;
		border: 1px solid #4D90FE;
	}
	
	/*MAXIMIZE AND HISTORY BUTTONS*/
	.fullwindow.theme-earthy .window .note .maximize,
	.fullwindow.theme-earthy .window .note .versions-button {
		border-bottom: 1px solid rgba(0,0,0,0.3);
		border-right: 1px solid rgba(0,0,0,0.3);
		border-left: 1px solid rgba(0,0,0,0.3);
		color: rgba(0,0,0,0.4);
	}

/*TOOLBAR*/
.fullwindow.theme-earthy .toolbar {
	font-size: 0.8em;
}
	
	/*USERDATA*/
	.fullwindow.theme-earthy .toolbar .userdata {
		color: black;
	}

	/*STATUS ICON*/
	.fullwindow.theme-earthy .status-div.loading .status-icon {
		background: url('../images/loading5.gif') no-repeat;
	}
	
	/*STATUS MESSAGE*/
	.fullwindow.theme-earthy .status {
		text-transform: lowercase;
	}

/*THEME CARD INNER*/
.appearance .item.theme-earthy .inner {
	background: #B4B48D;
}

/*THEME CARD OUTER*/
.appearance .item.theme-earthy {
	background: rgba(168,122,44,1);
	border: 1px solid rgba(200,200,200,0.5);
}

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