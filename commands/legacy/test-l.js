const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test-l')
        .setDescription('Replies with Legacy!'),
    async execute(interaction) {
        await interaction.reply('Success!');
    },
};