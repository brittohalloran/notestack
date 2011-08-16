<!DOCTYPE html>
<?php
	$subdomain = preg_replace('/^(?:([^\.]+)\.)?notestack\.me$/', '\1', $_SERVER['SERVER_NAME']);
	if ($subdomain == "dev"){
?>
<html>
<?php
	}
	else{
?>
<html manifest="/cache.manifest">
<?php
	};
?>
<head>
	<!-- NOTESTACK /+/ -->
	<!-- META -->
	<title>Notestack</title>
	<link rel="icon" href="../favicon.ico" type="image/x-icon"> 
	<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon"> 
	<!-- STYLESHEETS -->
	<link href="../scripts/keyboard/shortcuts.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="../styles/themes.php" type="text/css" media="screen" />
	<link rel="stylesheet" href="../styles/structure.css" type="text/css" media="screen" />
	<!-- FONTS -->
	<link href="http://fonts.googleapis.com/css?family=Droid+Sans:regular,bold&v1" rel='stylesheet' type='text/css' />
	<link href="../fonts/fonts.css" rel='stylesheet' type='text/css' />
	<!-- GOOGLE ANALYTICS -->
	<script type="text/javascript">
	  if(localStorage.email){useremail = localStorage.email}else{useremail = 'not set'};
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-20881572-3']);
	  _gaq.push(['_setCustomVar',1,'email',useremail,1]);
	  _gaq.push(['_trackPageview']);
	
	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>
</head>
<body class="theme-moleskine">
	<div id="full-window" class="fullwindow">
		<div id='sidebar' class='sidebar'>
			<div id="searchbar" class='search'>
				<input type="text" name="q" />
				<div class='tags button' title="Tags"><div class='inner'></div></div>
				<div class='addnote button' title="New Note"><div class='inner'></div></div>
				<div class='reload button' title="Sync"><div class='inner'></div></div>
			</div>
			<div id="note-list" class="list">
				<div class="filter-status"></div>
				<div class="listnote-holder">
					<!-- listnotes will be inserted here -->
				</div>
			</div>
		</div>
		<div id="note-window" class="window ">
			<div class='toolbar'>
				<div class='status-div'>
					<div class='status-icon'></div>
					<span class='status'>loading</span>
				</div>
				<div class="userdata"><span class="mode"></span><span class="note-data"></span><span class="username"></span></div>
				<div class='settings_icon'><img src="../images/settings.png" height="24px" width="24px" /></div>
			</div>
			<div class='bottom-toolbar'>
				<div class='notestack-info'>
					Notestack <a href="/CHANGELOG.txt" target="_blank">v0.8.2 beta</a> | <a href="http://github.com/brittohalloran/notestack/issues" target="_blank">Report bug / Request feature</a>
				</div>
			</div>
			
			<!-- notes will be inserted here -->
		</div><!-- notes window -->
		<div class="settings">
			<div class="inner">
				<div class="tabs">
					<a href="#">appearance</a> | <a href="#">keyboard shortcuts</a>  | <a href="#">data</a>
				</div>
				<div class="content">
					<div class="appearance settings_pane show">
						<div class="pane_section">
							<h3>Tags</h3>
							<div id="tags-pref" class="tag-pref">
								<div class="name">Enable tags</div>
							</div>
							<div class="clear"></div>
							<h3>Theme</h3>
							<?php 
								$themes = array(
									"theme-android" => "Android",
									"theme-moleskine" => "Moleskine",
									"theme-gmail" => "New Gmail",
									"theme-earthy" => "Earthy"
								);
								
								foreach($themes as $key => $value){
								?>
									<div id="<?php echo $key; ?>" class="theme item <?php echo $key; ?>">
										<div class="inner">
											<div class="name"><?php echo $value; ?></div>
										</div>
									</div>
								<?php
								};
							?>
							<div class="design-a-theme">Know CSS? <a href="mailto:britt.j.ohalloran@gmail.com?subject=Notestack Theme">Design a theme for Notestack</a></div>
						</div>
						<div class="clear"></div>
						<div class="pane_section">
							<h3>Note Font</h3>
							<?php 
								$fontarray = array(
									"mono" =>  "Courier New",
									"veramono" => "Vera Mono",
									"lmmono" => "LM Mono",
									"dsmono" => "Droid Sans Mono",
									"sans" => "Arial",
									"lmsans" => "LM Sans",
									"dssans" => "Droid Sans",
									"museosans" => "Museo Sans",
									"greyscale" => "Greyscale",
									"serif" => "Times",
									"architect" => "Flux Architect",
									"arvo" => "Arvo",
									"colaborate" => "Colaborate"
								);
								
								foreach($fontarray as $key => $value){
								?>
									<div id="font-<?php echo $key ?>" class="font">
										<div class="name <?php echo $key ?>"><?php echo $value ?></div>
									</div>
								<?php
								};
							?>
						</div>
						<div class="pane_section">
							<h3>Font Size</h3>
							<div id="fontsize-10" class="fontsize">
								<div class="name fontsize-10">tiny</div>
							</div>
							<div id="fontsize-11" class="fontsize">
								<div class="name fontsize-11">small</div>
							</div>
							<div id="fontsize-12" class="fontsize">
								<div class="name fontsize-12">normal</div>
							</div>
							<div id="fontsize-13" class="fontsize">
								<div class="name fontsize-13">plus</div>
							</div>
							<div id="fontsize-14" class="fontsize">
								<div class="name fontsize-14">big</div>
							</div>
							<div id="fontsize-16" class="fontsize">
								<div class="name fontsize-16">huge</div>
							</div>
						</div>
					</div>
					<div class="data settings_pane">
						<table>
							<tr>
								<td class="l">Notes</td>
								<td class="data_notes"></td>
							</tr>
							<tr>
								<td class="l">Deleted notes</td>
								<td class="data_deleted"></td>
							</tr>
						</table>
						<div><a href="/">Logout</a> | <a href="/" class="cleardata">Logout & clear data</a></div>
					</div>
					<div class="keyboard_shortcuts settings_pane">
						<table>
							<tr><td class="l">j or &darr; or &rarr;</td><td>next</td></tr>
							<tr><td class="l">k or &uarr; or &larr;</td><td>previous</td></tr>
							<tr><td class="l">tab, enter</td><td>edit note</td></tr>
							<tr><td class="l">esc</td><td>exit and save note</td></tr>
							<tr><td class="l">l or t</td><td>open tag (label) selection</td></tr>
							<tr><td class="l">v</td><td>view versions</td></tr>
							<tr><td class="l">s</td><td>sync with simplenote</td></tr>
							<tr><td class="l">c</td><td>create new note</td></tr>
							<tr><td class="l">f</td><td>fullscreen mode</td></tr>
							<tr><td class="l">m</td><td>toggle <a href="http://daringfireball.net/projects/markdown/">markdown</a></td></tr>
							<tr><td class="l">p</td><td>toggle note pin</td></tr>
							<tr><td class="l">?</td><td>view keyboard shortcuts</td></tr>
						</table>
					</div><!--keyboard shortcuts-->
				</div><!--content-->
			</div><!--inner-->
			<div class="close"></div>
		</div><!--settings-->
		<div class="overlay">
		</div>
		<div class="goto">
		</div>
		<div class="labels">
			<div class="inner">
				<input type="text" class="label-search"/>
				<div class="items">
					<!-- label items will be inserted here -->
				</div>
			</div>
			<div class='close'></div>
		</div>
		<div class="versions">
			<div class="inner">
				<div class="versions-left">
					<!--version items will be inserted here-->
				</div>
				<div class="versions-right">
					<pre>
					<div class="right-inner">
					</div>
					</pre>
				</div>
				<div class="versions-toolbar">
					<div class="diff-view button button-first depressed">Diff view</div>
					<div class="text-view button button-last">Text view</div>
					<div class="revert-version button">Revert</div>
				</div>
			</div><!--inner-->
			<div class="close"></div>
		</div><!--versions-->
	</div><!-- fullwindow -->
	
	<div class='templates'>
		<div id='note-template'>
			<div class="textarea">
				<textarea></textarea>
				<div class="tag-area">
					<input type="text"></input>
				</div>
			</div>
			<div class='note-directions'><p>esc to save</p></div>
			<div class='pin-button' title='toggle pin'>pin</div>
			<div class='markdown-button' title='toggle markdown'># #</div>
			<div class='versions-button' title='view old versions'>history</div>
			<div class='maximize' title='fullscreen mode'>focus</div>
			<div class='delete' title='delete note'>x</div> 
			
			<div class='message'></div>
		</div>
		<div id="listnote-template">
			<div class="title"></div>
			<div class="preview"></div>
			<div class="pinboard"></div>
		</div>
		<div id="label-template">
			<div class="name"></div>
			<div class="notecount"></div>
		</div>
		<div id="version-template">
			<div class="version-date">date</div>
		</div>
		<div id="tag-filter-template">
			<div class="inner">
				<span>filtered by tag: </span>
				<span class="tag-filter-label"></span>
			</div>
			<div class="clear-tag-filter">x</div>
		</div>
	</div>
	<!-- SCRIPTS -->
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.15/jquery-ui.min.js"></script>
	<?php
		if ($subdomain == "dev"){
	?>
	<script src="../scripts/stack.js" type="text/javascript"></script>
	<?php
		}
		else{
	?>
	<script src="../scripts/stack.min.js" type="text/javascript"></script>
	<?php
		};
	?>
</body>
</html>