import { Tabs } from "..";
import Container from "../container";
import Combat from "./combat";

export default function Action() {
    return (
        <Container>
            <Tabs.Root defaultValue="actions_1">
                <Tabs.List>
                    <Tabs.Trigger value="actions_1">Combate</Tabs.Trigger>
                    <Tabs.Trigger value="actions_2">Habilidades</Tabs.Trigger>
                    <Tabs.Trigger value="actions_3">Rituais</Tabs.Trigger>
                    <Tabs.Trigger value="actions_4">Inventário</Tabs.Trigger>
                    <Tabs.Trigger value="actions_5">Anotações</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="actions_1">
                    <Combat />
                </Tabs.Content>
            </Tabs.Root>
        </Container>
    );
}
