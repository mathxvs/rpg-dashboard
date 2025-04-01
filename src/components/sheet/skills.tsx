import { Table } from "..";
import Container from "../container";

export default function Skills() {
    return (
        <Container>
            <header className="flex flex-row gap-2 justify-between items-center">
                <h3 className="text-neutral-11 font-serif font-bold tracking-wide uppercase text-lg">
                    Perícias
                </h3>
            </header>

            <div className="size-4" />

            <Table.Root>
                <Table.Header className="text-xs">
                    <Table.Cell className="grow">Perícia</Table.Cell>
                    <Table.Cell className="w-10" align="center">
                        Atr
                    </Table.Cell>
                    <Table.Cell className="w-12" align="center">
                        Valor
                    </Table.Cell>
                    <Table.Cell className="w-12" align="center">
                        Bônus
                    </Table.Cell>
                </Table.Header>

                <Table.Row clickable className="font-medium">
                    <Table.Cell className="grow">Acrobacia</Table.Cell>
                    <Table.Cell
                        className="w-10 text-xs bg-neutral-4 py-1 rounded-sm"
                        align="center"
                    >
                        AGI
                    </Table.Cell>
                    <Table.Cell
                        className="w-12 bg-neutral-1 p-1 rounded-sm cursor-text"
                        align="center"
                    >
                        0
                    </Table.Cell>
                    <Table.Cell className="w-12 text-neutral-11" align="center">
                        +2
                    </Table.Cell>
                </Table.Row>
            </Table.Root>
        </Container>
    );
}
