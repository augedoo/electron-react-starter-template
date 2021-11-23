import React from 'react';
import './SideBar.scss';

const Sidebar = () => {
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen p-2 text-4xl font-bold bg-gradient-to-br from-primary-500 to-secondary-200 sidebar'>
			<h1 className='pb-4 font-black text-secondary-800'>
				Electron Starter Template
			</h1>
			<p className='text-xl font-bold text-primary-800'>
				React + Tailwind + Sass + Redux
			</p>
		</div>
	);
};

export default Sidebar;
