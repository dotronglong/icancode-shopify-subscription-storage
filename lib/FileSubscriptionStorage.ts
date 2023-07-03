import {Getter, HashMap} from '@icancode/base';
import SubscriptionStorage from './SubscriptionStorage';
import {
  FileSettingStorage,
  FileSettingStorageOptions,
} from '@icancode/shopify-setting-storage';

// eslint-disable-next-line max-len
export interface FileSubscriptionStorageOptions extends FileSettingStorageOptions {}

// eslint-disable-next-line max-len
const defaultFileSubscriptionStorageOptions: FileSubscriptionStorageOptions = {
  location: '.subscriptions',
};

/**
 * FileSubscriptionStorage
 */
export class FileSubscriptionStorage implements SubscriptionStorage {
  private options: FileSubscriptionStorageOptions;
  private storage: FileSettingStorage;

  /**
   * Constructor
   * @param {FileSubscriptionStorageOptions} options
   */
  constructor(options?: FileSubscriptionStorageOptions) {
    this.options = {...defaultFileSubscriptionStorageOptions, ...options};
    this.storage = new FileSettingStorage(this.options);
  }

  /**
   * Get shop's subscription by app
   * @param {string} shop shop's id
   * @param {string} app app's id
   * @return {Promise<Getter>}
   */
  getSubscription(shop: string, app: string): Promise<Getter> {
    return this.storage.getSettings(shop, app);
  }

  /**
   * Set shop's subscription by app
   * @param {string} shop shop's id
   * @param {string} app app's id
   * @param {HashMap} subscription
   * @return {Promise<void>}
   */
  setSubscription(shop: string, app: string, subscription: HashMap): Promise<void> { // eslint-disable-line max-len
    return this.storage.setSettings(shop, app, subscription);
  }
}
