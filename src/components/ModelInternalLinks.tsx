import { Link } from "react-router-dom";

interface RelatedModel {
  name: string;
  url: string;
}

interface ModelInternalLinksProps {
  categoryName: string;
  categoryUrl: string;
  relatedModels: RelatedModel[];
}

const ModelInternalLinks = ({ categoryName, categoryUrl, relatedModels }: ModelInternalLinksProps) => {
  return (
    <div className="mt-12 space-y-6">
      <div className="text-lg text-slate-700">
        <strong>Explore more tools in this category:</strong>{" "}
        <Link 
          to={categoryUrl} 
          className="underline text-brand-blue hover:text-brand-blue/80 transition-colors"
        >
          {categoryName}
        </Link>
      </div>

      {relatedModels.length > 0 && (
        <div className="text-lg text-slate-700">
          <strong>Related models:</strong>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            {relatedModels.map((model) => (
              <li key={model.url}>
                <Link 
                  to={model.url} 
                  className="underline text-brand-blue hover:text-brand-blue/80 transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModelInternalLinks;
