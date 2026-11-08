import { request } from '../request';

/** get aggregate home statistics (contract count/amount/receipt/gross profit/expiring, non-voided only) */
export function fetchGetHomeStats() {
  return request<Api.HomeManage.HomeStats>({
    url: '/homeManage/getHomeStats',
    method: 'get'
  });
}

/** get the paged expiring contract list (sorted by expire date asc, overdue first) */
export function fetchGetExpiringContracts(params: Api.HomeManage.ExpiringContractSearchParams) {
  return request<Api.Common.PaginatingQueryRecord<Api.HomeManage.ExpiringContractItem>>({
    url: '/homeManage/getExpiringContracts',
    method: 'get',
    params
  });
}
