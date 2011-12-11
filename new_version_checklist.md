## Before release of new version
- update CHANGELOG.txt
- update version
	version.php
	cache.manifest (version in comment)
- update cache.manifest list of files
- turn off consoleLog()
- minify
	add stack.min.js and login.min.js to scripts folder
- git commit
- git checkout master
- git merge dev --no-ff -m "v..."
- git tag
- git pull into live