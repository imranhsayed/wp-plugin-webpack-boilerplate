/**
 *  Get Block Column.
 *
 * @param {String} colClassName ClassName
 * @param {String} heading Heading
 * @return {Array} Block column.
 */
const getBlockColumn = ( colClassName, heading ) => {
	return [
		'core/column',
		{ className: colClassName },
		[
			[
				'core/heading',
				{
					className: 'dos-and-donts__heading',
					content: `<strong><span>${ heading }</span></strong>`,
				},
			],
			[ 'core/list', { className: 'dos-and-donts__list' } ],
			[ 'core/buttons', { className: 'dos-and-donts__button' } ],
		],
	];
};

export const blockColumns = [
	[
		'core/columns',
		{
			className: 'dos-and-donts__cols',
		},
		[
			getBlockColumn( 'dos-and-donts__col-one', 'Dos' ),
			getBlockColumn(
				'dos-and-donts__col-two',
				"Dont's"
			),
		],
	],
];
