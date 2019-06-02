
interface IConfig {
  baseUrl: string;

  api: {
    url: string;
  };
}

export let config: IConfig;

config = {
  baseUrl: '/',
  api: {
    url: 'http://localhost:8080'
  }
};


(window as any).config = config;
