type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  body?: string;
};

const SectionHeading = ({ index, label, title, body }: SectionHeadingProps) => (
  <div className="section-heading">
    <div className="section-heading__meta">
      <span>{index}</span>
      <span>{label}</span>
    </div>
    <div className="section-heading__content">
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  </div>
);

export default SectionHeading;
