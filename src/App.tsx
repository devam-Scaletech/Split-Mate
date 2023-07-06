import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Layout from 'shared/hoc/layout/component/layout';
import 'assets/styles/index.scss';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='*' element={<Navigate replace to='/homePage' />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
