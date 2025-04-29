import { Skeleton } from "@/components/ui/skeleton"

export const ResumeListSkeleton = () => {
    return(
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 20 }).map((_, index) => (
                <Skeleton
                key={`resume-skeleton-${index}`}
                className="w-full h-[300px]"/>
            ))}            
        </section>
    )}