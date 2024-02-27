import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

import { openURLInNewTab } from '@/app/lib/utils';

export default function Socials() {
  return (
    <div className="flex flex-row justify-between items-center gap-5">
      <button
        onClick={() => {
          openURLInNewTab('https://github.com/manuelxantony?tab=repositories');
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
