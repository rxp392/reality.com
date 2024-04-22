import * as React from 'react';
import stripe from 'stripe'

stripe('sk_test_51KgxgXAwYUWZQRKs59Q3isoUkxeOX7NHeN8xK3Wv5VYvOE6pwEWjkmcVEdnLRN5e6bscp4kje3e1lTMua1ivQw7J00VZTndH6r');


function PricingPage() {
  return (
    <stripe-pricing-table pricing-table-id="prctbl_1OpGq7AwYUWZQRKshoYma5EK"
      publishable-key="pk_test_51KgxgXAwYUWZQRKsqSFL8iGvtHogaCSO04lv2PJOgQTsJdt5h82HEB0odpBSAUifF9Cua24O0sLt9ztd2tFmEF2I00T1dRJghr">
    </stripe-pricing-table>
  )

}

export default PricingPage;