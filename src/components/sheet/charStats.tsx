import React from "react";
import Container from "../container";
import { twMerge } from "tailwind-merge";

export default function CharStats() {
    type StatBarProps = {
        title: string;
        abrev: string;
        color: "red" | "green";
    };

    const StatBar = (props: StatBarProps) => {
        const { title, abrev, color } = props;

        const styles = {
            bg: {
                red: "bg-red-3",
                green: "bg-green-3",
            },

            fg: {
                red: "bg-red-8",
                green: "bg-green-8",
            },
        };

        return (
            <section className="flex flex-row gap-4">
                <div className="flex flex-col grow gap-2">
                    <h3 className="text-neutral-11 font-serif font-bold tracking-wide uppercase text-lg">
                        {title}
                    </h3>

                    <div className="grow relative justify-center items-center flex">
                        <div
                            className={twMerge(
                                "rounded-sm flex h-10 items-center overflow-clip w-full",
                                styles.bg[color]
                            )}
                        >
                            <div
                                className={twMerge(
                                    "rounded-sm h-full w-2/3",
                                    styles.fg[color]
                                )}
                            />
                        </div>

                        <div className="z-10 absolute items-center gap-2 tracking-wide flex text-2xl">
                            <span className="font-medium">12</span>
                            <span className="font-medium text-xl opacity-50">
                                /
                            </span>
                            <span className="font-medium">12</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 relative items-center float-right clear-left">
                    <div className="border-3 w-24 rounded-sm border-neutral-6 h-full"></div>
                    <span className="font-medium absolute -bottom-6 text-sm text-neutral-11">
                        {abrev} TEMP.
                    </span>
                </div>
            </section>
        );
    };
    return (
        <Container className="flex flex-col">
            <header className="flex flex-row gap-2 justify-end items-center"></header>

            <div className="size-4" />

            <StatBar title="Pontos de Vida" abrev="PV" color="red" />

            <div className="size-16" />

            <StatBar title="Pontos de Esforço" abrev="PE" color="green" />

            <div className="size-8" />
        </Container>
    );
}
