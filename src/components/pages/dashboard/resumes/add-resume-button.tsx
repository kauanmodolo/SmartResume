import { Plus } from "lucide-react"
import { ResumeCardButton } from "./resume-card"

export const AddResumeButton = () => {
    return (
        <ResumeCardButton 
            title="Criar novo currículo"
            description="Crie um novo currículo do zero."
            icon={<Plus size={50}/>}
        />
    )
}