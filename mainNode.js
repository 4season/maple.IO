const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
let token = process.env.token;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles_L = fs.readdirSync('./commands/legacy/').filter(file => file.endsWith('.js'));
const commandFiles_N = fs.readdirSync('./commands/new/').filter(file => file.endsWith('.js'));
const commandFiles_T = fs.readdirSync('./commands/test-lab/').filter(file => file.endsWith('.js'));

for (const file of commandFiles_L) {
    const commandLegacy = require(`./commands/legacy/${file}`);
    client.commands.set(commandLegacy.data.name, commandLegacy);
}

for (const file of commandFiles_N) {
    const commandNew = require(`./commands/new/${file}`);
    client.commands.set(commandNew.data.name, commandNew);
}

for (const file of commandFiles_T) {
    const commandTestlab = require(`./commands/test-lab/${file}`);
    client.commands.set(commandTestlab.data.name, commandTestlab);
}

client.once('ready', () => {
    console.log('client is ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.login(token);
//"token": "process.env.token"