// NAVIGATION
function navigate(pageId, button) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });

    document.getElementById(pageId).classList.remove('hidden');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    if (button) {
        button.classList.add('active');
    }

}

// TOGGLE LIGHT //
function toggleMode() {
    document.body.classList.toggle("light-mode");
}

// SHOW GENRE //
function showGenre(genre) {
        document.querySelectorAll('[id$= "-games"]').forEach(section => {
            section.classList.add("hidden");
        });

        document.getElementById(genre + "-games").classList.remove("hidden");

        document.getElementById("game-display").classList.add("hidden");
        document.getElementById("info-box").classList.add("hidden");

        const genreTitle = document.getElementById("genre-title");
        genreTitle.textContent = genre.toUpperCase() + " GAMES";

    }

// GAME SWITCHING
function showGame(game) {
    const title = document.getElementById("game-title");
    const image = document.getElementById("game-image");
    const desc = document.getElementById("game-description");
    const display = document.getElementById("game-display");
    const infoBox = document.getElementById("info-box");

    const codButtons = document.getElementById("cod-Buttons");
    const SiegeButtons = document.getElementById("Siege-Buttons");
    const csgoButtons = document.getElementById("csgo-Buttons");
    const darksoulsButtons = document.getElementById("darksouls-Buttons");
    const thewitcherButtons = document.getElementById("thewitcher-Buttons");
    const minecraftButtons = document.getElementById("minecraft-Buttons");
    const nomansskyButtons = document.getElementById("nomanssky-Buttons");
    const zzzButtons = document.getElementById("zzz-Buttons");
    const genshinButtons = document.getElementById("genshin-Buttons");

    const siegeText = document.getElementById("siege-extra-text");
    const codText = document.getElementById("cod-extra-text");
    const csgoText = document.getElementById("csgo-extra-text");
    const darksoulsText = document.getElementById("darksouls-extra-text");
    const thewitcherText = document.getElementById("thewitcher-extra-text");
    const minecraftText = document.getElementById("minecraft-extra-text");
    const nomansskyText = document.getElementById("nomanssky-extra-text");
    const zzzText = document.getElementById("zzz-extra-text");
    const genshinText = document.getElementById("genshin-extra-text");

    display.classList.remove("hidden");
    infoBox.classList.remove("hidden");

    siegeText.textContent = "";
    codText.textContent = "";
    csgoText.textContent = "";
    darksoulsText.textContent = "";
    thewitcherText.textContent = "";
    minecraftText.textContent = "";
    nomansskyText.textContent = "";
    zzzText.textContent = "";
    genshinText.textContent = "";


    if (game === "siege") {
        title.textContent = "Rainbow Six Siege";
        image.src = "Images/Siege background.jpg";
        image.alt = "Rainbow Six Siege gameplay";

        desc.textContent =
            "Tom Clancy’s Rainbow Six Siege, also commonly referred to as Rainbow Six or Siege, " +
        "is a tactical first-person shooter that focuses primarily on strategy, teamwork, " +
        "and environmental control rather than fast reflex-based gameplay found in many " +
        "other FPS titles such as Counter-Strike: Global Offensive and several Call of Duty " +
        "games. However, despite this heavy emphasis on tactical decision-making, fast " +
        "reflexes and strong gun control remain important factors in how players improve " +
        "and perform within the game.";
        
        SiegeButtons.classList.remove("hidden");
        codButtons.classList.add("hidden");
        csgoButtons.classList.add("hidden");
        darksoulsButtons.classList.add("hidden");
        thewitcherButtons.classList.add("hidden");
        minecraftButtons.classList.add("hidden");
        nomansskyButtons.classList.add("hidden");
        zzzButtons.classList.add("hidden");
    }

    if (game === "cod") {
        title.textContent = "Call of Duty";
        image.src = "Images/cod-modern-warfare-2-xbox-1.png";
        image.alt = "Call of Duty Modern Warfare 2";
        desc.textContent =
            "Call of Duty is a fast-paced first-person shooter that focuses on quick reactions, smooth movement, and fast gunfights. " +
            "Unlike slower tactical shooters, Call of Duty rewards aggressive playstyles and fast decision making. " +
            "Players are encouraged to move around the map constantly, earn killstreak rewards, and improve through progression systems. " +
            "The game is designed to be accessible to new players while still being competitive at higher levels.";

            SiegeButtons.classList.add("hidden");
        codButtons.classList.remove("hidden");
        csgoButtons.classList.add("hidden");
        darksoulsButtons.classList.add("hidden");
        thewitcherButtons.classList.add("hidden");
        minecraftButtons.classList.add("hidden");
        nomansskyButtons.classList.add("hidden");
        zzzButtons.classList.add("hidden");
    }

    if (game === "csgo") {
        title.textContent = "Counter-Strike: Global Offensive";
        image.src = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/capsule_616x353.jpg?t=1749053861";
        image.alt = "CSGO gameplay";

        desc.textContent =
            "Counter-Strike: Global Offensive also known now by the community and everyone as CS2. CS is a first-person shooter " +
            "that focuses on map knowledge, gun-control and precision gunplay and teamwork. CS is different to other fps titles with " +
            "it mainly being a 5 vs 5 players must manage an in game economy to buy weapon and equipmment each round and since there are " +
            "no respawn during the round  every utility used, gun brought will matter. But if there are players at the end of the round " +
            " when it end the next round they will keep every weapon and utility they have picked up to the next round.";

        SiegeButtons.classList.add("hidden");
        codButtons.classList.add("hidden");
        csgoButtons.classList.remove("hidden");
        darksoulsButtons.classList.add("hidden");
        thewitcherButtons.classList.add("hidden");
        minecraftButtons.classList.add("hidden");
        nomansskyButtons.classList.add("hidden");
        zzzButtons.classList.add("hidden");
    }

    if (game === "dark-souls") {
        title.textContent = "Dark souls";
        image.src = "Images/darksouls.jpg";
        image.alt = "Dark Souls gameplay";

        desc.textContent =
            "Dark Souls is a challenging action RPG known for iits punishing difficulty, amazing lore, a rewarding combat system. " +
            "The game focuses on player skill, patience, and learning enemy attack patterns. With that Dark Souls encourages the " +
            "player on careful exploration, strategic combat and the persistence through the failure.";

        SiegeButtons.classList.add("hidden");
        codButtons.classList.add("hidden");
        csgoButtons.classList.add("hidden");
        darksoulsButtons.classList.remove("hidden");
        thewitcherButtons.classList.add("hidden");
        minecraftButtons.classList.add("hidden");
        nomansskyButtons.classList.add("hidden");
        zzzButtons.classList.add("hidden");
    }

    if (game === "thewitcher") {
        title.textContent = "The Witcher 3";
        image.src = "Images/thewitcher3.jpg";
        image.alt = "The Witcher gameplay";

        desc.textContent = 
        "The Witcher 3 is a story driven RPG game, focusing on the players actions and choices with in the game, also having its open world map " +
        "for exploration, and its own character development. Unlike Dark souls focusing on its mass difficulty and combat as well as its heavy exploration. " +
        "While The Witcher 3 focuses much more on a character sided story instead of just focusing on a world building one, with focuses such as, choices " +
        "and character development as well as quests, characters and endings making players focus on so many other things than just a single objective.";

        SiegeButtons.classList.add("hidden");
        codButtons.classList.add("hidden");
        csgoButtons.classList.add("hidden");
        darksoulsButtons.classList.add("hidden");
        thewitcherButtons.classList.remove("hidden");
        minecraftButtons.classList.add("hidden");
        nomansskyButtons.classList.add("hidden");
        zzzButtons.classList.add("hidden");
    }

    if (game === "minecraft") {
        title.textContent = "Minecraft";
        image.src = "Images/minecraft.jpg";
        image.alt = "Minecraft gameplay";

        desc.textContent = 
        "Mincecraft is a sandbox game basically endless possiblity from exploring, building and surviving in a block based game where you " +
        "the player has all freedom to do whatever you want in your world from destroying it to playing with friends and having fun building " +
        "Minecraft is a game where you build your own world with the only limitation is time and imagination and that is what makes minecraft " +
        "amazing and loved by many.";

        SiegeButtons.classList.add("hidden");
        codButtons.classList.add("hidden");
        csgoButtons.classList.add("hidden");
        darksoulsButtons.classList.add("hidden");
        thewitcherButtons.classList.add("hidden");
        minecraftButtons.classList.remove("hidden");
        nomansskyButtons.classList.add("hidden");
        zzzButtons.classList.add("hidden");
        genshinButtons.classList.add("hidden");
    }

    if (game === "nomanssky") {
        title.textContent = " No Mans Sky";
        image.src = "Images/nomanssky.jpg";
        image.alt = "No Mans Sky gameplay";

        desc.textContent = "No Mans Sky is a massive game with a lot of planets with in total of 18 Quintillion with all of them being unique, and " +
        "procedurally generated planets and with these planets are spread across the 255 Galaxies with each star system containing 2 to 6 planets" + 
        "You can own planets (somehow), and name them discover the life forms on those planets and being able to unload them onto a databse for all " +
        "players and community to look at. The game is still being updated today so more improvements building, ships and expeditions are going to be " +
        "added into the game";

        SiegeButtons.classList.add("hidden");
        codButtons.classList.add("hidden");
        csgoButtons.classList.add("hidden");
        darksoulsButtons.classList.add("hidden");
        thewitcherButtons.classList.add("hidden");
        minecraftButtons.classList.add("hidden");
        nomansskyButtons.classList.remove("hidden");
        zzzButtons.classList.add("hidden");
        genshinButtons.classList.add("hidden");
    }

    if (game === "zenless") {
        title.textContent = "Zenless Zone Zero";
        image.src = "Images/zenless.jpg";
        image.alt = "Zenless Zone Zero gameplay";

        desc.textContent = 
            "Zenless Zone zero also known as ZZZ is a gacha game made by Hoyoverse, a company which is very used to the gacha games development " +
            "as they have created many other games before Zenless. Zenless zone zero is unqiue than the other hoyogames and other gacha games as " +
            "ZZZ has its very own unqiues style from animation to the characters  personality and their design, and then the world design are all " +
            "unique to ZZZ, you'll be able notice its much more unique urban design than other gacha games.";

        SiegeButtons.classList.add("hidden");
        codButtons.classList.add("hidden");
        csgoButtons.classList.add("hidden");
        darksoulsButtons.classList.add("hidden");
        thewitcherButtons.classList.add("hidden");
        minecraftButtons.classList.add("hidden");
        nomansskyButtons.classList.add("hidden");
        zzzButtons.classList.remove("hidden");
        genshinButtons.classList.add("hidden");
    }

    if (game === "genshin") {
        title.textContent = "Genshin Impact";
        image.src = "Images/Genshin Impact.jpg";
        image.alt = "Genshin Impact gameplay";

        desc.textContent = 
            " Genshin Impact on of Hoyo first gacha games and it completly different due to it being open world action with the anime type style as " +
            "they have done with their future titles. With the visuals being the various elements that are for each character with all of them having " +
            "unqiue animation to their attacks. From other parts which is the open world as players can explore the vast world of Teyvat, from doing side " +
            "or main quests killing enemies for loot to improve your characters stats to then fight even stronger enemies and of course allowing players " +
            "to roll to see if they can get the character they want or weapon for that character.";

            SiegeButtons.classList.add("hidden");
            codButtons.classList.add("hidden");
            csgoButtons.classList.add("hidden");
            darksoulsButtons.classList.add("hidden");
            thewitcherButtons.classList.add("hidden");
            minecraftButtons.classList.add("hidden");
            nomansskyButtons.classList.add("hidden");
            zzzButtons.classList.add("hidden");
            genshinButtons.classList.remove("hidden");
    }
}

//SIEGE INFO SECTIONS
function showSiegeSection(section) {
    const text = document.getElementById('siege-extra-text');

    if (section === 'Gameplay') {
        text.innerText = "Rainbow Six Siege focuses on a slow, methodical gameplay where positioning, " +
        "gadgets, map knowledge and lastly fast relexes carry the importance how someone plays Siege. " +
        "As well as that Siege also has heavy gunplay needing the player to not only control their guns recoil " + 
        "but also on how to aim it towards the enemy. With all of that Siege is a very hard game because of its " +
        "difference in learing how to play the game successfully.";
    }

    if (section === 'Tactical') {
        text.textContent = "Rainbow six empasises on its tactical depth through focusing on a operator " +
        "abilities, map knowledge, and destructible environments. With that it makes sure players are careful " +
        "with how they apporach, and play the game against enemies. The game also switches roles for players " +
        "that are on both sides, switching to attack or defense depending on what role you played first. With " +
        "With all of that players are made sure to adapt to every round and game they play as every enemy can be " +
        "dumb, smart, and unpredictable.";
    }

    if (section === 'Difference') {
        text.textContent = "The difference in Siege is vastly from any other FPS games as it uses its reliance on " +
        "planning and information rather than the players pure gun skill but gun skill is still needed in killing your " +
        "opponents before they do that to you. The  other massive difference in Siege is in its slower-paced gameplay " +
        "from rewarding the player from patience, teamwork, and smart use of gadgets, where a single decision can basically " +
        "determine the outcome of the round";
    }

    if (section === 'Other media') {
        text.textContent = "Rainbow Six Siege has a community that enjoy the competitive gameplay side but also love the " +
        "game for just being fun obviously during the recent update they haven't being delivering on that Siege = fun but it " +
        "is slowly getting a bit better but still not to how it was back then as there are a lot of cheaters on PC of Siege, but " +
        "even with this players and content creators have still posted videos with tip and tricks and just overall learning videos as " +
        "siege is a very hard to to understand if your brand new. The community can be very toxic like a lot of FPS game titles talking " +
        "about how bad teammates are or just generally being asses to everyone or the game. Not pleasant but hey every game has people like that." +
        "Other things you can see will be clips which can either be good or just straight up horrendous nothing in between";
    }
}
            
// COD INFO SECTIONS
function showCodSection(section) {
    const extraText = document.getElementById("cod-extra-text");

    if (section === "Overview") {
        extraText.textContent =
        "Call of Duty a long-running series holding the title of best gaming genres back in the day with that being " +
        "first person shooter (FPS), with that this franchise is published by Activision and primarily developed by studios " +
        "such as Infinity Ward, Treyarch, and Sledgehammer games. With in this series it is known for its accessible gameplay, " +
        "cinematic presentation, and its heavy focus towards its fast paced combat which is completely different to many other " +
        "slower paced fps titles like Siege, CSGO, and Battlefield.";
    }

    if (section === "Key-Titles") {
        extraText.textContent =
        "Key Titles can be many games in the Call of Duty frachise but I will only list only the major games that are heavily loved " +
        "by the community these include Call of Duty 4: Modern Warfare (2007), World at War, Modern Warfare 2 (2009), and both Black Ops 1 and 2. " +
        "Within each of these titles or entries, they all helped and defined the modern look and feel of the FPS genres to many other games even if " +
        "they were much different to Call of Duty itself.";
    }

    if (section === "Core-Design") {
        extraText.textContent =
        "The core designs philosophy within CoD are its fast pace movement even with its much older games there were still fast movement but not " +
        "as much as CoD games these days, as well as having other priorites like fast time to kill, responsive gunplay, and constant player engagement. " +
        " Killstreak or Scorestreak Rewards depending on what game you have, progression system, and freedom to play how ever you like with the game rewarding " +
        "you on how well you do.";
           
    }

    if (section === "Other media") {
        extraText.textContent = 
        "Call of Duty has obviously fallen off as a good gaming series, but the past there would many clips that created many memes you might have knowledge " +
        "from years ago, but a lot of people/content creators started on Call of Duty creating montages of their best games, shots or just having funny moments " +
        "which did prompt many others to do the same with every new call of duty release. WIth the Best part of all in call oof duty was story and chaotic muliplayer lobbies " +
        "with everyone calling names and slurs that i can't say or else I'm going to get watched but yeah it was funny and hell at the same time.";
    }
}

//CSGO INFO SECTIONS
function showCsgoSection(section) {
    const extraText = document.getElementById("csgo-extra-text");
    
    if (section === "Gameplay") {
        extraText.textContent =
    "CSGO gameplay focuses heavily on precise aim and gun control, with map knowledge and teamwork. Unlike other shooters, every move you do will matter a lot " +
    "as you the player will also need to corrdinaate with your team on positions and what to do. CSGO also has fast-time to kill, with one of the guns being able " +
    "to one-shot anyone no matter if they have armour or even if they get shot on the leg. CSGO also has gambling which is also the reason why its so popular while " +
    "also being known to be the biggest fps out there.";
    }

    if (section === "Economy") {
        extraText.textContent = 
        "One of CSGO unique aspects to the game is the economy system where players from round to round are able to buy armour, guns and utility and each of these " +
        "items will have different cost. As well as that the amoount of money you and your teammates have will be different as its not shared, so you will sometimes " +
        "have to depend on your teammates to buy weapons for you if you have no money. Also the amount of money gained will be different too as it is counted from kills, " +
        "rounds won. You can also save your money if you don't die as you'll keep the gun aand everything your carrying to the next round.";
    }

    if (section ===  "Competitive") {
        extraText.textContent = 
        "CSGO is widely known for its huge competitivness in its esports. As many of the CS top players are also ones who have moved onto streaming and playing other games " +
        "With Esports CSGO boasts one of the largest esports scenes with it getting a peak amount of viewers of 2.7 million during 2021 PGL Major Stockholm. CSGO also has a " +
        "high skill gap from its steep learning curve making sure that you the player knowing where you are and what your doing as in the competitivness of CS games can last " +
        "quite long";
    }

    if (section === "Other media") {
        extraText.textContent =
        "CSGO is very competitive game as well as it being a very iconic game in the FPS genre with CSGO having amazing plays by pros or just players who plays the game for fun " +
        "or serious in their own way, from highlights in esports history, to clutch plays, and case openings. Case openings are anothing that is apart of CSGO or any other Valve game " +
        "as TF2 also has cases which have to be brought with money and you have a certain chance to get something rare or really bad and remeber cases is basically gambling so do at your " +
        "own risk but if you are lucky enough there are people out there who just collect the rare skins with one of them being a 'contraband' item which you can't get anymore or others like " +
        "the Karambit Case Hardened - factory new (blue gem 387) with the cost of it being $1.5 million  or the Souvenir AWP | Dragon lore and the Ak-47 Case hardened - factory new - StatTrak (Blue gem 661) " +
        "there are a lot more out there that I haven't named but you get the idea and cases have been memed as well as the game play in CSGO.";
    }
}

// DARK SOULS SECTIONS
function showDarksoulsSection(section) {
    const text = document.getElementById("darksouls-extra-text");

    if (section === "Gameplay") {
        text.textContent =
        "Dark Souls is very challenging with each of its titles and other souls games as you have to learn enemy attack patterns, how fast they attack and how fast you can dodge " +
        "them with each of these death is a important part of the game as it allows the player to adapt through bosses and enemies attacks allowing them progressivly get better." +
        "As well as this at the start of the game the player can choose what play through they want to start with this includes weapons, armour and items as well as different stats " +
        "for those play throughs, allowing them to do something different each time they play. Other key parts in the gameplay is having stamina control as that is a key part of " +
        "your character whenever you run, roll or attack with your stats and the weapons and armour you are carrying will make differences in how much stamina is used during a move";
    }

    if (section === "Exploration") {
        text.textContent = 
        "Exploration in Dark Souls is amazing, with each title having different areas for players to explore and discover with loot, beauty and lore. With many of these area are interconnected " +
        "leading to places you have been before or you have never discovered as this can either be rewarding or a challenge or a boss.";
    }

    if (section === "Other media") {
        text.textContent = 
        "Dark souls is probably the most popular gaming series and with its community being very popular too. From fan art to the community helping out others or creating icon scenes and with " +
        "game having its own memorable characters within the community. Within other media there are obviouly fan art as that is pretty much everywhere nowadays and memes too especially with " +
        "Dark souls death scene with the title saying 'You Died' or the games rolling system or rather how so many of the souls born games are tough as nails and are not forgiving. But with it " +
        "not being forgiving other memes talking about dark souls players having 100% persistence, and that they will never cheat.";
    }
}

// THE WITCHER 3 INFO SECTIONS
function showThewitcherSection(section) {
    const text = document.getElementById("thewitcher-extra-text");

    if (section === "Story") {
        text.textContent = "The Witcher 3 is a story-choice driven game, with it changing from the players actions and choices as they progress through the game as they play through the perspective " +
        "of Geralt of Rivia, a monster hunting mutant for hire also known as a witcher. With multiple combat capabilities and abilities. As Geralt journey is across a war-torn world to find his adopted " +
        "daughter, Ciri who is pursued byy the specters of the wild hunt for her power to manipluate space-time. Within the story there are choices focusing on how good or bad these choices are for both " +
        "the land, peoplez, Geralt and Ciri";
    }
    
    if (section === "World") {
        text.textContent = "The open world in The Witcher 3 is very vast and gritty with the world mostly known as the Continent with it being heavilly inspired by Slavic folklore and the war-torn land scapes, " +
        "with each area deep with lore, from dark, mature themes in it. With open world, many games have environmental and world building story telling from characters and The Witcher 3 does that from atmosphere and " +
        "characters and just overall design of how the world is like";
    }

    if (section === "Other media") {
        text.textContent = "The Witcher series also come from its other games, books, and a TV/film adapted into Polish film and a nexflix series. As well as that The Witcher 3 has a very wide active community, being a " +
        "welcoming group of fans from what I have seen don't take this info to heart. Based on reddit like all other communites disgussing about the game, lore, recommending builds through each playthrough and just offering " +
        "help to newer players.";
    }
}

// MINECRAFT INTO SECTIONS
function showMinecraftSection(section) {
    const text = document.getElementById("minecraft-extra-text");

    if (section === "Gameplay") {
    text.textContent =
    "Minecraft its all about freedom, and with its gameplay side there are two different versions with Java and bedrock. Playing in Java there is more thought out with its combat system as you can't " +
    "spam hit players or mobs as there is a cool down with its weapons as well as that you have way more options with combat weapons in Java than bedrock as the sword in bedrock is much stronger and " +
    "due to spam is the most viable choice. Outside of combat is building with building in both versions being the same with the only slight difference is that bedrock players have automatic block " +
    "placement when they are bridging (bridging is when the player wants to get from point A to B but by placing block underneath themcreating their own bridge). Everything else would be the same except " +
    "for difficulty with bedrock mobs being really tough and just annoying to deal with.";
}

    if (section === "Creativity") {
    text.textContent = 
    "Creativity in minecraft is what has set it to be the most well know and popular game to this and it is popular for a lot of ages. With that creativity and with minecrafts freedom into the mix and player " +
    "pretty much build anything they want like entire landscapes, cities to working computers in the game. With these simple tools it allows players to build complex creations from scratch.";
}

    if (section === "Other media") {
    text.textContent =
    "As mentioned before Minecraft is the biggest game out there and also having big communites and sub communites with it for its popular servers like Hypixel. With the community talking about a lot of popular mods " +
    "in the game and what people have built like big structure in creative mode or survival or Hardcore which is also survival but if you die you can't play on that world ever again. People have also created using redstone " +
    "as people have made full on working computers using redstone as well as calculators and many others. The game has been brought back to the public many times from a very popular content creator Pewdiepie making a lot " +
    "more people and other creators play the game. Basically Minecraft was our childhood game.";
    }
}

// NO MAN'S SKY INFO SECTIONS
function showNomansskySection(section) {
    const text = document.getElementById("nomanssky-extra-text");

    if (section === "Entire World") {
        text.textContent = 
        "The entire world of No man's sky is massive from around 18 quintillion planets, with around 255 galaxies holding these vast, different planets with each of them being different than the last one you explored and " +
        "especially with the 'Worlds' update where even more Solar systems and new planets have been added with much more diversity to keep everything even more fresh. With some planets even having floating islands valleys " +
        "much steeper terrain, planets bigger than others like gas giants and much much more";
    }

    if (section === "Gameplay") {
        text.textContent =
        "No man's sky is a sandbox game, you already know that but from what you can do is vast especially from the updates that keep rolling in, as you the player can build custom bases, mine valuable resources from each of these " +
        "different planets, discover ruins, crashed ships from the diverse biomes in these planets that can both be harmeful or good, as well upgrading gear both on yourself and tools you carry as well as the weapons from the ship you " +
        "fly allowing you the player to do whaatever you want and you can be a space pirate so ruining other peoples days is fun and terrible or you can trade with people but meeting people in this game is quite difficult due to the fact " +
        "of how large the game really is, but you can play with friends if you can't meet others.";
    }

    if (section === "Other media") {
        text.textContent =
        "Nothing much is said with other ends of social media as it all the same with updates and community posts, with the Community being very helpful, supportive and creative and with frequent massive player driven projects mostly building." +
        "These communites are very large groups from UFoT, AoGT being able to manage hubs and create content for existing players as well as just uniting them into an alliance. The devs have hosted expeditions which are limited, but do allow " +
        "players to meet in these events.";
    }
}

// ZZZ INFO SECTIONS 
function showZzzSection(section) {
    const text = document.getElementById("zzz-extra-text");

    if (section === "System") {
        text.textContent =
            "Zenless Zone Zero uses a gacha system where the players spend in-game currency to obtain new characters and equipment. Each pull has a random outcome, with you getting " +
            "characters that can be rare or not. With this syystem it encourages the players to earn more resources or spend the currency immediently to get the character you want but " +
            "even with that there is a 50/50 chance of you actually getting the character which is annoying to a lot of players but still somehow pushes them to spend more time or in other " +
            "cases money to get the character but spending money is not needed most of the time unless if your really unlucky";
    }

    if (section === "Progression") {
        text.textContent = 
            "Progression in Zenless Zone Zero is based on upgrading characters, and building a strong team combination to both improve your understanding of the game but also your characters " +
            "as you won't need to be constantly be improved as once they are maxed there is no need to improve them futher. With the improvment to your characters you have to collect materials " +
            "through side quests, story and events that were given out by each update allowing the player to improve character stats or abilities. With all of this improvment your able to progress " +
            "through harder challenges and event given to you the player";
    }

    if (section === "Monetisation") {
        text.textContent =
           "Zenless Zone Zero includes monetisation through optional in-game purchases that allow players to buy currency for additional gacha pulls. While the game is free-to-play, spending money can " +
           "speed up progression and increase the chances of obtaining rare characters.";
    }
    
    if (section === "Other media") {
        text.textContent = 
        "Zenless Zone Zero has a really active commmunity online. With many of the players creating fan art, edits and animation of their favorite characters in memes or in any other type of content, " +
        "and there is also a anime style to these character with all of them having their own unqiue animation due to their personalities and character desgins. Memes are everywhere too with zenless " +
        "mostly on the absurd character design on most the cast as a lot of people joke about how much they already love the character or saying something else that I can't say as its explicit. With all " +
        "of that Zenless is probably one of Hoyo's most chaotic game as everyone gets a melt down over balancing issues, new skins, new characters pretty much the entire gaming community is mental over " +
        "some updates or changes";
    }
}

// GENSHIN INFO SECTIONS
function showGenshinSection(section) {
    const text = document.getElementById("genshin-extra-text");

    if (section === "Gameplay") {
        text.textContent =
        "Genshin Impact has much more of a real-time combat with the player needing to dodge enemy attacks use other supporting characters to buff others into doing more damage or to just buff certain elemental " +
        "abilitiesto improove their effect or damage. With that players can choose what four characters they want to bring out to just support each other or a single character to do all the damage carryiing all the " +
        "buffs to clear out bosses and waves of enemies. With the elements their are Pryo(fire), Hydro(water), Anemo(wind), Electro(lighting), Dendro(nature), Cryo(ice), Geo(earth) and with these elements can be combined " +
        "to trigger out powerful reactions, such as Vaporize, Melt, Freeze, and Hyperbloom and with these they aare essential for damage optimization. Away from combat players can explore this vast open-world game to " +
        "fight other bosses, doing side quests and gathering resources, soloving puzzels and upgrading the characters and weapons that you have unlocked.";
    }

    if (section === "World") {
        text.textContent =
        "The world of teyvat is massive and is open for exploration for the player to discover tools to upgrade weapons and characters and find new cool location to chill in or do whatever they want to do, I have no clue " +
        "but the open-world map is separated into different locations from major nations like Mondstadt, Liyue, Inazuma, Sumeru, Fontaaine, and Natlan. There are also underground layers making the map bigger for exploration. " +
        "The exploration can be done easily from how fast characters are from climbing, running swimming as well as that many characters can effect the terrain around them to support exploration travels.";
    }

    if (section === "Gacha") {
        text.textContent = 
        "With all of that like all gacha games a gambling system where we can roll for characters that we want during a certain time limit that has been set out by the devs and if you miss this, you may miss this forever and " +
        "this goes for weapons that goes for the exact character as these weapons buff their abilities and attacks and these weapons are suited for them only anyone else won't gain the buffs that it has. This is all spent from " +
        "the games currency to roll characters and weapons but this is a gambling system so there is a chance where you don't even get the character you are rolling for but many players are dedicated into pulling for these characters " +
        "as well as this you will have petty points the more you roll to compensate you not getting the character buit this resets once you get a high rank character and this goes for all gacha games.";
    }
}