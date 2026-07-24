/** Deterministic public references for a CVE id. */
export function nvdUrl(cveId: string): string {
  return `https://nvd.nist.gov/vuln/detail/${cveId.trim()}`;
}

export function mitreUrl(cveId: string): string {
  return `https://www.cve.org/CVERecord?id=${cveId.trim()}`;
}
