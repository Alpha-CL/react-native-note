import Home from "../views/Home";
import Demo from "../views/Demo";

export default [
	{
		name: 'Home',
		// component: Home,
		options: {title: 'Title'},
		type: 'drawerNav',
		children: [
			{
				name: 'Home',
				// component: Home,
				options: {title: 'Headline',},
				type: 'topTabNav',
				children: [
					{
						name: 'Home',
						component: Home,
					},
					{
						name: 'Demo',
						component: Demo
					}
				]
			},
			{
				name: 'Demo',
				component: Demo
			}
		]
	},
	{
		name: 'Demo',
		component: Demo,
		// options: {title: 'Demo1'},
		// type: 'stackNav',
		// children: [
		// 	{
		// 		name: 'Home',
		// 		// component: Home,
		// 		type: 'topTabNav',
		// 		options: {title: 'Home2'},
		// 		children: [
		// 			{
		// 				name: 'Home',
		// 				options: {title: 'Home3'},
		// 				component: Home,
		// 			},
		// 			{
		// 				name: 'Demo',
		// 				component: Demo
		// 			}
		// 		]
		// 	},
		// 	{
		// 		name: 'Demo',
		// 		component: Demo
		// 	}
		// ]
	},
];
