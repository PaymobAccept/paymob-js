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