const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test-t')
        .setDescription('Replies with Test-Lab!'),
    async execute(interaction) {
        await interaction.reply('Success!');
    },
};