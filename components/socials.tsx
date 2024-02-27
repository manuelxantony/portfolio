import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

export default function Socials() {
  const openURLInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <div className="flex flex-row justify-between items-center gap-5">
      <button
        onClick={() => {
          openURLInNewTab('https://github.com/manuelxantony');
        }}
      >
        <GitHubLogoIcon />
      </button>
      <button
        onClick={() => {
          openURLInNewTab('https://twitter.com/xmanuelxantony');
        }}
      >
        <TwitterLogoIcon />
      </button>
    </div>
  );
}
