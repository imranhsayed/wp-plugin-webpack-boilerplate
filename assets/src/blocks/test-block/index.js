import { registerBlockType } from '@wordpress/blocks';

import './index.scss';

registerBlockType( 'gutenberg-block-stater/test-block', {
	icon: {
		// Specifying a background color to appear with the icon e.g.: in the inserter.
		background: '#7e70af',
		// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
		foreground: '#fff',
		// Specifying an icon for the block
		src: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /></svg>,
	} ,
	edit: () => ( <div className="test-block"> Hello World </div> ),
	save: () => ( <div className="test-block"> Hello World </div> )
} );
