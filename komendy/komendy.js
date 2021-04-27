module.exports = {
    name: 'komendy',
    description: "Ta komenda pokazuje wszystkie komendy w bocie",
    execute(message, args){
        message.channel.send("```Wszyskie komendy jakie obsługuje bot (lista będzie aktualizowana wraz z botem):```");
        message.channel.send("**WSZYSTKIE KOMENDY ZACZYNAJĄ SIĘ OD .manora !!!**");
        message.channel.send("**-dajmirole =** *daje rolę Członek Serwera*");
        message.channel.send("**-www =** *Daje link do strony internetowej serwera*");
    }
}