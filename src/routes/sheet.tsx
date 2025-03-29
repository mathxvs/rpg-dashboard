import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sheet/")({
    component: Sheet,
});

function Sheet() {
    return <></>;
}
