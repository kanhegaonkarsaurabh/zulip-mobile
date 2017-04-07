import {apiDelete, Auth} from './apiFetch';

export default (auth: Auth, subscriptions: string[]) =>
  apiDelete(
    auth,
    'users/me/subscriptions',
    {subscriptions: JSON.stringify(subscriptions)},
    res => res
  );
