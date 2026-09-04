import type { ProjectKind } from "../data/portfolio";

type ProjectPreviewProps = {
  kind: ProjectKind;
  title: string;
};

const previewImages: Record<ProjectKind, string> = {
  flowdesk: "/projects/flowdesk.webp",
  atlas: "/projects/atlas-finance.webp",
  shopco: "/projects/shop-co.webp",
  servagency: "/projects/servagency.webp",
};

const ProjectPreview = ({ kind, title }: ProjectPreviewProps) => (
  <div className={`project-preview project-preview--${kind}`} aria-label={`${title} visual preview`}>
    <div className="project-preview__noise" aria-hidden="true" />
    <div className="preview-ui preview-ui--image">
      <img className="project-preview__image" src={previewImages[kind]} alt="" loading="lazy" decoding="async" />
    </div>
    <div className="project-preview__chrome">
      <span>LIVE PRODUCT</span>
      <span>{title.toUpperCase()}</span>
    </div>
  </div>
);

export default ProjectPreview;
