import axios from 'axios';
import i18n from 'i18next';

const enviToken = process.env.ENVI_API_TOKEN;
const keepaToken = process.env.KEEPA_API_TOKEN;

const keepaBaseUrl = 'https://api.keepa.com/product';
const enviaBaseUrl = 'https://api.envia.com/ship/rate/';

const handleApiError = (error, customMessage) => {
  console.error(customMessage, error.response ? error.response.data : error.message);
  throw new Error(customMessage);
};

export const fetchKeepaProductDetails = async (asin) => {
  if (!asin) throw new Error(i18n.t('missingDetails'));

  try {
    const url = `${keepaBaseUrl}?key=${keepaToken}&domain=1&asin=${asin}`;
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error(`Keepa request failed with status code: ${response.status}`);
    }

    const product = response.data.products[0];
    if (!product) {
      throw new Error(i18n.t('productNotFound', { asin }));
    }

    const dimensions = {
      weight: product.itemWeight || product.packageWeight || null,
      length: product.itemLength || product.packageLength || null,
      height: product.itemHeight || product.packageHeight || null,
      width: product.itemWidth || product.packageWidth || null
    };

    if (!dimensions.weight || !dimensions.length || !dimensions.height || !dimensions.width) {
      throw new Error(i18n.t('missingDimensions'));
    }

    return dimensions;
  } catch (error) {
    handleApiError(error, 'Error fetching product details from Keepa');
  }
};

export const sendEnviaRequest = async (selectedCountryCode, state, zipCode, length, weight, height, width) => {
  if (!weight || !length || !height || !width) {
    throw new Error(i18n.t('missingDetails'));
  }

  const data = {
    origin: {
      name: "USA",
      company: "enviacommarcelo",
      email: "juanpedrovazez@hotmail.com",
      phone: "8182000536",
      street: "351523",
      number: "crescent ave",
      district: "other",
      city: "dallas",
      state: "TX",
      country: "US",
      postalCode: "75205",
      reference: "",
      coordinates: { latitude: "32.776272", longitude: "-96.796856" }
    },
    destination: {
      name: "francisco",
      company: "",
      email: "",
      phone: "8180180543",
      street: "4th street",
      number: "24",
      district: "other",
      city: "reno",
      state: state || "N/A",
      country: selectedCountryCode,
      postalCode: zipCode,
      reference: "",
      coordinates: { latitude: "39.512132", longitude: "-119.906585" }
    },
    packages: [{
      content: "zapatos",
      amount: 1,
      type: "box",
      weight: weight,
      weightUnit: "LB",
      lengthUnit: "IN",
      dimensions: { length: length, width: width, height: height }
    }],
    shipment: { carrier: "usps", type: 1 },
    settings: { currency: "USD" }
  };

  const headers = { 'Content-Type': "application/json", 'Authorization': `Bearer ${enviToken}` };

  try {
    const response = await axios.post(enviaBaseUrl, data, { headers });
    if (response.data.meta === 'error') {
      throw new Error(i18n.t('enviarError', { error: response.data.error.message }));
    }

    const result = response.data.data[0];
    return {
      cost: result.totalPrice,
      currency: "USD"
    };
  } catch (error) {
    handleApiError(error, 'Error sending Envia request');
  }
};
