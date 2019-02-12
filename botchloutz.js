const tmi = require('tmi.js');
const prefix = "!";
const reactions = require('./react.js');

const tmiConfig = {
    options: {
        debug: true
    },
    connection: {
        reconnect:  true
    },
    identity: {
        username: "shuuuuuulz",
        password: "oauth:42oorjrofccpsjrckj1vs4cp2p3804"
    },
    channels: [
        "z_trahm"
    ]
};

let client = new tmi.client(tmiConfig);

client.connect();

function commandParser(message){
    let prefixEscaped = prefix.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    let regex = new RegExp("^" + prefixEscaped + "([a-zA-Z]+)\s?(.*)");
    return regex.exec(message);
}

client.on('chat', (channel, user, message, isSelf) => {
    if (isSelf) return;

    let fullCommand = commandParser(message);

    if(fullCommand){
        let command = fullCommand[1];
        let param = fullCommand[2];

        switch(command){
            case "chloute":
                client.say(channel, "CHLOUTE T TRO BO VIEN ON BAISE");
                break;
            case "tag":
                client.say(channel, "TAG IL EST PA BO MAI SA BARBE SI");
                break;
            case "mouton":
                client.say(channel, "MOUTON C LE PLU BO DU CHAT EN PLUS C UN 10E");
                break;
            case "pika":
                client.say(channel, "PIKA C LE PLU BO LE PLU FOR IL EST 18 FOIS CHAMPION DU MONDE DE TM");
                break;
            case "pavard":
                client.say(channel, "SECOND POTEAU PAVAAAAAAAAAAAAAAAAAAAAARD");
                break;
            case "noob":
                client.say(channel, "NOOB > SPHZ BANDE DE MERD A FINIR 9EME DE LA NTL");
                break;
            case "skin":
                client.say(channel, "HO LOL SCHULTZ TON SKIN ON DIRAI UN PICASSO");
                break;
            case "z":
                client.say(channel, "Z IL EST TROP TROP BEAU ET IL EST SUPER FOR A TRACKMANIO");
                break;
            case "yemen":
                client.say(channel, "JE SUIS ANALYSTE FINANCIER JE NPEUX PAS ALLER AU YEMEN");
                break;
            case "ecoute":
                client.say(channel, "Ecoute moi bien mon petit pote , que les choses soient claires. Tu n´es pas intouchable, contrairement à ce que tu crois. On sait que tu postes depuis ta chambre, quelque part dans le monde. On a tous tes coordonnées postales. Donc je te conseille d´arrêter de dire des conneries si tu ne veux pas devoir expliquer à tes parents pourquoi ils doivent aller purger une peine pour payer tes anneries.");
                break;
        }
    } else {
        let words = message.toLowerCase().split(" ");
        for(let word of words) {
            let reaction = reactions[word];
            if(reaction){
                client.say(channel, reaction);
            }
        }
    }
});
