export type Version = {
  atf: {
    headline: string;
    subheadline: string;
    bulletPointsTitle: string;
    bulletPoints: string[];
  };
  videoId: string;
  checkoutVersion: number;
};

const version: Version = {
  atf: {
    headline:
      "Kako Obične Žene Diljem Balkana Čine Muškarce Totalno Zaluđenima - Bez Fizičke Savršenosti, \"Igranja Igrica\" ili Mijenjanja Sebe",
    subheadline:
      "Problem nikad nije bio da nisi dovoljno dobra. U ovom besplatnom 11-minutnom videu otkrit ćeš šokantnu istinu o tome što muškarce stvarno vezuje emotivno - i naučit ćeš kako ga učiniti totalno zaluđenim tobom, čak i ako si sve do sada radila \"kako treba\".",
    bulletPointsTitle: "U videu ćeš otkriti:",
    bulletPoints: [
      "<strong>Pravu istinu zašto se odjednom ohladio prema tebi</strong> - Nije zbog izgleda, dosade ili druge žene. Razlog je u njegovom MOZGU - i pokazat ću ti kako to \"resetirati\" u sljedećih 7 dana",
      "<strong>Glasovnu poruku od 6 riječi koja je natjerala Gabriela da se vrati Uni nakon što ju je ostavio</strong> - I molio ju je za oprost NA KOLJENIMA, govoreći \"ne mogu živjeti bez tebe\"",
      "<strong>Zašto pokušavanje biti \"savršena djevojka\" zapravo tjera muškarca da pobjegne</strong> - I što umjesto toga učiniti da on trči za tobom kao opsjednut",
      "<strong>Točnu rečenicu koja ga tjera da te JEDINU vidi</strong> - Dok sve ostale žene u njegovom životu postaju nevidljive (čak i ako je prije gledao za drugim)",
      "<strong>Kako ga učiniti ovisnim o TEBI, a ne samo o seksu s tobom</strong> - Što ga prisiljavat će da misli na tebe svake večeri prije spavanja i da svaki dan iznova pokušava osvojiti tvoje srce",
    ],
  },
  videoId: "v59k639lk4",
  checkoutVersion: 1,
};

export const getVersion = (): Version => version;
