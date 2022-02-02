const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { request } = require('request');
const { cheerio } = require('cheerio');
const { fs } = require('fs');

const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('공지사항')
        .setDescription('공지사항 목록을 출력합니다.'),
    async execute(interaction) {
        await interaction.reply('Success!');
        await interaction.send({ embeds: [exampleEmbed] });
    },
};