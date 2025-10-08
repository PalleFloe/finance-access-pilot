import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ModelInfoPanel = () => {
  return (
    <Card className="shadow-lg border-slate-200 lg:h-[240px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-[16px] font-bold text-[#326496]" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
          How to View & Download This Model
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3 text-[12px] leading-relaxed text-slate-600 pb-4 pt-6" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
        <p>
          <span className="font-semibold">"Online & View"</span> for instant browser preview.
        </p>
        
        <div>
          <p>
            <span className="font-semibold">"Register to Download"</span> models. If already registered? Click <span className="font-semibold">"Download & Use"</span> to open in browser.
          </p>
          <p className="mb-0">To download and use: File → Create a Copy → Download a Copy.</p>
        </div>
        
        <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
          <p>Safe Excel files with no macros. Formulas protected, input cells editable.</p>
          <p>Free registration with no spam or promotional emails.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModelInfoPanel;