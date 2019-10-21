import * as React from 'react';
import * as style from '../../css/styles.css';

import {
  getDayName,
  weatherState
} from "./utils/Forecast-utils";



export const Forecast = props => {

  let data = Array.from(props.forecast)
  return (
    <div className={style.data}>
      {data.map((temp, index) => {
        return (
          <div key={index}>
            {index === 0 ?
              <div className={style.rightSpace}>
                <div className={style.city}>{props.city}</div>
                <div className={style.today}>{getDayName(temp.applicable_date)}</div>
                <div className={style.center}>
                  <div><img src={weatherState(temp.weather_state_name)} className={style.image} /></div>
                  <div>{temp.the_temp.toFixed(2)} ℃</div>
                  <div>{temp.weather_state_name}</div>
                </div>
              </div>
              :
              <div className={(index !== 1 ? style.leftSpace : '')}>
                <div>{getDayName(temp.applicable_date)}</div>
                <div>
                  <div><img src={weatherState(temp.weather_state_name)} className={style.image} /></div>
                  <div>{temp.the_temp.toFixed(2)} ℃</div>
                  <div>{temp.weather_state_name}</div>
                  <div>Max: {temp.max_temp.toFixed(2)}</div>
                  <div>Min: {temp.min_temp.toFixed(2)}</div>
                </div>
              </div>
            }
          </div>
        )
      })}
    </div>
  )
}
