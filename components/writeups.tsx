import { useFormState } from 'react-dom';
import WriteupCard from './cards/writeupCard';
import { Writeup } from '@/app/lib/definitions';

export default function WriteUps() {
  const writeUps: Writeup[] = [
    {
      id: '1',
      title: 'why hooks?!',
      date: '27-02-2024',
    },
    {
      id: '2',
      title: 'using app router',
      date: '29-02-2024',
    },
    {
      id: '3',
      title: 'image rendering in next',
      date: '01-03-2024',
    },
    {
      id: '4',
      title: 'sample post',
      date: '28-02-2024',
    },
    {
      id: '5',
      title: 'sample post',
      date: '28-02-2024',
    },
    {
      id: '6',
      title: 'sample post',
      date: '28-02-2024',
    },
    {
      id: '7',
      title: 'sample post',
      date: '28-02-2024',
    },
  ];

  const onSubmit = () => {
    console.log('button pressed');
  };

  return (
    <div className="mt-5 md:mt-10">
      <h3 className="font-bold">writeups</h3>
      <div className="mt-4 ">
        {writeUps.map((writeup) => {
          return <WriteupCard key={writeup.id} writeup={writeup} />;
        })}
      </div>
    </div>
  );
}
