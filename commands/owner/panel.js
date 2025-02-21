const { ApplicationCommandType, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const { owner, logs } = require("../../config.json");

module.exports = {
    name: "painel-cloner",
    description: "Envie o painel de clonagem",
    type: ApplicationCommandType.ChatInput,
    run: async(client, interaction) => {
        if (interaction.user.id !== owner) { return interaction.reply({ content: `❌ | Permissão negada.`, ephemeral: true }); }
        try {
            await interaction.channel.send({
                content: `## CLONER - 6M`,
                components: [
                    new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId(`panelcloner`)
                                .setLabel("Clonar um Servidor")
                                .setEmoji(`<:prancheta:1248301311418433717>`)
                                .setStyle(2),
                            new ButtonBuilder()
                                .setCustomId(`ClonerSite`)
                                .setLabel("Deselvolvimento")
                                .setEmoji(`🛠️`)
                                .setStyle(2)
                        )
                    ],
                    files: [
                        'https://cdn.discordapp.com/attachments/1268671902923096085/1296640821994586183/ENGINE_8.png?ex=6713065e&is=6711b4de&hm=f0034a8d39f6f2cb2602c182f10f9686698a8a230889fb7fdd378c50c9b5e018&'
                    ]
                });
            await interaction.reply({ content: `✅ **| Painel enviado com sucesso!**`, ephemeral: true });
        } catch (error) {
            console.log("Erro ao enviar o painel: ", error);
            await interaction.reply({ content: `❌ **| Ocorreu um erro ao enviar o painel.**`, ephemeral: true });
        }
    }
}
