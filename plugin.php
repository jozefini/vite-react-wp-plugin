<?php
/*
Plugin Name: Vite React WordPress Plugin
Plugin URI: https://jozefini.com
Description: Modern WordPress Plugin with React and Vite
Version: 1.0.0
Author: Jozefin B.
Author URI: https://jozefini.com
*/


defined( 'ABSPATH' ) || exit;

// Initialize the plugin.

define( 'PLUGIN_NAME_URL', plugin_dir_url( __FILE__ ) );
define( 'PLUGIN_NAME_PATH', plugin_dir_path( __FILE__ ) );

// Include files.

require_once PLUGIN_NAME_PATH . 'inc/setup.php';
require_once PLUGIN_NAME_PATH . 'inc/enqueue.php';
