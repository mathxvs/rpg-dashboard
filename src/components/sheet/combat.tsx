import { Table } from "..";

export default function Combat() {
    return (
        <Table.Root>
            <Table.Header>
                <Table.Cell className="w-1/2">Ataque</Table.Cell>
                <Table.Cell flexible align="center">
                    Teste
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Dano
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Alcance
                </Table.Cell>
            </Table.Header>

            <Table.Row clickable>
                <Table.Cell className="flex flex-col w-1/2 items-start">
                    <span className="font-medium text-base">Montante</span>
                    <span className="text-xs font-medium text-neutral-11 italic uppercase">
                        Corpo a Corpo
                    </span>
                </Table.Cell>

                <Table.Cell
                    flexible
                    align="center"
                    className="bg-neutral-4 py-2 font-medium rounded-sm"
                >
                    Luta
                </Table.Cell>
                <Table.Cell flexible align="center" className="flex flex-col">
                    1D4
                    <span className="text-center text-xs font-medium text-neutral-11 uppercase">
                        Sangue
                    </span>
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Curto
                </Table.Cell>
            </Table.Row>
        </Table.Root>
    );
}
