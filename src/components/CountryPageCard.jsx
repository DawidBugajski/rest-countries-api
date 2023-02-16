import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL_COUNTRY } from 'utils/constants';
import BorderCountries from 'components/BorderCountries';

const CountryPageCard = () => {
  const { name } = useParams();
  const {
    data: countryData,
    isLoading: isCountryLoading,
    error: countryError,
  } = useQuery({
    queryKey: ['country', name],
    queryFn: () =>
      axios
        .get(API_URL_COUNTRY + name + '?fullText=true')
        .then((res) => res.data),
  });

  if (isCountryLoading) return 'Loading...';

  if (countryError) return 'An error has occurred: ' + countryError.message;

  const {
    capital,
    population,
    region,
    subregion,
    name: { common, nativeName },
    flags: { png: flagUrl },
    currencies,
    languages,
    tld,
  } = countryData[0];

  //Single country props
  const currencyNames = Object.values(currencies).map(
    (currency) => currency.name
  );
  const nativeNames = Object.values(nativeName).map((native) => native.common);
  const firstNativeName = nativeNames[nativeNames.length - 1];
  const languageList = Object.values(languages).join(', ');

  return (
    <div className='w-9/12 mx-auto mb-10 rounded-md shadow-md'>
      <h2>{common}</h2>
      <img
        className='w-full rounded-t-md h-1/2 border-b-[1px] border-t-[1px] border-gray-200'
        src={flagUrl}
        alt={common}
      />
      <p>Native Name: {firstNativeName}</p>
      <p>Population: {population.toLocaleString()}</p>
      <p>Region: {region}</p>
      <p>Subregion: {subregion}</p>
      <p>Capital: {capital}</p>
      <p>Top Level Domain: {tld[0]}</p>
      <p>Currencies: {currencyNames}</p>
      <p>Languages: {languageList}</p>
      <BorderCountries borders={countryData[0]?.borders} />
    </div>
  );
};

export default CountryPageCard;
