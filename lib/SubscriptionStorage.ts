import {Getter, HashMap} from '@icancode/base';

/**
 * SubscriptionStorage
 */
export default interface SubscriptionStorage {
  /**
   * Get shop's subscription by app
   * @param {string} shop shop's id
   * @param {string} app app's id
   * @returns {Promise<Getter>}
   */
  getSubscription(shop: string, app: string): Promise<Getter>;

  /**
   * Set shop's subscription by app
   * @param {string} shop shop's id
   * @param {string} app app's id
   * @param {HashMap} subscription
   * @returns {Promise<void>}
   */
  setSubscription(shop: string, app: string, subscription: HashMap): Promise<void>; // eslint-disable-line max-len
}
