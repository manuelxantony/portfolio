import { useFormState } from 'react-dom';
import WriteupCard from './cards/writeupCard';
import { writeUps } from '@/app/lib/data';

export default function WriteUps() {
  const onSubmit = () => {
    console.log('button pressed');
  };

  return (
    <div className="mt-5 md:mt-10">
      <h3 className="font-bold">writeups</h3>
      <div className="mt-4 ">
        {writeUps.map((writeup, index) => {
          return (
            <div key={writeup.id}>
              {index == 0 ? ' ' : <div className="border-b bottom-1" />}
              <WriteupCard writeup={writeup} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
