import Attributes from "@/components/sheet/attributes";
import CharInfo from "@/components/sheet/charInfo";
import CharStats from "@/components/sheet/charStats";
import Skills from "@/components/sheet/skills";
import Actions from "@/components/sheet/actions";
import { createFileRoute } from "@tanstack/react-router";
import SecondaryStats from "@/components/sheet/secStats";

function Sheet() {
    return (
        <main className="w-[65%] mx-auto mt-16 mb-32 flex flex-col gap-8">
            <section className="grid gap-8 grid-cols-2">
                <div className="flex flex-col gap-8">
                    <CharInfo />
                    <Attributes />
                </div>
                <CharStats />
            </section>

            <section className="grid grid-cols-[2fr_4fr_2fr] gap-8">
                <Skills />
                <Actions />
                <SecondaryStats />
            </section>
        </main>
    );
}

export const Route = createFileRoute("/sheet")({
    component: Sheet,
});
