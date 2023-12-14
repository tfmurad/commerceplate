import DynamicIcon from "@/helpers/DynamicIcon";

export interface ISocial {
  name: string;
  icon: string;
  link: string;
}

const Social: React.FC<{ source: ISocial[]; className: string }> = ({
  source,
  className,
}: {
  source: ISocial[];
  className: string;
}) => {
  return (
    <ul className={className}>
      {source.map((social) => (
        <li key={social.name}>
          <a
            aria-label={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <span className="sr-only">{social.name}</span>
            <DynamicIcon className="inline-block" icon={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
