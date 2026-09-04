import type { ProjectKind } from "../data/portfolio";

type ProjectPreviewProps = {
  kind: ProjectKind;
  title: string;
};

const FlowDeskPreview = () => (
  <div className="preview-ui preview-ui--flowdesk">
    <div className="preview-sidebar">
      <i className="preview-logo" />
      <span />
      <span />
      <span />
      <span />
    </div>
    <div className="preview-workspace">
      <div className="preview-topbar"><span /><span /></div>
      <div className="preview-columns">
        {[0, 1, 2].map((column) => (
          <div className="preview-column" key={column}>
            <b />
            <span /><span /><span />
          </div>
        ))}
      </div>
      <div className="preview-flow">
        <i /><em /><i /><em /><i />
      </div>
    </div>
  </div>
);

const AtlasPreview = () => (
  <div className="preview-ui preview-ui--atlas">
    <div className="atlas-head"><span /><b /></div>
    <div className="atlas-grid">
      <div className="atlas-chart">
        <div className="atlas-line" />
        {[18, 44, 31, 68, 54, 78, 66, 88].map((height, index) => (
          <i key={index} style={{ height: `${height}%` }} />
        ))}
      </div>
      <div className="atlas-health">
        <div className="atlas-ring"><span>AI</span></div>
        <b />
        <b />
        <b />
      </div>
    </div>
    <div className="atlas-ledger"><span /><span /><span /><span /></div>
  </div>
);

const ShopPreview = () => (
  <div className="preview-ui preview-ui--shop">
    <div className="shop-wordmark">SHOP.CO</div>
    <div className="shop-editorial">
      <div className="shop-model"><span /></div>
      <div className="shop-copy">
        <small>ARCHIVE / 03</small>
        <strong>FASHION<br />IN MOTION</strong>
        <p>EDITORIAL COMMERCE</p>
      </div>
    </div>
    <div className="shop-footer"><span>NEW DROP</span><span>EXPLORE →</span></div>
  </div>
);

const AgencyPreview = () => (
  <div className="preview-ui preview-ui--agency">
    <div className="agency-head"><span>SERVAGENCY</span><small>PROBLEM → SOLUTION</small></div>
    <div className="agency-statement">Digital systems<br />for real businesses.</div>
    <div className="agency-network">
      <i /><span /><i /><span /><i /><span /><i />
    </div>
    <div className="agency-list"><b>WEB</b><b>AUTOMATION</b><b>SEO</b><b>PRODUCT</b></div>
  </div>
);

const ProjectPreview = ({ kind, title }: ProjectPreviewProps) => (
  <div className={`project-preview project-preview--${kind}`} aria-label={`${title} visual preview`}>
    <div className="project-preview__noise" aria-hidden="true" />
    {kind === "flowdesk" ? <FlowDeskPreview /> : null}
    {kind === "atlas" ? <AtlasPreview /> : null}
    {kind === "shopco" ? <ShopPreview /> : null}
    {kind === "servagency" ? <AgencyPreview /> : null}
    <div className="project-preview__chrome">
      <span>LIVE PRODUCT</span>
      <span>{title.toUpperCase()}</span>
    </div>
  </div>
);

export default ProjectPreview;
