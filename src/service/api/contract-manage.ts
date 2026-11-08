import { request } from '../request';

/** append an optional numeric amount to a multipart form (omit the field entirely when null) */
function appendOptionalAmount(formData: FormData, key: string, value: number | null | undefined) {
  if (value !== null && value !== undefined) {
    formData.append(key, String(value));
  }
}

/** serialize params; array values are joined with commas (region=a,b — backend splits and builds IN clause) */
function serializeParams(params: Record<string, unknown>): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue;
    }
    if (Array.isArray(value)) {
      const joined = value.map(item => String(item).trim()).filter(Boolean).join(',');
      if (joined) {
        search.append(key, joined);
      }
    } else {
      search.append(key, String(value));
    }
  }
  return search.toString();
}

/** get contract list (paginated, with computed vatTax/grossProfit/remaining amounts) */
export function fetchGetContractList(params: Api.ContractManage.ContractSearchParams) {
  return request<Api.Common.PaginatingQueryRecord<Api.ContractManage.ContractRecord>>({
    url: '/contractManage/getContractList',
    method: 'get',
    params,
    // override the global qs serializer: array values must be comma-joined for the backend IN clause
    paramsSerializer: { serialize: serializeParams }
  });
}

/** upload contract .doc (multipart): stage the file and parse the fixed-format content for prefill */
export function fetchUploadContract(file: File) {
  const formData = new FormData();
  formData.append('file', file);
  return request<Api.ContractManage.UploadContractResult>({
    url: '/contractManage/uploadContract',
    method: 'post',
    data: formData
  });
}

/** add contract (multipart form fields; tempKey links the staged Word .doc, filePdf is the required PDF copy) */
export function fetchAddContract(data: Api.ContractManage.ContractAddParams, filePdf: File) {
  const formData = new FormData();
  formData.append('filePdf', filePdf);
  formData.append('tempKey', data.tempKey);
  formData.append('contractNo', data.contractNo);
  formData.append('month', data.month);
  formData.append('region', data.region);
  formData.append('companyName', data.companyName);
  formData.append('projectType', data.projectType);
  formData.append('contractAmount', String(data.contractAmount));
  appendOptionalAmount(formData, 'costSiteAudit', data.costSiteAudit);
  appendOptionalAmount(formData, 'costExpertReview', data.costExpertReview);
  appendOptionalAmount(formData, 'costIntermediaryFee', data.costIntermediaryFee);
  appendOptionalAmount(formData, 'costReportCommission', data.costReportCommission);
  appendOptionalAmount(formData, 'costQualification', data.costQualification);
  appendOptionalAmount(formData, 'costSalesmanCommission', data.costSalesmanCommission);
  formData.append('contactPerson', data.contactPerson);
  formData.append('contactPhone', data.contactPhone);
  formData.append('signDate', data.signDate);
  formData.append('completionStatus', data.completionStatus);
  return request<null>({
    url: '/contractManage/addContract',
    method: 'post',
    data: formData
  });
}

/**
 * update contract (multipart form fields; contractNo not accepted).
 * `file` optional: re-upload the Word .doc to overwrite the old one;
 * `filePdf` optional: re-upload the PDF copy to overwrite the old one; omit either = keep the current file
 */
export function fetchUpdateContract(data: Api.ContractManage.ContractUpdateParams, file?: File | null, filePdf?: File | null) {
  const formData = new FormData();
  if (file) {
    formData.append('file', file);
  }
  if (filePdf) {
    formData.append('filePdf', filePdf);
  }
  formData.append('id', String(data.id));
  formData.append('month', data.month);
  formData.append('region', data.region);
  formData.append('companyName', data.companyName);
  formData.append('projectType', data.projectType);
  formData.append('contractAmount', String(data.contractAmount));
  appendOptionalAmount(formData, 'costSiteAudit', data.costSiteAudit);
  appendOptionalAmount(formData, 'costExpertReview', data.costExpertReview);
  appendOptionalAmount(formData, 'costIntermediaryFee', data.costIntermediaryFee);
  appendOptionalAmount(formData, 'costReportCommission', data.costReportCommission);
  appendOptionalAmount(formData, 'costQualification', data.costQualification);
  appendOptionalAmount(formData, 'costSalesmanCommission', data.costSalesmanCommission);
  formData.append('contactPerson', data.contactPerson);
  formData.append('contactPhone', data.contactPhone);
  formData.append('signDate', data.signDate);
  formData.append('completionStatus', data.completionStatus);
  return request<null>({
    url: '/contractManage/updateContract',
    method: 'post',
    data: formData
  });
}

/** delete contract (cascades receipt/invoice details and the file directory) */
export function fetchDeleteContract(id: number) {
  return request<null>({
    url: '/contractManage/deleteContract',
    method: 'post',
    data: { id }
  });
}

/** void contract (status -> 2; no maintenance allowed afterwards) */
export function fetchVoidContract(id: number) {
  return request<null>({
    url: '/contractManage/voidContract',
    method: 'post',
    data: { id }
  });
}

/** upload report file (multipart; pdf/png/jpg/jpeg, overwrite style) */
export function fetchUploadReport(id: number, file: File) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('id', String(id));
  return request<null>({
    url: '/contractManage/uploadReport',
    method: 'post',
    data: formData
  });
}

/** download the contract .doc (file stream, needs Authorization) */
export function fetchDownloadContract(id: number) {
  return request<Blob, 'blob'>({
    url: '/contractManage/downloadContract',
    method: 'get',
    params: { id },
    responseType: 'blob'
  });
}

/** download the contract pdf copy (file stream, needs Authorization) */
export function fetchDownloadContractPdf(id: number) {
  return request<Blob, 'blob'>({
    url: '/contractManage/downloadContractPdf',
    method: 'get',
    params: { id },
    responseType: 'blob'
  });
}

/** download the report file (file stream, needs Authorization) */
export function fetchDownloadReport(id: number) {
  return request<Blob, 'blob'>({
    url: '/contractManage/downloadReport',
    method: 'get',
    params: { id },
    responseType: 'blob'
  });
}

/** get receipt detail list (paginated, with the contract header info) */
export function fetchGetReceiptList(params: Api.ContractManage.ReceiptSearchParams) {
  return request<Api.ContractManage.ReceiptListData>({
    url: '/contractManage/getReceiptList',
    method: 'get',
    params
  });
}

/** add receipt detail (JSON; seq auto-generated by backend) */
export function fetchAddReceipt(data: Api.ContractManage.ReceiptAddParams) {
  return request<null>({
    url: '/contractManage/addReceipt',
    method: 'post',
    data
  });
}

/** update receipt detail (JSON; only the amount is changeable) */
export function fetchUpdateReceipt(data: Api.ContractManage.ReceiptUpdateParams) {
  return request<null>({
    url: '/contractManage/updateReceipt',
    method: 'post',
    data
  });
}

/** delete receipt detail */
export function fetchDeleteReceipt(id: number) {
  return request<null>({
    url: '/contractManage/deleteReceipt',
    method: 'post',
    data: { id }
  });
}

/** get invoice detail list (paginated, with the contract header info) */
export function fetchGetInvoiceList(params: Api.ContractManage.InvoiceSearchParams) {
  return request<Api.ContractManage.InvoiceListData>({
    url: '/contractManage/getInvoiceList',
    method: 'get',
    params
  });
}

/** add invoice detail (multipart form fields; invoice image optional png/jpg/jpeg) */
export function fetchAddInvoice(data: Api.ContractManage.InvoiceAddParams, file?: File | null) {
  const formData = new FormData();
  if (file) {
    formData.append('file', file);
  }
  formData.append('contractNo', data.contractNo);
  formData.append('invoiceType', data.invoiceType);
  formData.append('invoiceDate', data.invoiceDate);
  appendOptionalAmount(formData, 'invoiceAmount', data.invoiceAmount);
  return request<null>({
    url: '/contractManage/addInvoice',
    method: 'post',
    data: formData
  });
}

/** update invoice detail (multipart form fields; `file` optional to overwrite the invoice image) */
export function fetchUpdateInvoice(data: Api.ContractManage.InvoiceUpdateParams, file?: File | null) {
  const formData = new FormData();
  if (file) {
    formData.append('file', file);
  }
  formData.append('id', String(data.id));
  formData.append('invoiceType', data.invoiceType);
  formData.append('invoiceDate', data.invoiceDate);
  appendOptionalAmount(formData, 'invoiceAmount', data.invoiceAmount);
  return request<null>({
    url: '/contractManage/updateInvoice',
    method: 'post',
    data: formData
  });
}

/** delete invoice detail (the invoice image file is deleted along with it) */
export function fetchDeleteInvoice(id: number) {
  return request<null>({
    url: '/contractManage/deleteInvoice',
    method: 'post',
    data: { id }
  });
}

/** preview the invoice image (image stream) */
export function fetchPreviewInvoice(id: number) {
  return request<Blob, 'blob'>({
    url: '/contractManage/previewInvoice',
    method: 'get',
    params: { id },
    responseType: 'blob'
  });
}

/** download the invoice image (file stream) */
export function fetchDownloadInvoice(id: number) {
  return request<Blob, 'blob'>({
    url: '/contractManage/downloadInvoice',
    method: 'get',
    params: { id },
    responseType: 'blob'
  });
}
