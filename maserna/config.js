// Nastavení sdíleného kalendáře masérny.
// Data jsou v Supabase (projekt „maserna“). Nové jméno je potřeba přidat i do databáze:
// insert into public.people (name) values ('Nové jméno');
window.MASERNA_CONFIG = {
  supabaseUrl: "https://gqevdowipgxsnrygnhbo.supabase.co",
  supabaseKey: "sb_publishable_yyUu60XklFSBZ-zevWHqag_AkTNWb57", // veřejný klíč: "publishable" (sb_publishable_…) nebo legacy "anon" (eyJ…), nikdy secret/service_role!

  // Kdo si masérnu bookuje – jméno a barva v kalendáři.
  people: [
    { name: "Ivana", color: "#7b2d3b" },  // vínová
    { name: "Martin", color: "#9c8b74" }, // šedobéžová
    { name: "Honza", color: "#5f6670" },  // šedá
  ],

  // Rozsah dne, na který se kalendář po otevření posune.
  dayStartHour: 7,
};
