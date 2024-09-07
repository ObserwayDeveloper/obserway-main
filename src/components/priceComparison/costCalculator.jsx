// CostCalculator.js
import React, { useState } from 'react';
import { calculateAmazonShipping, calculateShopifyShipping, calculateEtsyShipping } from './services/shippingServices';

const CostCalculator = () => {
  const [shippingDetails, setShippingDetails] = useState({
    asin: '',
    zipCode: '',
    country: '',
    length: '',
    width: '',
    height: '',
    weight: ''
  });
  const [shippingResults, setShippingResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const comparePrices = async () => {
    setLoading(true);
    const amazonResult = await calculateAmazonShipping({
      asin: shippingDetails.asin,
      zipCode: shippingDetails.zipCode,
      country: shippingDetails.country
    });
    const shopifyResult = await calculateShopifyShipping({
      length: shippingDetails.length,
      width: shippingDetails.width,
      height: shippingDetails.height,
      weight: shippingDetails.weight,
      country: shippingDetails.country
    });
    const etsyResult = await calculateEtsyShipping({
      length: shippingDetails.length,
      width: shippingDetails.width,
      height: shippingDetails.height,
      weight: shippingDetails.weight,
      country: shippingDetails.country
    });

    // En düşük ve en yüksek fiyatlar hesaplanır.
    const results = [amazonResult, shopifyResult, etsyResult];
    const sortedResults = results.sort((a, b) => a.cost - b.cost);
    const combinedOption = { platform: 'Combined', cost: sortedResults[0].cost + (sortedResults[1].cost * 0.1) }; // İkinci en iyi seçeneğe %10 kar ekleyerek kombinlenmiş seçenek.
    setShippingResults([...sortedResults, combinedOption]);
    setLoading(false);
  };

  return (
    <div>
      {/* Giriş alanları ve buton */}
      <button onClick={comparePrices} disabled={loading}>
        {loading ? 'Calculating...' : 'Compare Prices'}
      </button>
      {shippingResults.map(result => (
        <div key={result.platform}>
          {result.platform}: {result.cost.toFixed(2)}
        </div>
      ))}
    </div>
  );
};

export default CostCalculator;