import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { useResumeDownload } from "@/hooks/use-resume-download";
import { Download, RotateCcw, ZoomIn, ZoomOut } from "lucide-react"
import { useControls } from "react-zoom-pan-pinch"

type TransformControlsProps = {
    title: string;
}

export const TransformControls = ({ title }: TransformControlsProps) => {

    const { zoomIn, zoomOut, centerView } = useControls()

    const { handleDownloadResume, isLoading } = useResumeDownload(title);

    const controls = [
    {icon: ZoomIn, label: "Aumentar zoom", onClick: () => 
        zoomIn(0.2),
    },

    {icon: ZoomOut, label: "Diminuir zoom", onClick: () => 
        zoomOut(0.2),
     },

     {icon: RotateCcw, label: "Resetar posição", onClick: () => 
        centerView(0.4)
     },

     {icon: Download, label: "Baixar PDF", onClick: () => 
        handleDownloadResume(),
        disabled: isLoading
     }

];

    return (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-10 bg-background border border-muted py-3 px-4 rounded-full flex items-center gap-2">
            {controls.map((control) => (
                <Tooltip key={control.label} content={control.label}>
                    <Button
                        variant="secondary"
                        className="w-6 h-6 bg-transparent"
                        size="icon"
                        onClick={control.onClick}
                        disabled={control.disabled}
                        >
                            <control.icon size={16}/>
                    </Button>
                </Tooltip>
            ))}
        </div>
    )
}