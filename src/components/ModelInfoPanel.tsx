import React from 'react';

const ModelInfoPanel = () => {
  return (
    <div className="bg-slate-50 border border-slate-200 shadow-sm rounded-lg p-6 h-full flex flex-col">
      <h3 className="text-[16px] font-bold text-[#326496] mb-3" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
        How to View & Download This Model
      </h3>
      
      <div className="flex-1 flex flex-col justify-between space-y-2 text-[12px] leading-relaxed" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
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
      </div>
    </div>
  );
};

export default ModelInfoPanel;