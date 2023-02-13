import React, { useContext } from 'react';
import { CountryContext } from 'components/CountryProvider';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RegionFilterDropdown = () => {
  const { countryData, selectedRegion, setSelectedRegion } =
    useContext(CountryContext);

  // all regions based on the API
  const regions = [...new Set(countryData.map(({ region }) => region))];

  const renderRegions = ['Filter by region', ...regions].map((region) => (
    <MenuItem style={{ fontFamily: 'Nunito Sans' }} key={region} value={region}>
      {region}
    </MenuItem>
  ));

  const handleChange = (e) => setSelectedRegion(e.target.value);

  return (
    <div className='w-11/12 mx-auto mb-10 lg:m-0 lg:w-[200px]'>
      <FormControl
        sx={{
          width: '50%',
          '& .MuiInputBase-root': {
            fontFamily: 'Nunito Sans',
          },
        }}
      >
        <Select
          labelId='region-filter-select-label'
          id='region-filter-select'
          value={selectedRegion}
          onChange={handleChange}
        >
          {renderRegions}
        </Select>
      </FormControl>
    </div>
  );
};

export default RegionFilterDropdown;
