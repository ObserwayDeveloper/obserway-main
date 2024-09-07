import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // i18next kullanımı
import cardImage from '../../../../images/dashboardImg/db1.webp';
import amazonLogo from '../../../../images/asin/asin.png';
import axios from 'axios';

import {
  AppContentContainer,
  Card,
  Image,
  CardContent,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Column,
  ListCard,
  InputContainer,
  InputGroup,
  Input,
  SelectContainer,
  SearchButton,
  Loader,
  ListItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  customSelectStyles
} from './dashboardStyles';

function Dashboard() {
  const { t } = useTranslation(); // Çeviri fonksiyonu
  const [asin, setAsin] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryOptions = response.data.map(country => ({
          value: country.cca2,
          label: country.name.common
        }));
        setCountries(countryOptions);
      } catch (error) {
        console.error(t("errors.fetch_countries"), error);
      }
    };

    fetchCountries();
  }, [t]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Keepa API çağrısı
      const keepaUrl = `https://api.keepa.com/product?key=your-keepa-token&domain=1&asin=${asin}`;
      const productResponse = await axios.get(keepaUrl);
      const productData = productResponse.data.products[0];

      if (!productData) {
        throw new Error(t("errors.product_data_missing"));
      }

      const itemWeightLb = productData.dimensionWeight ? productData.dimensionWeight / 1000 * 2.20462 : 0;
      const itemLengthIn = productData.itemLength ? productData.itemLength / 10 / 2.54 : 0;
      const itemWidthIn = productData.itemWidth ? productData.itemWidth / 10 / 2.54 : 0;
      const itemHeightIn = productData.itemHeight ? productData.itemHeight / 10 / 2.54 : 0;

      setProductInfo({
        image: `https://images-na.ssl-images-amazon.com/images/I/${productData.imagesCSV.split(',')[0]}`,
        title: productData.title,
        price: `$${(productData.stats.current[0] / 100).toFixed(2)}`,
        description: productData.description || t("product.no_description"),
        weight: itemWeightLb,
        dimensions: {
          length: itemLengthIn,
          width: itemWidthIn,
          height: itemHeightIn
        }
      });

      setLoading(false);
    } catch (error) {
      console.error(t("errors.fetch_product_data"), error);
      setLoading(false);
    }
  };

  return (
    <AppContentContainer>
      <Row>
        <Column>
          <Card>
            <Image src={cardImage} alt={t("dashboard.image_alt")} />
            <CardContent>
              <div>
                <CardTitle>{t("dashboard.new_quote")}</CardTitle>
                <CardSubtitle>{t("dashboard.quick_request")}</CardSubtitle>
              </div>
              <Button as={Link} to="/user-dashboard/create-shipment">{t("dashboard.create_shipment")}</Button>
            </CardContent>
          </Card>
        </Column>
        <Column>
          <ListCard>
            <InputContainer>
              <InputGroup>
                <Input 
                  type="text" 
                  placeholder={t("dashboard.enter_zip")} 
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
                <SelectContainer>
                  <Select
                    options={countries}
                    value={country}
                    onChange={(option) => setCountry(option)}
                    placeholder={t("dashboard.select_country")}
                    styles={customSelectStyles}
                  />
                </SelectContainer>
              </InputGroup>
              <InputGroup>
                <Input 
                  type="text" 
                  placeholder={t("dashboard.enter_asin")} 
                  value={asin}
                  onChange={(e) => setAsin(e.target.value)}
                />
                <SearchButton onClick={handleSearch}>
                  <img src={amazonLogo} alt="Amazon Logo" />
                </SearchButton>
              </InputGroup>
            </InputContainer>
            {loading && <Loader />}
            {productInfo && (
              <>
                <ListItem>
                  <ProductImage src={productInfo.image} alt={t("product.image_alt")} />
                  <ProductTitle>{productInfo.title}</ProductTitle>
                  <ProductPrice>{productInfo.price}</ProductPrice>
                  <ProductDescription>{productInfo.description}</ProductDescription>
                </ListItem>
              </>
            )}
          </ListCard>
        </Column>
      </Row>
    </AppContentContainer>
  );
}

export default Dashboard;
