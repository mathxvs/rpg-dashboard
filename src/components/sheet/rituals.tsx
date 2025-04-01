import React from "react";
import { Collapsible, Table, Icon } from "..";
import { CaretRight, CaretDown } from "@phosphor-icons/react";

function ActionRow() {
    const [open, setOpen] = React.useState(false);

    return (
        <Collapsible.Root open={open} onChange={setOpen}>
            <Table.Row className="font-medium">
                <Table.Cell className="w-1/3 font-medium">
                    <Collapsible.Trigger className="mr-2">
                        <Icon
                            icon={!open ? CaretRight : CaretDown}
                            weight="bold"
                        />
                    </Collapsible.Trigger>

                    <div className="flex flex-col gap-1">
                        <span className="text-base">Decadência</span>
                        <span className="uppercase text-neutral-11 bg-neutral-3 text-xs tracking-wider py-1 px-2 rounded-xs text-center w-fit">
                            Morte 1
                        </span>
                    </div>
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Padrão
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Curto
                </Table.Cell>
                <Table.Cell flexible align="center">
                    1 Ser
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Cena
                </Table.Cell>
                <Table.Cell
                    flexible
                    align="center"
                    className="flex flex-col gap-1"
                >
                    Fortitude
                    <span className="uppercase text-neutral-11 tracking-wider text-xs">
                        Metade
                    </span>
                </Table.Cell>
            </Table.Row>

            <Collapsible.Content className="text-sm text-justify mt-2 leading-relaxed">
                Você pode fazer testes de Ocultismo para identificar criaturas a
                partir de pistas e informações sobre ela. Se bem-sucedido, você
                recebe +2 em todos os testes contra a criatura até o próximo
                interlúdio. Você só pode ter esta habilidade ativa para uma
                criatura por vez.
            </Collapsible.Content>
        </Collapsible.Root>
    );
}

export default function Rituals() {
    return (
        <Table.Root>
            <Table.Header>
                <Table.Cell className="w-1/3">Ritual</Table.Cell>
                <Table.Cell flexible align="center">
                    Execução
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Alcance
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Alvo
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Duração
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Resistência
                </Table.Cell>
            </Table.Header>

            <ActionRow />
        </Table.Root>
    );
}
