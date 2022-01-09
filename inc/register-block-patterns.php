<?php
/**
 * Register Block pattern
 *
 * @package Gutenberg Blocks Starter
 */

namespace GutenbergBlockStarter;

function register_block_pattern_categories() {

	$pattern_categories = [
		'cover'   => __( 'Cover', 'gutenberg-block-patterns' ),
		'columns' => __( 'Columns', 'gutenberg-block-patterns' ),
	];

	foreach ( $pattern_categories as $pattern_category => $pattern_category_label ) {
		register_block_pattern_category(
			$pattern_category,
			[ 'label' => $pattern_category_label ]
		);
	}
}

add_action( 'init', __NAMESPACE__ . '\\register_block_pattern_categories' );


function register_block_patterns() {
	if ( function_exists( 'register_block_pattern' ) ) {
		register_block_pattern(
			'gutenberg-block-patterns/two-col-layout',
			[
				'title'       => __( 'Two Column Layout', 'gutenberg-blocks-starter' ),
				'description' => __( 'Two Column Layout Pattern', 'gutenberg-blocks-starter' ),
				'categories'  => [ 'cover' ],
				'content'     => "<!-- wp:group {\"align\":\"wide\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|white\"}}}},\"backgroundColor\":\"gray\"} -->\n<div class=\"wp-block-group alignwide has-gray-background-color has-background has-link-color\"><!-- wp:columns {\"align\":\"wide\"} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"width\":\"33.33%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:33.33%\"><!-- wp:heading {\"align\":\"wide\"} -->\n<h2 class=\"alignwide\">Heading One</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"width\":\"66.66%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:66.66%\"><!-- wp:heading -->\n<h2>Heading Two</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul><li>Item One</li><li>Item Two</li></ul>\n<!-- /wp:list --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:group -->",
			]
		);
	}
}

add_action( 'init', __NAMESPACE__ . '\\register_block_patterns' );
