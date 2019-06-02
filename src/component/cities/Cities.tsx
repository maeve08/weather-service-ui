import * as React from 'react';

import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {
  default as appState,
  AppState
} from '../../state/appState';
import './cities.css';

interface CitiesPageProp {
  appState: AppState;
}

@observer
export class Cities extends React.Component<CitiesPageProp> {
  props;

  @observable
  cities;

  constructor(props: CitiesPageProp) {
    super(props);

    appState.citiesState.getCitiesResponse();

  }

  render() {
    return (

      <div id={'pageContainerId'}>

        <h1>Temperatures per City</h1>
              <div id={'tableContainerId'}>
                <table>
                  <thead>
                    <tr>
                      <td>City</td>
                      <td>Temperature</td>
                    </tr>
                  </thead>
                  <tbody>

                  { appState && appState.cities &&
                    appState.cities.map(
                      (city, index) => (
                      <tr key={index}>
                        <td>{city.name}</td>
                        <td>{city.temperature}</td>
                      </tr>
                      )
                    )
                  }

                  </tbody>
                </table>
              </div>
      </div>
    );
  }
}

export default Cities;
