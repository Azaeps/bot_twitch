const tmi = require('tmi.js');

const tmiConfig = {
    options: {
        debug: true
    },
    connection: {
        reconnect:  true
    },
    identity: {
        username: "roleLG",
        password: "oauth:funrmvzyxb4cr4lmeoxomx1ev2wmlk"
    },
    channels: [
        "Etoiles"
    ]
};

let client = new tmi.client(tmiConfig);

client.connect();

client.on("join", function (channel, username, isSelf) {
  if (isSelf) return;

  client.whisper(username, "LE ROLE D'ETOILES EST LOUP GRAOUGRAOU");
});
