const { Client, ChatInputCommandInteraction, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js")


module.exports = {
    name: "slap",
    description: "Slap a member.",
    category: "Fun",
    options: [
        {
            name: "user",
            description: "Mention a member.",
            type: 6,
            required: true,
        },
    ],

    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

    run: async(client, interaction) => {

        let user = interaction.options.getUser('user')

        var lista1 = [
            'https://imgur.com/HYJHoG7.gif',
            'https://imgur.com/9GxTsgl.gif',
            'https://imgur.com/mT4VjD6.gif',
            'https://imgur.com/mT4VjD6.gif',
            'https://imgur.com/w66ZqGR.gif'
        ];

        var lista2 = [
            'https://imgur.com/oSoudVd.gif',
            'https://imgur.com/T9w8eFV.gif',
            'https://imgur.com/nuDmQu5.gif',
            'https://imgur.com/wlLCjRo.gif',
            'https://imgur.com/sVeYncu.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];
        var random2 = lista2[Math.floor(Math.random() * lista2.length)];

        const embed = new EmbedBuilder()
            .setDescription(`**${interaction.user} Slapped ${user}.**`)
            .setImage(`${random1}`)
            .setColor("#c5a0c1")

        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('tapa')
                    .setLabel('Give back')
                    .setStyle(ButtonStyle.Primary)
                    .setDisabled(false)

            )

        const embed1 = new EmbedBuilder()
            .setDescription(`**${user} Returned the slap of ${interaction.user}.**`)
            .setColor("#c5a0c1")
            .setImage(`${random2}`)

        interaction.reply({ embeds: [embed], components: [button] }).then(() => {

            const filter = i => i.customId === 'tapa' && i.user.id === user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, max: 1 });

            collector.on('collect', async i => {
                if (i.customId === 'tapa') {
                    i.reply({ embeds: [embed1] })
                }
            });

        })

    }
}