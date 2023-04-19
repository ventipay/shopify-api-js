"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentsAppsClientClass = exports.PaymentsAppsClient = void 0;
const http_client_1 = require("../http_client/http_client");
const graphql_client_1 = require("./graphql_client");
class PaymentsAppsClient extends graphql_client_1.GraphqlClient {
    constructor() {
        super(...arguments);
        this.baseApiPath = '/payments_apps/api';
    }
}
exports.PaymentsAppsClient = PaymentsAppsClient;
function paymentsAppsClientClass(params) {
    const { config } = params;
    let { HttpClient } = params;
    if (!HttpClient) {
        HttpClient = (0, http_client_1.httpClientClass)(params.config);
    }
    class NewGraphqlClient extends graphql_client_1.GraphqlClient {
    }
    NewGraphqlClient.config = config;
    NewGraphqlClient.HttpClient = HttpClient;
    Reflect.defineProperty(NewGraphqlClient, 'name', {
        value: 'PaymentsAppsClient',
    });
    return NewGraphqlClient;
}
exports.paymentsAppsClientClass = paymentsAppsClientClass;
//# sourceMappingURL=payments_apps_client.js.map