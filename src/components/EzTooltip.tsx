import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip } from "./ui/tooltip";

export function EzTooltip({
  children,
  content,
  className
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}) {
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipContent className={className}>{content}</TooltipContent>
        </Tooltip>
    </TooltipProvider>
  );
    
}