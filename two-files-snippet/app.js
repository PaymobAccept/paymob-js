fetch("https://next-stg.paymobsolutions.com/next/api/v1/marketplace/intention/").then(function (response) {
        return response.json();
    }).then(function (json) {
        Paymob("pkl_iCkDYopU6LIibxzIGjqmKOiW0kYAPCx8").checkoutButton(json.client_secret).mount("#paymob-checkout");
    }).catch(function (err) {
        console.error(err);
    });
