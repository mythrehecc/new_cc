interface ImageHeadingProps {
  imageUrl: string;
  headingText: string;
}

export default function ImageHeading({ imageUrl, headingText }: ImageHeadingProps) {
  return (
    <div className="relative w-full py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src={imageUrl}
            alt={headingText}
            className="w-full max-w-4xl mx-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}
