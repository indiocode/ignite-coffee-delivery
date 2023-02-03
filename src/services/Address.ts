import { AxiosResponse } from 'axios';
import { Address } from '~/models/Address';
import { ViaCepApi } from './ViaCEP';

export async function getAddress(cep: string): Promise<AxiosResponse<Address>> {
	const response = await ViaCepApi.get(`${cep}/json/`);
	return response;
}
