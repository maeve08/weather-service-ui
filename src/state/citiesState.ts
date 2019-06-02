import {CitiesModel} from '../model/citiesModel';
import { action, observable } from 'mobx';
import appState
  from './appState';


export class CitiesState implements CitiesModel {

  @observable
  cities;

  @action.bound
  async getCitiesResponse() {
    await appState.getCities()
      .then(
      response => {
        appState.cities = response;
      },({ response }) => {console.log(response)}

    );
  }
}

