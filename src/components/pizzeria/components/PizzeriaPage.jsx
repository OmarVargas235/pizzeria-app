import React from 'react';
import CardPizzeriaPage from './CardPizzeriaPage';
import CardsPizzaPage from './CardsPizzaPage';
import Spinner from '../../../layaut/Spinner';
import GoBackArrow from '../../../layaut/GoBackArrow';
import { PizzeriaStyle } from '../style';

const PizzeriaPage = ({ history, themes, data }) => (
	<PizzeriaStyle className="background-white px-4">
		<aside className="d-flex justify-content-center">
			{
				data.loading 
				? <Spinner />
				: data.error 
					? <div className="alert alert-danger">{data.error}</div>
					: <CardPizzeriaPage data={data.data} isDark={themes.p_h2 === 'white'} />
			}

			<div className="containerGoBack">
				<GoBackArrow 
					history={history}
					desactiveBtn={false}
					themes={themes}
				/>
			</div>
		</aside>

		{ 
			data.loading ? <Spinner />
			: <React.Fragment>
				{
					data.error ? <div className="alert alert-danger">{data.error}</div>
					: <CardsPizzaPage products={data.data.products} />
				}
			</React.Fragment>	
		}
	</PizzeriaStyle>
)


export default PizzeriaPage;