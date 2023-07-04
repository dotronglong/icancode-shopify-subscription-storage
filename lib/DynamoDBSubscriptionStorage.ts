import {Getter, HashMap} from '@icancode/base';
import SubscriptionStorage from './SubscriptionStorage';
import {
  DynamoDBSettingStorage,
  DynamoDBSettingStorageOptions,
} from '@icancode/shopify-setting-storage';

// eslint-disable-next-line max-len
export interface DynamoDBSubscriptionStorageOptions extends DynamoDBSettingStorageOptions {}

// eslint-disable-next-line max-len
const defaultDynamoDBSubscriptionStorageOptions: DynamoDBSubscriptionStorageOptions = {
  tableName: 'shopifySubscriptions',
};

/**
 * DynamoDBSubscriptionStorage
 *
 * Table should have shop as PK and app as SK
 */
export class DynamoDBSubscriptionStorage implements SubscriptionStorage {
  private options: DynamoDBSubscriptionStorageOptions;
  private storage: DynamoDBSettingStorage;

  /**
   * Constructor
   * @param {DynamoDBSubscriptionStorageOptions} options
   */
  constructor(options?: DynamoDBSubscriptionStorageOptions) {
    this.options = {...defaultDynamoDBSubscriptionStorageOptions, ...options};
    this.storage = new DynamoDBSettingStorage(this.options);
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

  /**
   * Delete current subscription's entry
   * @param {string} shop shop's id
   * @param {string} app app's id
   * @return {Promise<void>}
   */
  deleteSubscription(shop: string, app: string): Promise<void> {
    return this.storage.deleteSettings(shop, app);
  }
}
