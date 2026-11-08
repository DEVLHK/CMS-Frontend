declare namespace Api {
  /**
   * namespace HomeManage
   *
   * backend api module: "homeManage"
   */
  namespace HomeManage {
    /** aggregate home statistics of non-voided contracts, fetched in one request */
    interface HomeStats {
      /** contract count, status = 1 */
      contractCount: number;
      /** total contract amount of non-voided contracts */
      totalContractAmount: number;
      /** total receipt amount of non-voided contracts */
      totalReceiptAmount: number;
      /** total gross profit of non-voided contracts */
      totalGrossProfit: number;
      /** count of non-voided contracts expiring within 2 months (overdue included) */
      expiringCount: number;
    }

    /** expiring contract item in the home news list */
    interface ExpiringContractItem {
      id: number;
      contractNo: string;
      companyName: string;
      /** "YYYY-MM-DD" */
      expireDate: string;
    }

    /** expiring contract list search params */
    interface ExpiringContractSearchParams {
      current: number;
      pageSize: number;
    }
  }
}
