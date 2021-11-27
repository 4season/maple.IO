const { SlashCommandBuilder } = require('@discordjs/builders');

let switching_time = [];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('시간알림')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        const msg_r = interaction.reply;
        const msg_s = interaction.send;
        const msgTnt = interaction.content;
        const msgStr = msgTnt.split(" ");
        if (msgStr[1] === " ") {
            await msg_r('ON / OFF 로 설정을 변경하실수 있습니다.');
            await msg_s(`현제상태 '${switching_time[0].switch}'`);
        }
        else if (msgStr[1] === "ON") {
            if (switching_time[0].switch === true) {
                await msg_r("시간 알림기능이 이미 설정된 상태 입니다.");
            }
            else {
                switching_time[0].switch = true;
                await msg_r("시간 알림기능이 설정되었습니다.");
            }
        }
        else if (msgStr[1] === "OFF") {
            if (switching_time[0].switch === false) {
                await msg_r("시간 알림기능이 이미 해제된 상태 입니다.");
            } else {
                switching_time[0].switch = false;
                await msg_r("시간 알림기능이 해제되었습니다.");
            }
        }
    },
};