import { registerBlockType } from '@wordpress/blocks';

import './index.scss';

registerBlockType( 'gutenberg-block-stater/test-block', {
	edit: () => ( <div className="test-block"> Hello World </div> ),
	save: () => ( <div className="test-block"> Hello World </div> )
} );
