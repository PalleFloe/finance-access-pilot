import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Download, Lock } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface DownloadButtonProps {
  sharePointUrl: string;
  modelName: string;
  className?: string;
}

const DownloadButton = ({ sharePointUrl, modelName, className }: DownloadButtonProps) => {
  const { user, trackDownload } = useAuth();
  const { trackDownload: trackAnalyticsDownload } = useAnalytics();
  const navigate = useNavigate();

  const handleDownload = async () => {
    if (!user) {
      // Redirect to auth page if not logged in
      navigate('/auth');
      return;
    }

    // Track the download in both systems
    await trackDownload(modelName);
    await trackAnalyticsDownload(modelName);
    
    // Trigger download in current window
    window.location.href = sharePointUrl;
  };

  return (
    <Button
      onClick={handleDownload}
      variant={user ? "model-blue" : "model-blue"}
      className={`text-lg ${className || ""}`}
    >
      {user ? (
        <>
          <Download className="w-4 h-4 mr-2" />
          Download & Use
        </>
      ) : (
        <>
          <Lock className="w-4 h-4 mr-2" />
          Register to Download
        </>
      )}
    </Button>
  );
};

export default DownloadButton;