import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Layout from 'shared/hoc/layout/component/layout';

import CreateExpense from 'feature/createExpense/container/createExpense';
import 'assets/styles/index.scss';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='*' element={<Navigate replace to='/homePage' />} />
					<Route path='/createExpense' element={<CreateExpense />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
