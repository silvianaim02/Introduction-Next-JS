import './global.css';
import GithubCorner from '@/components/github-corner/GithubCorner';

export const metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
  metadataBase: new URL('https://nextgram.vercel.app'),
};

export default function Layout(props) {
  return (
    <div>
      <GithubCorner />
      {props.children}
      {props.modal}
    </div>
  );
}
