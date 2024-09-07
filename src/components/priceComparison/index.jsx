import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { getCode, getNames } from 'country-list';
import { useTranslation } from 'react-i18next';
import { fetchKeepaProductDetails, sendEnviaRequest } from './comparisonService';
import { 
  Container, Divider, PriceContainer, ButtonContainer, InputRow, 
  InputColumn, StyledButton, StyledInput, StyledSelect, 
  ShippingResultsContainerWrapper, Description 
} from './comparisonStyles';
import ShippingResultsContainer from '../shippingResultCard/shippingResultCard';
import { BrandLogo } from "../brandLogo";

const PriceComparison = () => {
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  const { t } = useTranslation();

  const [platform, setPlatform] = useState('');
  const [selectedCountry, setSelectedCountry] = useState("");
  const [weight, setWeight] = useState(0.0);
  const [height, setHeight] = useState(0.0);
  const [width, setWidth] = useState(0.0);
  const [length, setLength] = useState(0.0);
  const [zipCode, setZipCode] = useState("");
  const [shippingResults, setShippingResults] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [asin, setAsin] = useState('');
  const [visible, setVisible] = useState(false);

  const countries = getNames();
  const countryOptions = countries.map(name => ({ value: getCode(name), label: name }));

  useEffect(() => {
    if (platform) {
      setVisible(false);
      setTimeout(() => setVisible(true), 10);
    }
  }, [platform]);

  const handlePlatformChange = (newPlatform) => {
    setVisible(false);
    setTimeout(() => setPlatform(newPlatform), 200);
  };

  const handleComparePrices = async () => {
    try {
      let dimensions;
      if (platform === 'amazon') {
        dimensions = await fetchKeepaProductDetails(asin);
      } else {
        dimensions = { length, weight, height, width };
      }

      // Envia API ile kargo ücretini sorguluyoruz
      const results = await sendEnviaRequest(selectedCountry, zipCode, dimensions.length, dimensions.weight, dimensions.height, dimensions.width);

      console.log('Results:', results);

      if (results) {
        setShippingResults(results);
        setShowResults(true);
      } else {
        console.error('No results found');
        setShowResults(false);
      }
    } catch (error) {
      console.error('Error comparing prices:', error);
      setShowResults(false);
    }
  };

  return (
    <Container>
      <Divider />
      <Description>{t('systemDescription')}</Description>
      <PriceContainer>
        <BrandLogo logoSize={isMobile ? 70 : 100} />
        <ButtonContainer>
          <StyledButton onClick={() => handlePlatformChange('amazon')}>{t('amazon')}</StyledButton>
          <StyledButton onClick={() => handlePlatformChange('etsy')}>{t('etsy')}</StyledButton>
          <StyledButton onClick={() => handlePlatformChange('shopify')}>{t('shopify')}</StyledButton>
        </ButtonContainer>
        {platform && (
          <InputRow style={{ opacity: visible ? 1 : 0 }}>
            <InputColumn>
              {platform === 'amazon' && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <StyledInput onChange={(e) => setAsin(e.target.value)} id="asin" type="text" placeholder={t('asin')} />
                </div>
              )}
              {(platform === 'etsy' || platform === 'shopify') && (
                <>
                  <StyledInput type="number" placeholder={t('weight')} value={weight} onChange={(e) => setWeight(e.target.value)} />
                  <StyledInput type="number" placeholder={t('length')} value={length} onChange={(e) => setLength(e.target.value)} />
                  <StyledInput type="number" placeholder={t('width')} value={width} onChange={(e) => setWidth(e.target.value)} />
                  <StyledInput type="number" placeholder={t('height')} value={height} onChange={(e) => setHeight(e.target.value)} />
                                    </>
              )}
              <StyledSelect value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                {countryOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </StyledSelect>
              <StyledSelect>
                <option value="express">{t('expressDelivery')}</option>
              </StyledSelect>
            </InputColumn>
          </InputRow>
        )}
        <StyledButton onClick={handleComparePrices}>{t('compbutton')}</StyledButton>
      </PriceContainer>

      {/* Sonuçların gösterildiği kısım */}
  
      <ShippingResultsContainerWrapper showResults={showResults}>
        <ShippingResultsContainer platform={shippingResults.platform} cost={shippingResults.cost} />
      </ShippingResultsContainerWrapper>


    </Container>
  );
};

export default PriceComparison;
