import Container from "../container";

export default function SecondaryStats() {
    return (
        <aside className="flex flex-col gap-8">
            <Container>
                <header className="flex flex-row gap-2 justify-between items-center mb-4">
                    <h3 className="text-neutral-11 font-serif font-bold tracking-wide uppercase text-lg">
                        Defesas
                    </h3>
                </header>

                <section>
                    <div className="bg-neutral-1 rounded-sm p-4 text-center">
                        <h1 className="text-3xl font-serif font-bold tracking-wider">
                            18
                        </h1>

                        <h3 className="text-base font-sans uppercase font-semibold tracking-wider">
                            Defesa
                        </h3>
                    </div>

                    <div className="size-4" />

                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col flex-1 items-center gap-2">
                            <div className="border-3 w-full rounded-sm border-neutral-6 h-12"></div>
                            <span className="text-sm text-neutral-11 font-medium uppercase tracking-wide">
                                Base
                            </span>
                        </div>
                        <div className="flex flex-col flex-1 items-center gap-2">
                            <div className="border-3 w-full rounded-sm border-neutral-6 h-12"></div>
                            <span className="text-sm text-neutral-11 font-medium uppercase tracking-wide">
                                Proteção
                            </span>
                        </div>
                        <div className="flex flex-col flex-1 items-center gap-2">
                            <div className="border-3 w-full rounded-sm border-neutral-6 h-12"></div>
                            <span className="text-sm text-neutral-11 font-medium uppercase tracking-wide">
                                Extra
                            </span>
                        </div>
                    </div>

                    <div className="size-4" />

                    <div className="flex flex-row gap-4">
                        <div className="flex-1 bg-neutral-3 p-2 rounded-sm text-center text-neutral-11 flex flex-col">
                            <h3 className="font-bold text-xl">10</h3>
                            <span className="font-medium text-sm uppercase tracking-wider">
                                Esquiva
                            </span>
                        </div>

                        <div className="flex-1 bg-neutral-3 p-2 rounded-sm text-center text-neutral-11 flex flex-col">
                            <h3 className="font-bold text-xl">10</h3>
                            <span className="font-medium text-sm uppercase tracking-wider">
                                Bloqueio
                            </span>
                        </div>
                    </div>
                </section>
            </Container>
        </aside>
    );
}
