import Container from "../container";
import AttrCard from "./attrCard";

export default function Attributes() {
    const AttrDemo = [
        { name: "Agilidade", value: 2 },
        { name: "Força", value: 1 },
        { name: "Intelecto", value: 3 },
        { name: "Presença", value: 4 },
        { name: "Vigor", value: 1 },
    ];

    return (
        <Container>
            <header className="flex flex-row gap-2 justify-between items-center mb-4">
                <h3 className="text-neutral-11 font-serif font-bold tracking-wide uppercase text-lg">
                    Atributos
                </h3>
            </header>

            <main className="flex flex-row w-full gap-4">
                {AttrDemo.map((attr) => (
                    <AttrCard attrName={attr.name} attrValue={attr.value} />
                ))}
            </main>
        </Container>
    );
}
