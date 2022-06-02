fetch("https://next-stg.paymobsolutions.com/next/api/v1/marketplace/test/intention/").then(function (response) {
        return response.json();
    }).then(function (json) {
        Paymob("pkt_ocyiPARECljo1duevlMSKpn3beCz9z5h").checkoutButton(json.client_secret).mount("#paymob-checkout");
    }).catch(function (err) {
        console.error(err);
    });
