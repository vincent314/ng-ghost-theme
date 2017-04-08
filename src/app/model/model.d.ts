export interface ApiConfig {
  baseUrl: string;
  clientId: string;
  clientSecret: string;
}

export interface AppConfig {
  production: boolean;
  api: ApiConfig;
  imageBaseUrl: string;
}
