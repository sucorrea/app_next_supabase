import Image from 'next/image';

interface LuluCardImageProps {
  image: string;
  name: string;
}

const LuluCardImage = ({ image, name }: LuluCardImageProps) => {
  return (
    <div className="overflow-hidden rounded-md">
      <Image
        src={image}
        width={200}
        height={200}
        alt={name}
        className={
          'aspect-auto h-auto w-auto rounded object-cover shadow-card transition-all hover:scale-105 hover:rounded'
        }
      />
    </div>
  );
};

export default LuluCardImage;
