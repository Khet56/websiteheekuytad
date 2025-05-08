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
    }
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