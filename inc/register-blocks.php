<?php
/**
 * Register Blocks.
 *
 * @package Gutenberg Blocks Starter.
 *
 */

namespace GutenbergBlockStarter;

function register_blocks() {
	register_block_type( GUTENBERG_BLOCK_STARTER_BUILD_DIR . '/test-block', [
		''
	] );
	register_block_type( GUTENBERG_BLOCK_STARTER_BUILD_DIR . '/dos-and-donts' );
}

add_action( 'init', __NAMESPACE__ . '\\register_blocks' );
