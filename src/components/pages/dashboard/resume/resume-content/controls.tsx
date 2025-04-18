import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { Download, RotateCcw, ZoomIn, ZoomOut } from "lucide-react"
import { useControls } from "react-zoom-pan-pinch"

export const TransformControls = () => {

    const { zoomIn, zoomOut, centerView } = useControls()

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
        console.log("Baixar PDF")
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
                        >
                            <control.icon size={16}/>
                    </Button>
                </Tooltip>
            ))}
        </div>
    )
}