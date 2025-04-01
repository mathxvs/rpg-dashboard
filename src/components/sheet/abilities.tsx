import React from "react";
import { Collapsible, Table, Icon } from "..";
import { CaretRight, CaretDown } from "@phosphor-icons/react";

function ActionRow() {
    const [open, setOpen] = React.useState(false);

    return (
        <Collapsible.Root open={open} onChange={setOpen}>
            <Table.Row className="font-medium">
                <Table.Cell className="w-1/2 font-medium text-base">
                    <Collapsible.Trigger className="mr-2">
                        <Icon
                            icon={!open ? CaretRight : CaretDown}
                            weight="bold"
                        />
                    </Collapsible.Trigger>
                    Perito
                </Table.Cell>
                <Table.Cell flexible align="center">
                    2 PE
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Padrão
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

export default function Abilities() {
    return (
        <Table.Root>
            <Table.Header>
                <Table.Cell className="w-1/2">Habilidade</Table.Cell>
                <Table.Cell flexible align="center">
                    Custo
                </Table.Cell>
                <Table.Cell flexible align="center">
                    Execução
                </Table.Cell>
            </Table.Header>

            <ActionRow />
        </Table.Root>
    );
}
