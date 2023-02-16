import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL_ALPHA, API_URL_COUNTRY } from 'utils/constants';

const CountryPage = () => {
  //fetch single country
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

  console.log(countryData);
  //fetch borders fullnames
  const {
    data: borderData,
    isLoading: isBorderLoading,
    error: borderError,
  } = useQuery({
    queryKey: ['borders', countryData?.[0]?.borders],
    queryFn: async () => {
      const promises = countryData[0].borders.map((border) =>
        axios.get(API_URL_ALPHA + border).then((res) => res.data)
      );
      console.log(promises);
      return Promise.all(promises);
    },
  });
  console.log(borderData);
  // dostaje promise które są fullfiled i value to jest ten obiekt który potrzebuje, ale dostaje informację że countryData jest undefined, coś jest źle + teraz nie mogę tu dawać commitów xd

  if (isCountryLoading || isBorderLoading) return 'Loading...';

  if (countryError || borderError)
    return 'An error has occurred: ' + countryError.message;

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
  } = countryData[0];

  const currencyNames = Object.values(currencies).map(
    (currency) => currency.name
  );
  const nativeNames = Object.values(nativeName).map((native) => native.common);
  const firstNativeName = nativeNames[nativeNames.length - 1];
  const languageList = Object.values(languages).join(', ');

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
