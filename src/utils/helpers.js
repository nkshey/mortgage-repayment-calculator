export function formatNumber(value) {
  value = value.replace(/,/g, "");
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function removeCommas(value) {
  return value.replace(/,/g, "");
}
