<?php

namespace PluginName\Enqueue;

add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\enqueue_admin_assets' );
/**
 * Enqueue admin assets.
 *
 * @since 1.0.0
 */
function enqueue_admin_assets() {
	$manifest = include PLUGIN_NAME_PATH . 'build/manifest.php';
	if ( empty( $manifest ) ) {
		return;
	}

	// Enqueue...
}

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_assets' );
/**
 * Enqueue assets.
 *
 * @since 1.0.0
 */
function enqueue_assets() {
	$manifest = include PLUGIN_NAME_PATH . 'build/manifest.php';
	if ( empty( $manifest ) ) {
		return;
	}

	// Enqueue...
}
