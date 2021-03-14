const Discord = require('discord.js');
const client = new Discord.Client();
/*
 * Create a new webhook
 * The Webhooks ID and token can be found in the URL, when you request that URL, or in the response body.
 * https://discord.com/api/webhooks/12345678910/T0kEn0fw3Bh00K
 *                                  ^^^^^^^^^^  ^^^^^^^^^^^^ 
 *                                  Webhook ID  Webhook Token
 */

const hookid = (`ID_HERE`)
const hooktoken = (`TOKEN_HERE`)
const message = (`MESSAGE_HERE`)


const webhookurl = new Discord.WebhookClient(`${hookid}`,`${hooktoken}`);

setInterval(() => {
    webhookurl.send(message);
  }, 1);