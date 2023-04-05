import axios, { AxiosError, AxiosResponse } from 'axios';

import { Response } from './interfaces';
import { generateError } from './utils';
import { Store, StoreDetail } from '../helpers/interface';

const ednpoint = 'stores';

class Stores {

	public getStores = async (): Promise<Response<Store[]>> => {

		return await new Promise((resolve) => {
			axios
				.get(`${ednpoint}?page=0&rowsPerPage=6`)
				.then(({ data:resp }: AxiosResponse) => {

					const { status, data, message } = resp as Response<Store[]>;

					resolve({ data, message, status });
				})
				.catch(({ response }: AxiosError) => {

					const error = response !== undefined ? generateError(response) : generateError(null);
					resolve(error);
				});
		});
	};

	public getStore = async (id: number): Promise<Response<StoreDetail>> => {

		return await new Promise((resolve) => {
			axios
				.get(`${ednpoint}/ById?id=${id}`)
				.then(({ data:resp }: AxiosResponse) => {

					const { status, data, message } = resp as Response<StoreDetail>;

					resolve({ data, message, status });
				})
				.catch(({ response }: AxiosError) => {

					const error = response !== undefined ? generateError(response) : generateError(null);
					resolve(error);
				});
		});
	};
}

export const store = new Stores();