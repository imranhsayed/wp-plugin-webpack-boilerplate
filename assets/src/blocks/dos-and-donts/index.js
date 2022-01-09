import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import Edit from './edit';

registerBlockType( 'gutenberg-block-stater/dos-and-donts', {
	edit: Edit,
	save: () => {
		return (
			<div className="dos-and-donts">
				<InnerBlocks.Content/>
			</div>
		)
	}
} )
