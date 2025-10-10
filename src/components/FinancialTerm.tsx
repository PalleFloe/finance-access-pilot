import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FINANCIAL_GLOSSARY, GlossaryTerm } from "@/lib/glossary";
import { HelpCircle } from "lucide-react";

interface FinancialTermProps {
  term: GlossaryTerm;
  children?: React.ReactNode;
  showIcon?: boolean;
}

/**
 * FinancialTerm component that displays a tooltip with the definition of financial terms
 * 
 * @example
 * <FinancialTerm term="DCF">Discounted Cash Flow</FinancialTerm>
 * <FinancialTerm term="NPV" />
 * <FinancialTerm term="IRR" showIcon />
 */
const FinancialTerm = ({ term, children, showIcon = false }: FinancialTermProps) => {
  const definition = FINANCIAL_GLOSSARY[term];
  
  if (!definition) {
    return <>{children || term}</>;
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <span className="inline-flex items-center gap-1 cursor-help border-b border-dashed border-primary/50 hover:border-primary transition-colors">
            {children || term}
            {showIcon && <HelpCircle className="w-3.5 h-3.5 text-primary/70" />}
          </span>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="max-w-xs bg-slate-900 text-white p-3 text-sm leading-relaxed"
        >
          <p>{definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FinancialTerm;