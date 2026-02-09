export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('de-DE').format(value);
};

export const formatSold = (num: number) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace('.0', '') + 'k';
    }
    return num.toString();
};
