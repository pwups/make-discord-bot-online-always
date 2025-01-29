require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('bad thinking diary', { type: 3 }); // "WATCHING bad thinking diary"
});

client.login(process.env.MTMyNDk3Nzc5MjI2MTI5MjA3Mg.GUfvBo.E3pOQ-F0GwEcQTNH2H3zGLv0PplHLX4sJ2KnfY);
