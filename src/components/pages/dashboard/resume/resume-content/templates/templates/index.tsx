import { useMemo } from "react";
import { Quartzo } from "./quartzo";
import { Safira } from "./safira";
import { Morganita } from "./morganita";
import { Turquesa } from "./turquesa";

export type BaseResumeProps = {
  data: ResumeData;
};

type ResumeTemplateProps = {
  data: ResumeData;
};

const templatesMap: Record<ResumeTemplates, React.FC<BaseResumeProps>> = {
  quartzo: Quartzo,
  safira: Safira,
  morganita: Morganita,
  turquesa: Turquesa,
};

export const ResumeTemplate = ({ data }: ResumeTemplateProps) => {
  const template = data.structure.template;

  const Resume = useMemo(() => {
    return templatesMap[template];
  }, [template]);

  return (
    <div
      id="resume-content"
      className="w-[210mm] min-h-[297mm] bg-white text-black font-arial [&_hr]:border-black"
    >
      <Resume data={data} />
    </div>
  );
};
