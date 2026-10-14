// Nastavení sdíleného kalendáře masérny.
// Data jsou v Supabase (projekt „maserna“). Nové jméno je potřeba přidat i do databáze:
// insert into public.people (name) values ('Nové jméno');
window.MASERNA_CONFIG = {
  supabaseUrl: "https://gqevdowipgxsnrygnhbo.supabase.co",
  supabaseKey: "sb_publishable_yyUu60XklFSBZ-zevWHqag_AkTNWb57", // veřejný klíč: "publishable" (sb_publishable_…) nebo legacy "anon" (eyJ…), nikdy secret/service_role!

  // Kdo si masérnu bookuje – jméno, barva v kalendáři a jméno ve 3. pádě (do hlášky „Dej Honzovi čas…“).
  people: [
    { name: "Ivana", color: "#7b2d3b", komu: "Ivaně" },    // vínová
    { name: "Martin", color: "#9c8b74", komu: "Martinovi" }, // šedobéžová
    { name: "Honza", color: "#5f6670", komu: "Honzovi" },   // šedá
  ],

  // Pauza mezi masážemi dvou různých masérů (úklid a příprava). Stejný masér může mít masáže hned za sebou.
  // Hlídá to i databáze – při změně je potřeba upravit i trigger bookings_gap v Supabase.
  gapMinutes: 30,

  // Správkyně – smí měnit a mazat i rezervace ostatních (v databázi je to sloupec people.is_admin).
  admins: ["Ivana"],

  // Od kolika hodin kalendář začíná (dřív rezervovat nejde).
  gridStartHour: 6,
};
