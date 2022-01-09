import { InnerBlocks } from '@wordpress/block-editor';
import { blockColumns } from './templates';

const INNER_BLOCKS_TEMPLATE = [
	[
		'core/group',
		{
			className: 'dos-and-donts-group'
		},
		blockColumns
	]
];

/**
 * Group -> Columns -> Col1( heading + List ) + Col2 ( heading + List )
 *
 *
 * @return {JSX.Element}
 * @constructor
 */

const Edit = () => {
	return (
		<div className="dos-and-donts">
			<InnerBlocks
				template={ INNER_BLOCKS_TEMPLATE }
				templateLock={true}
			/>
		</div>
	)
}

export default Edit;
