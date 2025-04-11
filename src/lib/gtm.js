export const GTM_ID = "GTM-PB72P9C"; // Substitua pelo seu ID do GTM

export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};