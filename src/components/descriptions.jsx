import React from 'react';
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa';
import { BiHappy } from 'react-icons/bi';
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md';
import '../styles/descriptions.scss';

const descriptions = ({ weather, units }) => {
  const tempUnit = units === 'imperial' ? '°F' : '°C';
  const windUnit = units === 'imperial' ? 'm/h' : 'm/s';

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: 'min',
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: 'max',
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: 'feels like',
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: 'pressure',
      data: weather.pressure,
      unit: 'hPa',
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: 'humidity',
      data: weather.humidity,
      unit: '%',
    },
    {
      id: 6,
      icon: <FaWind />,
      title: 'wind speed',
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className='section section__descriptions'>
      {cards.map(({ id, icon, title, data, unit }) => (
        <div
          key={id}
          className='card'>
          <div className='description__card-icon'>
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default descriptions;