var x=false;
var caveData ={
	info:{
		layout:[
			[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[2,8,1,8,1,1,8,1,1,8,1,8,1,8,8,1,8,8,1,1,8,8,1,1,8,1,1,1,8,1,8,8,1,1,8],
			[8,x,x,7,x,x,7,x,x,x,x,x,x,7,7,x,1,8,x,x,x,x,x,x,7,x,x,x,x,x,x,7,x,x,2],
			[2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
			
			
		],
		src:`images/castle.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:98, height:98, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:98, height:98, startX:98, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:98, height:98, startX:98 * 2, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:98, height:98, startX:98 * 3, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:98, height:98, startX:98 * 4, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:98, height:98, startX:98 * 5, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:98, height:98, startX:98 * 6, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:98, height:98, startX:98 * 7, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:98, height:98, startX:98 * 8, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[x,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[x,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[x,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			],
			src:`images/castle.png`,
		},
		states:
		[		
				{
					fps:5,
					cycle:false,
					frames:[
						{width:98, height:98, startX:0, startY:0}
					]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:98, height:98, startX:98, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:98, height:98, startX:98 * 2, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:98, height:98, startX:98 * 3, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:98, height:98, startX:98 * 4, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:98, height:98, startX:98 * 5, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:98, height:98, startX:98 * 6, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:98, height:98, startX:98 * 7, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:98, height:98, startX:98 * 8, startY:0}]
				}
			]
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
					
					
				],
				src:`images/castle.png`,
			},
			states:
			[		
					{
						fps:5,
						cycle:false,
						frames:[
							{width:98, height:98, startX:0, startY:0}
						]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:98, height:98, startX:98, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:98, height:98, startX:98 * 2, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:98, height:98, startX:98 * 3, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:98, height:98, startX:98 * 4, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:98, height:98, startX:98 * 5, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:98, height:98, startX:98 * 6, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:98, height:98, startX:98 * 7, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:98, height:98, startX:98 * 8, startY:0}]
					}
				]
			}