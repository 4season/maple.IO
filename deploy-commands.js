const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId } = require('./config.json');
const token = process.env.token;

const commands = [];
const commandFiles_L = fs.readdirSync('./commands/legacy/').filter(file => file.endsWith('.js'));
const commandFiles_N = fs.readdirSync('./commands/new/').filter(file => file.endsWith('.js'));
const commandFiles_T = fs.readdirSync('./commands/test-lab/').filter(file => file.endsWith('.js'));

for (const file of commandFiles_L) {
    const commandLegacy = require(`./commands/legacy/${file}`);
    commands.push(commandLegacy.data.toJSON());
}

for (const file of commandFiles_N) {
    const commandNew = require(`./commands/new/${file}`);
    commands.push(commandNew.data.toJSON());
}

for (const file of commandFiles_T) {
    const commandTestlab = require(`./commands/test-lab/${file}`);
    commands.push(commandTestlab.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);