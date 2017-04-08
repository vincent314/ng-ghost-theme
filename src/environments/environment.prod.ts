import { AppConfig } from '../app/model/model';

const baseGhostUrl = 'http://virginiemoreau.fr';

export const environment:AppConfig = {
  production: true,
  api: {
    baseUrl: `${baseGhostUrl}/ghost/api/v0.1`,
    clientId: 'ghost-frontend',
    clientSecret: 'c9c2bbd9c8d7'
  },
  imageBaseUrl : baseGhostUrl
};
