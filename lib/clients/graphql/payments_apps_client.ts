import {ConfigInterface} from '../../base-types';
import {httpClientClass, HttpClient} from '../http_client/http_client';

import {GraphqlClient} from './graphql_client';

export interface GraphqlClientClassParams {
  config: ConfigInterface;
  HttpClient?: typeof HttpClient;
}

export class PaymentsAppsClient extends GraphqlClient {
  baseApiPath = '/payments_apps/api';
}

export function paymentsAppsClientClass(
  params: GraphqlClientClassParams,
): typeof GraphqlClient {
  const {config} = params;
  let {HttpClient} = params;
  if (!HttpClient) {
    HttpClient = httpClientClass(params.config);
  }

  class NewGraphqlClient extends GraphqlClient {
    public static config = config;
    public static HttpClient = HttpClient!;
  }

  Reflect.defineProperty(NewGraphqlClient, 'name', {
    value: 'PaymentsAppsClient',
  });

  return NewGraphqlClient as typeof GraphqlClient;
}
