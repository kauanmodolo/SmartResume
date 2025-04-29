import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./primitive"

type TooltipProps = {
  children: React.ReactNode
  content: string | number | React.ReactNode;
}

export const Tooltip = ({ children, content, ...props }: TooltipProps) => {
  return (
    <TooltipProvider>
  <TooltipRoot delayDuration={300}>
    <TooltipTrigger asChild {...props}>{children}</TooltipTrigger>
    <TooltipContent>
      <p>{content}</p>
    </TooltipContent>
  </TooltipRoot>
</TooltipProvider>

  )
}