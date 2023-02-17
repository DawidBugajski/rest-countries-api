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
    <div className='mx-auto my-6'>
      <img
        className='border-gray-200 border-[1px] h-full mb-8'
        src={flagUrl}
        alt={common}
      />
      <h2 className='my-2 text-2xl font-extrabold'>{common}</h2>
      <div className='leading-relaxed'>
        <p className='font-semibold'>
          Native Name: <span className='font-normal'>{firstNativeName}</span>
        </p>
        <p className='font-semibold'>
          Population:{' '}
          <span className='font-normal'>{population.toLocaleString()}</span>
        </p>
        <p className='font-semibold'>
          Region: <span className='font-normal'>{region}</span>
        </p>
        <p className='font-semibold'>
          Subregion: <span className='font-normal'>{subregion}</span>
        </p>
        <p className='mb-2 font-semibold'>
          Capital: <span className='font-normal'>{capital}</span>
        </p>
        <p className='font-semibold'>
          Top Level Domain: <span className='font-normal'>{tld[0]}</span>
        </p>
        <p className='font-semibold'>
          Currencies: <span className='font-normal'>{currencyNames}</span>
        </p>
        <p className='mb-2 font-semibold'>
          Languages: <span className='font-normal'>{languageList}</span>
        </p>
      </div>
      <BorderCountries borders={countryData[0]?.borders} />
    </div>
  );
};

export default CountryPageCard;
