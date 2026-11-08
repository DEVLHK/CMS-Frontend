/** regions as DB enum values, labels equal values */
export const contractRegionOptions = ['茂南区', '化州市', '高州市', '电白区', '高新区', '滨海新区'].map(region => ({
  label: region,
  value: region
}));

/** money display: thousands separator + 2 decimals, `-` for null/undefined */
export function fmtMoney(value: number | null | undefined): string {
  if (value === null || value === undefined) {
    return '-';
  }
  return value.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/** backend errors of file endpoints come back as a JSON envelope (HTTP 200); detect and surface the msg */
async function unwrapFileBlob(blob: Blob): Promise<Blob> {
  if (blob.type.includes('application/json')) {
    const text = await blob.text();
    let msg = text;
    try {
      msg = (JSON.parse(text) as { msg?: string }).msg ?? text;
    } catch {
      // keep the raw text when it is not a valid envelope
    }
    throw new Error(msg);
  }
  return blob;
}

/** save a blob response as a local file (file-stream download endpoints) */
export async function saveBlobFile(blob: Blob, filename: string): Promise<void> {
  const file = await unwrapFileBlob(blob);
  const url = URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.append(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** turn a blob response into an object url for preview (e.g. NImage); caller revokes it after use */
export async function blobToObjectUrl(blob: Blob): Promise<string> {
  const file = await unwrapFileBlob(blob);
  return URL.createObjectURL(file);
}

/** file extension inferred from a blob mime type, e.g. "image/png" -> "png" */
export function extFromBlobType(blob: Blob): string {
  const sub = blob.type.split('/')[1];
  return sub === 'jpeg' ? 'jpg' : (sub ?? 'bin');
}

/** basename of a backend file path ("a/b/原文件.doc" -> "原文件.doc"), empty for null/undefined */
export function fileBaseName(path: string | null | undefined): string {
  return path?.split('/').pop() ?? '';
}

const IMAGE_EXTS = new Set(['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp']);

/** whether a backend file path (or raw filename) points to an image, judged by extension */
export function isImageFile(path: string | null | undefined): boolean {
  const name = fileBaseName(path);
  return IMAGE_EXTS.has(name.split('.').pop()?.toLowerCase() ?? '');
}
