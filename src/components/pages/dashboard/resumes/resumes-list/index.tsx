import { AddResumeButton } from "../add-resume-button"
import { ResumeCard } from "../resume-card"

export const ResumesList = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AddResumeButton/>
            <ResumeCard/>
            <ResumeCard/>
            <ResumeCard/>
            
        </section>
    )
}
