const { SlashCommandBuilder } = require('@discordjs/builders');
const { moment } = require('moment'); require('moment-timezone');

const timezoneGet = new Date();
const timezoneGet_time = timezoneGet.getTime();
const timezoneSet = timezoneGet.setTime(timezoneGet_time+(9*60*60*1000));
const timeFormat_KST = new Date(timezoneSet);
const yearGet = timeFormat_KST.getFullYear();
const monthGet = timeFormat_KST.getMonth();
const dateGet = timeFormat_KST.getDate();
const dayGet = timeFormat_KST.getDay();
const hourGet = timeFormat_KST.getHours();
const minuteGet = timeFormat_KST.getMinutes();
const secondGet = timeFormat_KST.getSeconds();

moment.tz.setDefault("Asia/Seoul");
console.log(`${moment()}`);

const dayList = ["월", "화", "수", "목", "금", "토", "일"]; //1, 2, 3, 4, 5, 6, 0
const day_toString = ( ) => {

    if (dayGet === 0) {
        return dayList[6];
    }
    else {
        const dayMatch = dayGet - 1;
        return dayList[dayMatch];
    }
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test-l-kst')
        .setDescription('Replies with Legacy!'),
    async execute(interaction) {
        await interaction.reply(`현재시각 ${yearGet}년 ${monthGet+1}월 ${dateGet}일 ${day_toString()}요일 ${hourGet}시 ${minuteGet}분 ${secondGet}초 입니다.`);
    },
};