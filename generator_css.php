<?php

// bootstrap.less
/*
$output = shell_exec('lessc src/less/bootstrap.less > public/css/bootstrap.css');
echo "// bootstrap.less ==> bootstrap.css<br><pre>$output</pre>";
*/

$output = shell_exec('lessc --clean-css src/less/bootstrap.less > public/css/bootstrap.min.css');
echo "// bootstrap.less ==> bootstrap.min.css<br><pre>$output</pre>";

// custom.less
/*
$output = shell_exec('lessc src/less/custom.less > public/css/custom.css');
echo "// custom.less ==> custom.css<br><pre>$output</pre>";
*/

// custom.less
$output = shell_exec('lessc --clean-css src/less/custom.less > public/css/custom.min.css');
echo "// custom.less ==> custom.min.css<br><pre>$output</pre>";
