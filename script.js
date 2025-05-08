const maps = [
    {
      name: "Brookhaven",
      link: "https://www.roblox.com/games/4924922222/Brookhaven-RP"
    },
    {
      name: "Doors",
      link: "https://www.roblox.com/games/6516141723/DOORS"
    },
    {
      name: "Natural Disaster Survival",
      link: "https://www.roblox.com/games/189707/Natural-Disaster-Survival"
    },
    {
      name: "Murder Mystery 2",
      link: "https://www.roblox.com/games/142823291/Murder-Mystery-2"
    },
    {
      name: "Arsenal",
      link: "https://www.roblox.com/games/286090429/Arsenal"
    },
    {
      name: "OVERTAKE"
      link: "https://www.roblox.com/games/101020880618316/CONSOLE-OVERTAKE"
    },
    {
      name: "surf"
      link: "https://www.roblox.com/games/5315066937/surf"
    },
    {
      name: "Unnamed Shooter"
      link: "https://www.roblox.com/games/14202073004/Unnamed-Shooter"
    },
    {
      name: "Dead Rails [Alpha]"
      link: "https://www.roblox.com/games/116495829188952/Dead-Rails-Alpha"
    },
    {
      name: "The Strongest Battlegrounds"
      link: "https://www.roblox.com/games/10449761463/The-Strongest-Battlegrounds"
    },
    {
      name: "Blue Lock: Rivals"
      link: "https://www.roblox.com/games/18668065416/Blue-Lock-Rivals"
    },
    {
      name: "Basketball: Zero"
      link: "https://www.roblox.com/games/130739873848552/Basketball-Zero"
    },
    {
      name: "Anime Vanguards"
      link: "https://www.roblox.com/games/16146832113/UPDATE-5-5-Anime-Vanguards"
    },
    {
      name: "Sabai Jai"
      link: "https://www.roblox.com/games/77334836632566/Sabai-Jai"
    },
    {
      name: "7 Days To Live"
      link: "https://www.roblox.com/games/17474746614/7-Days-To-Live"
    },
     {
      name: "Survive A Week In The Woods"
      link: "https://www.roblox.com/games/118447363480307/Survive-A-Week-In-The-Woods"
    },
     {
      name: "Attack on Titan Revolution"
      link: "https://www.roblox.com/games/13379208636/UPDATE-3-Attack-on-Titan-Revolution"
    },
     {
      name: "Survive Lebron James"
      link: "https://www.roblox.com/games/124428765053468/UPDATE-Survive-Lebron-James"
    },
     {
      name: "Skinwalkers [Horror]"
      link: "https://www.roblox.com/games/94725155944518/Skinwalkers-Horror"
    },
     {
      name: "BUCKSHOT"
      link: "https://www.roblox.com/games/16154918775/BUCKSHOT-4-2-Player"
    },
  ];
  
  
  const button = document.getElementById("randomBtn");
  const resultBox = document.getElementById("result");
  
  
  function getRandomMap() {
    const randomIndex = Math.floor(Math.random() * maps.length);
    const map = maps[randomIndex];
    resultBox.innerHTML = `
      <p>คุณได้แมพ: <strong>${map.name}</strong></p>
      <a href="${map.link}" target="_blank">คลิกเพื่อเล่น</a>
    `;
  }
  
  
  button.addEventListener("click", getRandomMap);
