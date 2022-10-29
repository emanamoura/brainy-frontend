import { Mode } from './types';

export class GlobalConfig {
  private _mode: Mode;
  private _baseBrainyURL: string;

  constructor() {
    this._mode = process.env.NODE_ENV ?? 'development';
    this._baseBrainyURL = process.env.NEXT_PUBLIC_BRAINY_DIGITAL_URL;
  }

  mode(): Mode {
    return this._mode;
  }

  baseBrainyURL(): string {
    return this._baseBrainyURL;
  }
}

const globalConfig = new GlobalConfig();

export default globalConfig;
