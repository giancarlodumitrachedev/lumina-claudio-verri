import { getDemoParams } from "@/lib/demo-params";
import { SmartLink } from "@/components/smart-link";

export const metadata = { title: "Servizi | Lumina Psicologo" };

export default async function ServiziPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);
  const mainService = params.fieldDisplay;

  const services = [
    {
      title: "Psicologia Infantile",
      description: "Supporto clinico e terapeutico dedicato ai più piccoli per affrontare difficoltà evolutive, paure e disturbi dell'infanzia, costruendo assieme ai genitori un ambiente sano.",
      highlight: true
    },
    {
      title: "Depressione",
      description: "Percorsi di intervento per uscire dagli stati depressivi. Attraverso la terapia e l'accoglienza, aiuto la persona a liberarsi dalle gabbie emotive e ritrovare la luce della propria quotidianità.",
      highlight: false
    },
    {
      title: "Autostima",
      description: "Lavoro mirato sull'accrescimento del senso di autoefficacia. Un percorso di progressiva scoperta e rafforzamento per essere finalmente liberi di esprimere se stessi.",
      highlight: false
    },
    {
      title: "Orientamento Professionale",
      description: "Consulenza e guida per destreggiarsi nel mondo del lavoro o degli studi. Aiuto a mettere a fuoco le reali passioni e attitudini in momenti di blocco, incertezza o transizione.",
      highlight: false
    },
    {
      title: "Schizofrenia",
      description: "Supporto integrato ed elaborazione del vissuto emotivo (nel qui ed ora). Approccio olistico focalizzato sul paziente e concordato sulle massime esigenze e necessità del caso.",
      highlight: false
    }
  ];

  return (
    <div className="py-24 bg-secondary/10 min-h-[calc(100vh-140px)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">
            Aree di Intervento
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Plasmo la terapia assieme al cliente in base ai suoi bisogni ed esigenze. 
            Di seguito, le principali aree cliniche e psicologiche trattate:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl shadow-sm border transition-shadow hover:shadow-md flex flex-col justify-center ${
                service.highlight 
                  ? "bg-primary text-primary-foreground border-primary md:col-span-2 md:text-center" 
                  : "bg-background border-border/50"
              }`}
            >
              <h3 className={`text-2xl font-semibold mb-4 ${service.highlight ? "text-primary-foreground" : "text-primary"}`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed text-[17px] ${service.highlight ? "text-primary-foreground/90 max-w-3xl mx-auto" : "text-foreground/80"}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <SmartLink
            href="/contatti"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md"
          >
            Fissa un appuntamento
          </SmartLink>
        </div>
      </div>
    </div>
  );
}
