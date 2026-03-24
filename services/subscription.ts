import { api } from './api';

export async function addSubscription(params: any) {
  return api.post('/create-checkout-session', params);
}

export async function checkOutUser(params: any) {
  return api.get('/checkout-user', { params: params });
}
