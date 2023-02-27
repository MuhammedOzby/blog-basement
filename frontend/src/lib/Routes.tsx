import { createBrowserRouter } from 'react-router-dom';
import AboutPages from '../Pages/About.pages';
import ArticlesPage from '../Pages/Articles.pages';
import MainPages from '../Pages/Main.pages';
import ArticlePage from '../Pages/Article.pages';
import ResumePages from '../Pages/Resume.pages';
import WelcomePages from '../Pages/Welcome.pages';
import ProfilePages from '../Pages/Profile.pages';

export const router = createBrowserRouter([
	{
		path: '',
		element: <MainPages />,
		children: [
			{ element: <WelcomePages />, index: true },
			{ path: '/articles', element: <ArticlesPage /> },
			{ path: '/resume', element: <ResumePages /> },
			{ path: '/about-me', element: <AboutPages /> },
			{ path: '/profile', element: <ProfilePages /> },
			{
				path: '/articles/:articleID',
				element: <ArticlePage />,
			},
		],
	},
]);
