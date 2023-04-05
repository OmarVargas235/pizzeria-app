import axios, { AxiosError, AxiosResponse } from 'axios';

import { Response } from './interfaces';
import { generateError } from './utils';

const ednpoint = 'users';

interface File {
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}

interface UpdateDataUser {
    file: File | {} | Blob;
    lastName: string;
    name: string;
    email: string;
}

interface BodyRegister {
    name: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
}

class User {

    private setDefaultHeader(): void {

        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    }

	public updateDataUser = async (body: UpdateDataUser): Promise<Response<string>> => {

        this.setDefaultHeader();

        const { file } = body;
        const bodyFormData = new FormData();

        if ('size' in file) {

            const newFile = file  as unknown as 'string | Blob';
            bodyFormData.append('file', newFile);
        }

        body.name !== '' && bodyFormData.append('name', body.name);
        body.lastName !== '' && bodyFormData.append('lastName', body.lastName);
        bodyFormData.append('email', body.email);

		return await new Promise((resolve) => {
			axios
				.put(`${ednpoint}/edit`, bodyFormData)
				.then(({ data:resp }: AxiosResponse) => {

					const { status, data, message } = resp as Response<string>;

					resolve({ data, message, status });
				})
				.catch(({ response }: AxiosError) => {

					const error = response !== undefined ? generateError(response) : generateError(null);
					resolve(error);
				});
		});
	};

    public register = async (body: BodyRegister): Promise<Response<null>> => {

		return await new Promise((resolve) => {
			axios
				.post(`${ednpoint}`, body)
				.then(({ data:resp }: AxiosResponse) => {

					const { status, data, message } = resp as Response<null>;

					resolve({ data, message, status });
				})
				.catch(({ response }: AxiosError) => {

					const error = response !== undefined ? generateError(response) : generateError(null);
					resolve(error);
				});
		});
	};
}

export const dataUser = new User();