## Flash checkout integration handbook
flash integration guid.

## What's Inside:
- Flash integration sample in one file. 
- Flash integration sample in two files. 

## How it works:
- just drag and drop index.html file in the browser.

## Notes:
- samples based on test credentials.

## Update Credentials:
inside the files you will find the below with updating example:
 - `https://next-stg.paymobsolutions.com/marketplace/secret/ibiza/` => `merchant_backend_url.com` 
 - `pkt_ocyiPARECljo1duevlMSKpn3beCz9z5h` => `pkl_merchant_public_key`

 ## Simple API Refrence:
 whats happen inside snippets simply is loading paymob javascript SDK and letting it do the magic, here is a reference for SDK main APIs.
 <!-- - `Paymob()` Main function thats -->
|API|description|parameters|param type   |   |
|---|---|---|---|---|
| `Paymob()`  |The main function comes with some different methods.| - `public_key` is your paymob public key. |string|   |
| `checkoutButton()`  |The function responsible for asking `Paymob()` to get ready to start the magic through the checkout with paymob button.| - `client_secret` is your customer reference for the created intention, and it's used for one time only.  |string|   |
| `mount()`  |after communications between `Paymob()` and `checkoutButton()` it's time to mount the button in UI for letting your customers start their journey.| - `selector` a CSS selector for the HTML element in your DOM to mount the button inside, we are strongly recommending using `id`.   |string|   |

 ## Backend Endpoints Refrence:

- first request is for intention inquires like avilable payment methods and transaction metadata. 

URL: `https://flashapi.paymob.com/v1/intention/element/public_key/client_secret/`

- after listing the payment methods in your UI, here is the confirmation endpoint. 

URL: `https://flashapi.paymob.com/v1/intention/confirm/customer/` 

METHOD: `POST`

**NOTE**: the payload different from payment method to another. 
- Card payment confirm request payload.

```json
{
   "identifier":"4111111111111111",
   "cvn":"123",
   "sourceholder_name":"Muhammed",
   "expiry_month":"11",
   "expiry_year":"22",
   "save_card":true,
   "method":"card",
   "subtype":"CARD",
   "public_key":"pk_live_****",
   "client_secret":"csk_live_****",
   "extras":{},
   "fingerprint_data":{
      "requestId":"****",
      "visitorId":"****",
      "visitorFound":true,
      "meta":{
         "version":"****"
      },
      "confidence":{
         "score": 0
      }
   }
}
```

- Wallet payment confirm request payload.

```json
{
   "method":"wallets",
   "subtype":"WALLETS",
   "wallet_number":"+2001010101010",
   "name":"Muhammed",
   "public_key":"pk_live_****",
   "client_secret":"csk_live_****",
   "fingerprint_data":{
      "requestId":"****",
      "visitorId":"****",
      "visitorFound":true,
      "meta":{
         "version":"****"
      },
      "confidence":{
         "score": 0
      }
   }
}
```


- Kiosk payment confirm request payload.

```json
{
   "method":"kiosk",
   "subtype":"KIOSK",
   "wallet_number":"+2001010101010",
   "name":"Muhammed",
   "public_key":"pk_live_****",
   "client_secret":"csk_live_****",
   "fingerprint_data":{
      "requestId":"****",
      "visitorId":"****",
      "visitorFound":true,
      "meta":{
         "version":"****"
      },
      "confidence":{
         "score": 0
      }
   }
}
```

- Bank Installment payment confirm request payload.

You will need to list avilable banks and plans first using this endpoint:

URL:` https://flashapi.paymob.com/v1/intention/installment-options/`

METHOD: `POST`

Payload: 
```json
{
   "method":"card-installment",
   "public_key":"pk_live_****",
   "client_secret":"csk_live_****",
   "fingerprint_data":{
      "requestId":"****",
      "visitorId":"****",
      "visitorFound":true,
      "meta":{
         "version":"****"
      },
      "confidence":{
         "score": 0
      }
   }
}
```

After listing the banks and user chose his bank, we will send selected bank plan and card data to this endpoint:

URL: `https://flashapi.paymob.com/v1/intention/confirm/customer/` 

METHOD: `POST`

```json
{
   "identifier":"4111111111111111",
   "cvn":"123",
   "sourceholder_name":"Muhammed",
   "expiry_month":"11",
   "expiry_year":"22",
   "save_card":true,
   "method":"card",
   "subtype":"CARD",
   "public_key":"pk_live_****",
   "client_secret":"csk_live_****",
   "extras":{},
   "tenure": "selected_plan_id",
   "fingerprint_data":{
      "requestId":"****",
      "visitorId":"****",
      "visitorFound":true,
      "meta":{
         "version":"****"
      },
      "confidence":{
         "score": 0
      }
   }
}
```