import { BaseDialogProps, Dialog } from "@/components/ui/dialog"
import { JSX } from "react";
import { GenerateFromJobTitle } from "./job-title";
import { GenerateToFixContent } from "./fix-content";
import { GenerateTranslation } from "./translate";

type GenerationDialogProps = BaseDialogProps & {
    mode: AIGenerationMode;
    setOpen: (open: boolean) => void;
}

export const GenerationDialog = ({ mode, ...props }: GenerationDialogProps) => {
const onClose = () => {
    props.setOpen(false);
}
const configPerMode: Record<AIGenerationMode, JSX.Element> = {
    JOB_TITLE: <GenerateFromJobTitle onClose={onClose} />,
    FIX_CONTENT: <GenerateToFixContent onClose={onClose} />,
    TRANSLATE_CONTENT: <GenerateTranslation onClose={onClose}/>,
};

    const content = configPerMode[mode];

    return(
        <Dialog
            {...props}
            title="Inteligência Artificial"
            description="O conteúdo gerado sobrescreve o conteúdo atual. Cada geração custa 1 crédito."
            content={content}
        />
    )
}