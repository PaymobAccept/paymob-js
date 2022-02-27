// Request an intention creation from your marketplace APIs and confirm the payment using the client_secret.
fetch("https://api.yor_backend.com").then(function (response) {
        return response.json();
    }).then(function (json) {
        // client_secret is your customer reference for the created intention, and it's used for one time only.
        Paymob("your_public_key").checkoutButton(json.client_secret).mount("#paymob-checkout");
    }).catch(function (err) {
        console.error(err);
    });
