import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ModelInfoPanel = () => {
  return (
    <Card className="shadow-lg border-slate-200 lg:h-[275px]">
      <CardHeader>
        <CardTitle className="text-[16px] font-bold text-[#326496]" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
          How to View & Download This Model
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-2 text-[12px] leading-relaxed" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
        <p>
          <span className="font-semibold">Online & View:</span> Instant browser preview - no registration needed.
        </p>
        
        <div>
          <p className="font-semibold">Register to Download:</p>
          <p>Click for free access to all models.</p>
          <p>Already registered? Click "Download & Use" to view in browser.</p>
        </div>
        
        <p>
          <span className="font-semibold">Download & Own:</span> Coming soon - full ownership rights for purchased models.
        </p>
        
        <div>
          <p className="font-semibold mb-0">To download:</p>
          <p>In toolbar select File → Create a Copy → Download a Copy</p>
          <p>Open in Excel for your own use. All models are free.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModelInfoPanel;