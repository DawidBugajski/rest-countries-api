import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL_COUNTRY } from 'utils/constants';

const CountryPage = () => {
  const { name } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['country', name],
    queryFn: () =>
      axios
        .get(API_URL_COUNTRY + name + '?fullText=true')
        .then((res) => res.data),
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  const {
    capital,
    population,
    region,
    subregion,
    name: { common, nativeName },
    flags: { png: flagUrl },
    borders,
    currencies,
    languages,
    tld,
  } = data[0];

  const currencyNames = Object.values(currencies).map(
    (currency) => currency.name
  );
  const nativeNames = Object.values(nativeName).map((native) => native.common);
  const firstNativeName = nativeNames[nativeNames.length - 1];
  const languageList = Object.values(languages).join(', ');

  console.log(borders);
  return (
    <div>
      <Link to={'/'}>GO BACK</Link>
      <h2>{common}</h2>
      <img src={flagUrl} alt={common} />
      <p>Native Name: {firstNativeName}</p>
      <p>Population: {population.toLocaleString()}</p>
      <p>Region: {region}</p>
      <p>Subregion: {subregion}</p>
      <p>Capital: {capital}</p>
      <p>Top Level Domain: {tld[0]}</p>
      <p>Currencies: {currencyNames}</p>
      <p>Languages: {languageList}</p>
      <p>Borders: {borders}</p>
    </div>
  );
};

export default CountryPage;

// jak na podstawie borders dostać pełną nazwę państwa
// przerzucić to do osobnego komponentu
// nie zawsze muszą być border countries (może na to osobny komponent? tylko że on musi mieć dostęp do tych danych)
// refaktoryzacja
