import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages';

import { App } from '../App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [{ path: '/', element: <MainPage /> }],
	},
]);
