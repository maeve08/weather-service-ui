import {
  action,
  observable
} from 'mobx';
import {CitiesState} from './citiesState';
import {retrieveCities} from '../service/getCitiesService';

export class AppState {

  @observable
  citiesState = new CitiesState();

  @observable
  cities;

  @action.bound
  async getCities() {
    const response = await retrieveCities();
    return response;
  }
}


const appState = new AppState();

export default appState;
