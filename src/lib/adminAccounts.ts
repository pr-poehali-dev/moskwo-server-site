export interface AdminAccount {
  username: string;
  password: string;
  role: string;
}

export const adminAccounts: AdminAccount[] = [
  // Главные администраторы
  {
    username: "MoskwoAdmin",
    password: "Mosk2024!Admin",
    role: "Главный админ",
  },
  { username: "ServerOwner", password: "Owner@Mosk999", role: "Владелец" },
  { username: "HeadAdmin", password: "Head#Mosk777", role: "Главный админ" },

  // Старшие модераторы
  {
    username: "SeniorMod1",
    password: "Senior!Mod123",
    role: "Старший модератор",
  },
  {
    username: "SeniorMod2",
    password: "SMod@Mosk456",
    role: "Старший модератор",
  },
  {
    username: "SeniorMod3",
    password: "ModSenior#789",
    role: "Старший модератор",
  },
  {
    username: "ChiefModerator",
    password: "Chief!Mod999",
    role: "Старший модератор",
  },
  {
    username: "ModeratorChief",
    password: "ModChief@123",
    role: "Старший модератор",
  },

  // Администраторы
  {
    username: "AdminAlpha",
    password: "Alpha!Admin2024",
    role: "Администратор",
  },
  { username: "AdminBeta", password: "Beta@Mosk333", role: "Администратор" },
  { username: "AdminGamma", password: "Gamma#Admin444", role: "Администратор" },
  { username: "AdminDelta", password: "Delta!Mosk555", role: "Администратор" },
  { username: "AdminEpsilon", password: "Epsilon@666", role: "Администратор" },
  { username: "AdminZeta", password: "Zeta#Admin777", role: "Администратор" },
  { username: "AdminEta", password: "Eta!Mosk888", role: "Администратор" },
  { username: "AdminTheta", password: "Theta@Admin999", role: "Администратор" },

  // Модераторы
  { username: "ModeratorAce", password: "Ace!Mod2024", role: "Модератор" },
  { username: "ModeratorBlaze", password: "Blaze@Mod123", role: "Модератор" },
  {
    username: "ModeratorCrystal",
    password: "Crystal#Mod456",
    role: "Модератор",
  },
  {
    username: "ModeratorDiamond",
    password: "Diamond!Mod789",
    role: "Модератор",
  },
  {
    username: "ModeratorEmerald",
    password: "Emerald@Mod111",
    role: "Модератор",
  },
  { username: "ModeratorFlame", password: "Flame#Mod222", role: "Модератор" },
  { username: "ModeratorGold", password: "Gold!Mod333", role: "Модератор" },
  { username: "ModeratorHero", password: "Hero@Mod444", role: "Модератор" },
  { username: "ModeratorIce", password: "Ice#Mod555", role: "Модератор" },
  { username: "ModeratorJet", password: "Jet!Mod666", role: "Модератор" },
  { username: "ModeratorKnight", password: "Knight@Mod777", role: "Модератор" },
  { username: "ModeratorLion", password: "Lion#Mod888", role: "Модератор" },
  { username: "ModeratorMage", password: "Mage!Mod999", role: "Модератор" },
  { username: "ModeratorNinja", password: "Ninja@Mod000", role: "Модератор" },
  { username: "ModeratorOracle", password: "Oracle#Mod111", role: "Модератор" },
  {
    username: "ModeratorPhoenix",
    password: "Phoenix!Mod222",
    role: "Модератор",
  },
  { username: "ModeratorQueen", password: "Queen@Mod333", role: "Модератор" },
  { username: "ModeratorRanger", password: "Ranger#Mod444", role: "Модератор" },
  { username: "ModeratorShadow", password: "Shadow!Mod555", role: "Модератор" },
  { username: "ModeratorTitan", password: "Titan@Mod666", role: "Модератор" },

  // Помощники администраторов
  { username: "HelperAlice", password: "Alice!Help2024", role: "Помощник" },
  { username: "HelperBob", password: "Bob@Help123", role: "Помощник" },
  { username: "HelperCharlie", password: "Charlie#Help456", role: "Помощник" },
  { username: "HelperDave", password: "Dave!Help789", role: "Помощник" },
  { username: "HelperEve", password: "Eve@Help111", role: "Помощник" },
  { username: "HelperFrank", password: "Frank#Help222", role: "Помощник" },
  { username: "HelperGrace", password: "Grace!Help333", role: "Помощник" },
  { username: "HelperHank", password: "Hank@Help444", role: "Помощник" },
  { username: "HelperIvy", password: "Ivy#Help555", role: "Помощник" },
  { username: "HelperJack", password: "Jack!Help666", role: "Помощник" },
  { username: "HelperKate", password: "Kate@Help777", role: "Помощник" },
  { username: "HelperLuke", password: "Luke#Help888", role: "Помощник" },
  { username: "HelperMia", password: "Mia!Help999", role: "Помощник" },
  { username: "HelperNick", password: "Nick@Help000", role: "Помощник" },
  { username: "HelperOlive", password: "Olive#Help111", role: "Помощник" },
  { username: "HelperPete", password: "Pete!Help222", role: "Помощник" },
  { username: "HelperQuinn", password: "Quinn@Help333", role: "Помощник" },
  { username: "HelperRose", password: "Rose#Help444", role: "Помощник" },
  { username: "HelperSam", password: "Sam!Help555", role: "Помощник" },
  { username: "HelperTina", password: "Tina@Help666", role: "Помощник" },

  // Специальные роли
  {
    username: "EventManager",
    password: "Event!Manager2024",
    role: "Ивент-менеджер",
  },
  { username: "BuildMaster", password: "Build@Master123", role: "Билд-мастер" },
  {
    username: "TechSupport",
    password: "Tech#Support456",
    role: "Тех. поддержка",
  },
  {
    username: "CommunityManager",
    password: "Community!Mgr789",
    role: "Комьюнити-менеджер",
  },
];

export const authenticateAdmin = (
  username: string,
  password: string,
): AdminAccount | null => {
  const admin = adminAccounts.find(
    (account) => account.username === username && account.password === password,
  );
  return admin || null;
};
