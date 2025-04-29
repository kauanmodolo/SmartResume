"use client"

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import { ResumeTemplate } from "./templates/templates/"
import { TransformControls } from "./controls"
import { NavigationHeader } from "./header"
import { useFormContext } from "react-hook-form";

type ResumeContentProps = {
    title: string;
}

export const ResumeContent = ({ title }: ResumeContentProps) => {

const { watch } = useFormContext<ResumeData>();

const data = watch();

    return (
        <section className="overflow-hidden w-full h-full flex items-center justify-center relative bg-muted dark:bg-background">
            <TransformWrapper
                initialScale={0.4}
                minScale={0.3}
                centerOnInit
                centerZoomedOut
                limitToBounds={false}>
                <>
                <NavigationHeader title={title}/>
                <TransformControls title={title}/>
                <TransformComponent>
                   <ResumeTemplate data={data}/> 
                </TransformComponent>
                </>
            </TransformWrapper>
        </section>
    )
}