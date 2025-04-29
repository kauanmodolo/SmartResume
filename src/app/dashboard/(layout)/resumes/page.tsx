import { ResumesList } from "@/components/pages/dashboard/resumes/resumes-list";
import { ResumeListSkeleton } from "@/components/pages/dashboard/resumes/resumes-list/skeleton";
import { Suspense } from "react";

export default function DashboardResumesPage(){
    return(
        <>
        <div>
            <h1 className="text-4xl font-title font-bold mb-6">Currículos</h1>
            
        </div>

        <Suspense fallback={<ResumeListSkeleton/>}>
            <ResumesList/>
        </Suspense>
        </>
    )
}