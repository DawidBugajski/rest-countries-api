import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { API_URL_ALPHA } from 'utils/constants';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SpinnerBorderCountries from 'components/SpinnerBorderCountries';
import Error from 'components/Error';

const BorderCountries = ({ borders }) => {
  const {
    data: borderData,
    isLoading: isBorderLoading,
    error: borderError,
  } = useQuery({
    queryKey: ['borders', borders],
    queryFn: async () => {
      if (!borders) {
        return [];
      }
      const promises = borders.map((border) =>
        axios.get(API_URL_ALPHA + border).then((res) => res.data)
      );
      return Promise.all(promises);
    },
  });
  if (isBorderLoading) return <SpinnerBorderCountries />;
  if (borderError) return <Error errorMessage={borderError.message} />;

  const borderCountries = borderData.map((border) => {
    const {
      name: { common: borderCountry },
      flags: { png: borderCountryFlag },
    } = border[0];

    return (
      <div className='m-0.5 2xl:m-1' key={borderCountry}>
        <Link to={`/name/${borderCountry}`}>
          <img
            className='w-16 h-10 border-[1px] sm:w-24 sm:h-14 2xl:w-32 2xl:h-24 shadow-xl'
            src={borderCountryFlag}
            alt={borderCountry}
          />
        </Link>
      </div>
    );
  });

  return (
    <>
      <p className='font-semibold 2xl:text-xl'>Border Countries:&nbsp;</p>
      <div className='flex flex-wrap'>{borderCountries}</div>
    </>
  );
};

export default BorderCountries;
