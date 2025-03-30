import Container from "../container";

export default function CharInfo() {
    return (
        <Container className="flex flex-col gap-4">
            <header className="flex flex-row gap-2 justify-end items-center"></header>

            <main className="flex flex-row gap-6">
                <aside className="shrink">
                    <div className="border-4 border-ecos-gold rounded-lg size-32 relative flex justify-center">
                        <div className="w-full h-full bg-ecos-gold opacity-10 absolute" />
                        <div className="rounded-sm text-neutral-1 bg-ecos-gold flex flex-row gap-1 items-center -bottom-4 justify-center absolute px-2 py-1">
                            <span className="font-medium">NEX</span>
                            <span className="font-semibold">10%</span>
                        </div>
                    </div>
                </aside>

                <div className="grow">
                    <section className="flex flex-col gap-1">
                        <h3 className="text-lg font-serif italic text-neutral-11 font-bold tracking-wide">
                            Théo Costa
                        </h3>

                        <h1 className="text-3xl font-serif text-ecos-gold font-extrabold tracking-wide">
                            Michell Venturim
                        </h1>
                    </section>

                    <div className="size-8" />

                    <section className="flex flex-row gap-8">
                        <div className="flex flex-col">
                            <span className="font-normal uppercase tracking-wide text-neutral-11">
                                Origem
                            </span>
                            <span className="font-medium text-lg">
                                Engenheiro
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-normal uppercase tracking-wide text-neutral-11">
                                Classe e Trilha
                            </span>
                            <span className="font-medium text-lg">
                                Especialista Muambeiro
                            </span>
                        </div>
                    </section>

                    <div className="size-12" />

                    <section className="w-full flex flex-col gap-2 items-center">
                        <div className="w-full flex flex-row gap-4 items-center text-sm">
                            <span>
                                NV. <span className="font-semibold">2</span>
                            </span>

                            <div className="rounded-full overflow-clip h-1.5 bg-neutral-6 grow">
                                <div className="rounded-full bg-ecos-gold w-1/2 h-full" />
                            </div>
                            <span className="font-semibold">3</span>
                        </div>

                        <div className="flex flex-row gap-2 text-sm text-neutral-11">
                            <span>PEX</span>
                            <span className="font-semibold">1000</span>
                            <span>/</span>
                            <span className="font-semibold">3000</span>
                        </div>
                    </section>
                </div>
            </main>
        </Container>
    );
}
