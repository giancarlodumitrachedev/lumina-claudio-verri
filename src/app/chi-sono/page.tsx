import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { getDemoParams } from "@/lib/demo-params";

export const metadata = { title: "Chi Sono | Lumina Psicologo" };

export default async function ChiSonoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);
  
  const imageUrl = params.isFemale 
    ? "/Assets/psychologist-portrait-f.webp"
    : "/Assets/psychologist-portrait-m.webp";

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-8 text-center">
          Chi Sono
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start mt-12 md:mt-16">
          <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shrink-0">
            <Image
              src={imageUrl}
              alt={`Ritratto di ${params.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="w-full md:w-2/3 prose prose-lg prose-slate text-foreground/80">
            <h2 className="text-3xl font-medium text-primary mb-6">
              {params.name} <span className="text-foreground/50 font-normal">| {params.fieldDisplay}</span>
            </h2>
            <p className="mb-4">
              Per me, l&apos;aspetto principale è l&apos;accoglienza. Far sentire ogni persona a proprio agio e sicura è il primo passo per instaurare un rapporto di reciproca fiducia tra cliente e terapeuta. 
            </p>
            <p className="mb-4">
              Il percorso di psicoterapia può essere molto duro in certi momenti, ma la persona che si rivolge a me come terapeuta sa che non sarà sola in questo percorso. Io vedo la terapia come un aiutare la persona a liberarsi dei pesi inutili che si porta dietro, non come un aggiungere nuove nozioni e conoscenze. Solo liberandosi delle costrizioni e delle gabbie, la persona sarà finalmente libera di essere se stessa.
            </p>
            <p className="mb-8 font-medium">
              Plasmo la terapia assieme al cliente in base ai suoi bisogni ed esigenze.
            </p>

            <h3 className="text-xl font-medium text-secondary-foreground mb-4">L&apos;Approccio: Umanistico Corporeo Integrato</h3>
            <p className="mb-4">
              Seguo un approccio umanistico e corporeo integrato. In quest&apos;ottica, corpo, psiche e relazioni di ogni persona sono un unico insieme integrato, e la persona considerata nella sua interezza (approccio olistico). 
            </p>
            <p className="mb-4">
              Fondamentale è l&apos;attenzione data al QUI ed ORA e al vissuto emotivo della persona, elementi che vengono riletti e rielaborati anche attraverso il corpo. Ho avuto molti maestri, e non considero nessuno di essi perfetto. Nemmeno io sono perfetto, e continuo ad imparare ogni giorno. Spesso miei maestri inconsapevoli sono le stesse persone che si rivolgono a me, ognuno mi insegna qualcosa.
            </p>

            <h3 className="text-xl font-medium text-secondary-foreground mb-4">Perché scegliere me?</h3>
            <p className="mb-8">
              Esistono tantissimi approcci, ognuno diverso. E all&apos;interno di ogni approccio, ogni terapeuta è diverso, quindi ognuno ha qualcosa che lo differenzia dalla concorrenza, e le differenze sono davvero tante, troppe. Posso parlare solo per me, quindi, e dire che sono una persona coscienziosa e affidabile. Nella terapia prendo il tempo necessario alla persona, ma mai più di quello che realmente serve.
            </p>
            
            <SmartLink
              href="/contatti"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md no-underline"
            >
              Richiedi un consulto
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
}
