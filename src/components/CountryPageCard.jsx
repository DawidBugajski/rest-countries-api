import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL_COUNTRY } from 'utils/constants';
import BorderCountries from 'components/BorderCountries';
import SkeletonCardPage from 'components/SkeletonCardPage';
import Error from 'components/Error';

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

  if (isCountryLoading) return <SkeletonCardPage />;

  if (countryError) return <Error errorMessage={countryError.message} />;

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
    <div className='mx-auto my-6 lg:items-center lg:flex 2xl:my-0 dark:text-white'>
      <img
        className='border-gray-200 border-[1px] mb-8 lg:h-72 lg:mr-16 xl:mb-0 xl:h-[350px] shadow-xl dark:border-DM_DarkBlue dark:shadow-LM_VeryDarkBlue'
        src={flagUrl}
        alt={common}
      />
      <div className='flex flex-col flex-grow'>
        <h2 className='my-2 text-2xl font-extrabold lg:m-0 2xl:text-4xl'>
          {common}
        </h2>
        <div className='leading-relaxed 2xl:flex 2xl:py-8'>
          <div className='flex-grow'>
            <p className='font-semibold 2xl:text-xl'>
              Native Name:{' '}
              <span className='font-normal'>{firstNativeName}</span>
            </p>
            <p className='font-semibold 2xl:text-xl'>
              Population:{' '}
              <span className='font-normal'>{population.toLocaleString()}</span>
            </p>
            <p className='font-semibold 2xl:text-xl'>
              Region: <span className='font-normal'>{region}</span>
            </p>
            <p className='font-semibold 2xl:text-xl'>
              Subregion: <span className='font-normal'>{subregion}</span>
            </p>
            <p className='mb-2 font-semibold 2xl:text-xl'>
              Capital: <span className='font-normal'>{capital}</span>
            </p>
          </div>
          <div className='flex-grow'>
            <p className='font-semibold 2xl:text-xl'>
              Top Level Domain: <span className='font-normal'>{tld[0]}</span>
            </p>
            <p className='font-semibold 2xl:text-xl'>
              Currencies: <span className='font-normal'>{currencyNames}</span>
            </p>
            <p className='mb-2 font-semibold 2xl:text-xl'>
              Languages: <span className='font-normal'>{languageList}</span>
            </p>
          </div>
        </div>
        {countryData[0].borders && (
          <BorderCountries borders={countryData[0]?.borders} />
        )}
      </div>
    </div>
  );
};

export default CountryPageCard;
