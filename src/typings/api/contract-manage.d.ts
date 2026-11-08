declare namespace Api {
  /**
   * namespace ContractManage
   *
   * backend api module: "contractManage"
   */
  namespace ContractManage {
    /** project completion status, "1" done "2" not done */
    type CompletionStatus = '1' | '2';

    /** contract status, "1" active "2" voided */
    type ContractStatus = '1' | '2';

    /** invoice type, "1" special VAT "2" general VAT */
    type InvoiceType = '1' | '2';

    /** contract search params */
    interface ContractSearchParams {
      /** page number */
      current: number;
      /** page size */
      pageSize: number;
      /** contract no, fuzzy match, case-insensitive */
      contractNo?: string | null;
      /** company name, fuzzy match, case-insensitive */
      companyName?: string | null;
      /** project completion status */
      completionStatus?: CompletionStatus | null;
      /** contract month range start "YYYY-MM" */
      monthStart?: string | null;
      /** contract month range end "YYYY-MM" */
      monthEnd?: string | null;
      /** regions, multiple allowed, comma-joined in the query (e.g. region=a,b) */
      region?: string[] | null;
      /** project type, fuzzy match */
      projectType?: string | null;
      /** contract status */
      status?: ContractStatus | null;
      /** sort field (camelCase record field), backend whitelist validated */
      sortField?: string | null;
      /** sort direction */
      sortOrder?: 'asc' | 'desc' | null;
    }

    /** contract record (index column rendered by front-end; vatTax/grossProfit/remaining* computed by backend) */
    interface ContractRecord {
      id: number;
      /** business key, not changeable on update */
      contractNo: string;
      /** contract month "YYYY-MM" */
      month: string;
      /** 茂南区/化州市/高州市/电白区/高新区/滨海新区 */
      region: string;
      companyName: string;
      projectType: string;
      /** contract .doc file relative path, presence = uploaded */
      contractFile: string;
      /** contract pdf copy relative path, null = not uploaded */
      contractPdfFile: string | null;
      /** contract amount (yuan) */
      contractAmount: number;
      /** cost - site audit */
      costSiteAudit: number;
      /** cost - expert review */
      costExpertReview: number;
      /** cost - intermediary fee */
      costIntermediaryFee: number;
      /** cost - report commission */
      costReportCommission: number;
      /** cost - qualification/subcontract */
      costQualification: number;
      /** cost - salesman commission */
      costSalesmanCommission: number;
      /** VAT tax = contractAmount * 1%, computed by backend, readonly */
      vatTax: number;
      /** gross profit = contractAmount - cost sum, computed by backend, readonly */
      grossProfit: number;
      contactPerson: string;
      /** mobile phone */
      contactPhone: string;
      /** "YYYY-MM-DD" */
      signDate: string;
      /** "YYYY-MM-DD", = signDate + 1 year, computed by backend, readonly */
      expireDate: string;
      completionStatus: CompletionStatus;
      status: ContractStatus;
      /** report file relative path, null = not uploaded */
      reportFile: string | null;
      totalReceiptAmount: number;
      totalInvoiceAmount: number;
      /** remaining receipt amount = contractAmount - totalReceiptAmount, readonly */
      remainingReceiptAmount: number;
      /** remaining invoice amount = contractAmount - totalInvoiceAmount, readonly */
      remainingInvoiceAmount: number;
      createTime: string | null;
      createBy: string;
      updateTime: string | null;
      updateBy: string;
    }

    /** uploadContract result: tempKey links the staged .doc for add/update; missing = fields not parsed (fill by hand) */
    interface UploadContractResult {
      tempKey: string;
      contractNo: string | null;
      companyName: string | null;
      contactPerson: string | null;
      contactPhone: string | null;
      projectType: string | null;
      /** contract amount (yuan) */
      contractAmount: number | null;
      /** "YYYY-MM-DD" */
      signDate: string | null;
      /** "YYYY-MM", derived from signDate */
      month: string | null;
      region: string | null;
      /** camelCase names of the fields the parser could not extract */
      missing: string[];
    }

    /** add contract params (JSON, requires tempKey from uploadContract) */
    interface ContractAddParams {
      tempKey: string;
      contractNo: string;
      /** "YYYY-MM" */
      month: string;
      region: string;
      companyName: string;
      projectType: string;
      /** yuan, >= 0 */
      contractAmount: number;
      /** optional, defaults to 0 on backend */
      costSiteAudit?: number | null;
      costExpertReview?: number | null;
      costIntermediaryFee?: number | null;
      costReportCommission?: number | null;
      costQualification?: number | null;
      costSalesmanCommission?: number | null;
      contactPerson: string;
      /** mobile phone ^1[3-9]\d{9}$ */
      contactPhone: string;
      /** "YYYY-MM-DD" */
      signDate: string;
      completionStatus: CompletionStatus;
    }

    /** update contract params (multipart form fields; contractNo not accepted; tempKey not used - re-upload sends the file part) */
    interface ContractUpdateParams {
      id: number;
      /** "YYYY-MM" */
      month: string;
      region: string;
      companyName: string;
      projectType: string;
      /** yuan, >= 0 */
      contractAmount: number;
      costSiteAudit?: number | null;
      costExpertReview?: number | null;
      costIntermediaryFee?: number | null;
      costReportCommission?: number | null;
      costQualification?: number | null;
      costSalesmanCommission?: number | null;
      contactPerson: string;
      /** mobile phone ^1[3-9]\d{9}$ */
      contactPhone: string;
      /** "YYYY-MM-DD" */
      signDate: string;
      completionStatus: CompletionStatus;
    }

    /** basic contract info shown on top of receipt/invoice detail modals */
    interface ContractHeader {
      contractNo: string;
      companyName: string;
      contactPerson: string;
      contactPhone: string;
      /** filled in receipt list response */
      remainingReceiptAmount: number | null;
      /** filled in invoice list response */
      remainingInvoiceAmount: number | null;
    }

    /** receipt detail search params */
    interface ReceiptSearchParams {
      current: number;
      pageSize: number;
      /** carried over from the contract row, required */
      contractNo: string;
      /** "YYYY-MM-DD" */
      receiptDateStart?: string | null;
      /** "YYYY-MM-DD" */
      receiptDateEnd?: string | null;
      /** sort field (camelCase record field), backend whitelist validated */
      sortField?: string | null;
      /** sort direction */
      sortOrder?: 'asc' | 'desc' | null;
    }

    /** receipt detail record (business key = contractNo + receiptDate + seq, seq generated by backend) */
    interface ReceiptRecord {
      id: number;
      contractNo: string;
      /** "YYYY-MM-DD" */
      receiptDate: string;
      /** 1-based flow number within the same contract+date */
      seq: number;
      /** yuan, >= 0, optional */
      receiptAmount: number | null;
      createTime: string | null;
      createBy: string;
      updateTime: string | null;
      updateBy: string;
    }

    /** receipt list response: paginated records plus the contract header info */
    type ReceiptListData = Api.Common.PaginatingQueryRecord<ReceiptRecord> & {
      header: ContractHeader;
    };

    /** add receipt params (JSON; seq auto-generated by backend) */
    interface ReceiptAddParams {
      contractNo: string;
      /** "YYYY-MM-DD" */
      receiptDate: string;
      /** yuan, >= 0, optional */
      receiptAmount?: number | null;
    }

    /** update receipt params (JSON; only the amount is changeable) */
    interface ReceiptUpdateParams {
      id: number;
      /** yuan, >= 0, optional */
      receiptAmount?: number | null;
    }

    /** invoice detail search params */
    interface InvoiceSearchParams {
      current: number;
      pageSize: number;
      /** carried over from the contract row, required */
      contractNo: string;
      /** "YYYY-MM-DD" */
      invoiceDateStart?: string | null;
      /** "YYYY-MM-DD" */
      invoiceDateEnd?: string | null;
      invoiceType?: InvoiceType | null;
      /** sort field (camelCase record field), backend whitelist validated */
      sortField?: string | null;
      /** sort direction */
      sortOrder?: 'asc' | 'desc' | null;
    }

    /** invoice detail record (business key = contractNo + invoiceDate + seq; invoice image optional) */
    interface InvoiceRecord {
      id: number;
      contractNo: string;
      invoiceType: InvoiceType;
      /** "YYYY-MM-DD", <= today */
      invoiceDate: string;
      /** 1-based flow number within the same contract+date */
      seq: number;
      /** yuan, >= 0, optional */
      invoiceAmount: number | null;
      /** invoice image relative path, null = not uploaded */
      invoiceFile: string | null;
      createTime: string | null;
      createBy: string;
      updateTime: string | null;
      updateBy: string;
    }

    /** invoice list response: paginated records plus the contract header info */
    type InvoiceListData = Api.Common.PaginatingQueryRecord<InvoiceRecord> & {
      header: ContractHeader;
    };

    /** add invoice params (multipart form fields; invoice image optional) */
    interface InvoiceAddParams {
      contractNo: string;
      invoiceType: InvoiceType;
      /** "YYYY-MM-DD", <= today */
      invoiceDate: string;
      /** yuan, >= 0, optional */
      invoiceAmount?: number | null;
    }

    /** update invoice params (multipart form fields; date change re-generates seq in the new date group) */
    interface InvoiceUpdateParams {
      id: number;
      invoiceType: InvoiceType;
      /** "YYYY-MM-DD", <= today */
      invoiceDate: string;
      /** yuan, >= 0, optional */
      invoiceAmount?: number | null;
    }
  }
}
