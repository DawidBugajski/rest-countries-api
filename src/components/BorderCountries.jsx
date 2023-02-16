import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { API_URL_ALPHA } from 'utils/constants';
import axios from 'axios';

const BorderCountries = ({ borders }) => {
  console.log(borders);
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
  if (isBorderLoading) return 'Loading...';
  if (borderError) return 'An error has occurred: ' + borderError.message;

  const borderCountries = borderData.map((border) => {
    const {
      name: { common: borderCountry },
      flags: { png: borderCountryFlag },
    } = border[0];

    return (
      <div className='flex' key={borderCountry}>
        <p>{borderCountry}</p>
        <img className='w-5 h-5' src={borderCountryFlag} alt={borderCountry} />
      </div>
    );
  });

  return <div className='flex flex-wrap'>Borders:&nbsp;{borderCountries}</div>;
};

export default BorderCountries;
