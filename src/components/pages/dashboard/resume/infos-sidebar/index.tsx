import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AiGenerationDropdown } from "./ai-generation-dropdown"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BasicInfosSection } from "./sections/basic-infos"
import { SummarySection } from "./sections/summary"
import { MultiplesSection } from "./sections/multiples"

export const InfosSidebar = () => {
    return (
        <aside className="w-full h-full p-6 overflow-y-auto">
            <div className="w-full flex items-center justify-between">
                <Button asChild variant="outline" className="w-fit">
                    <Link href="/dashboard/resumes">
                        <ArrowLeft size={20} className="mr-2" />
                        Voltar
                    </Link>
                </Button>
                <AiGenerationDropdown />
            </div>
            <Separator className="my-5"/>
            <BasicInfosSection/>

            <Separator className="my-5"/>
            <SummarySection/>
            <MultiplesSection/>

        </aside>
    )
}
