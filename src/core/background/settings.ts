const bdb = require('bdb');
const DB = require('bdb/lib/DB');
import { get, put } from '@/utils/db';

const RPC_HOST_DB_KEY = 'rpc_host';
const RPC_API_KEY_DB_KEY = 'rpc_api_key';
const ANALYTICS_OPT_IN_KEY = 'analytics_opt_in_key';

const DEFAULT_HOST =
  process.env.DEFAULT_HOST || 'https://api.handshakeapi.com/hsd';
const DEFAULT_API_KEY = process.env.DEFAULT_API_KEY || '';

type SettingsServiceOptions = {
  apiHost: string;
  apiKey: string;
};

export default class SettingsService {
  apiHost: string;
  apiKey: string;
  store: typeof DB;

  constructor(options: SettingsServiceOptions) {
    this.apiHost = options.apiHost;
    this.apiKey = options.apiKey;
  }

  getAPI = async () => {
    const apiHost = this.apiHost || (await get(this.store, RPC_HOST_DB_KEY));
    const apiKey = this.apiKey || (await get(this.store, RPC_API_KEY_DB_KEY));

    return {
      apiHost: apiHost || DEFAULT_HOST,
      apiKey: apiKey || DEFAULT_API_KEY,
    };
  };

  setRPCHost = async (apiHost: string) => {
    await put(this.store, RPC_HOST_DB_KEY, apiHost);
    this.apiHost = apiHost;
    return true;
  };

  setRPCKey = async (apiKey: string) => {
    await put(this.store, RPC_API_KEY_DB_KEY, apiKey);
    this.apiKey = apiKey;
    return true;
  };

  setAnalytics = async (optIn = false) => {
    await put(this.store, ANALYTICS_OPT_IN_KEY, optIn);
    return true;
  };

  getAnalytics = async () => {
    const optIn = await get(this.store, ANALYTICS_OPT_IN_KEY);
    return !!optIn;
  };

  async start() {
    this.store = bdb.create('/setting-store');
    await this.store.open();
    const { apiKey, apiHost } = await this.getAPI();
    this.apiKey = apiKey;
    this.apiHost = apiHost;
  }

  async stop() {}
}
