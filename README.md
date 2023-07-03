# icancode-shopify-subscription-storage

## How to use

```javascript
import {FileSubscriptionStorage} from '@icancode/shopify-subscription-storage';

// use default configuration
let subscriptionStorage = new FileSubscriptionStorage();

// specify location to store subscription's data
// let subscriptionStorage = new FileSubscriptionStorage({location: '.subscriptions'});

await subscriptionStorage.getSubscription('my-shop', 'my-app');
```