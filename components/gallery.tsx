import Image from "next/image";

export default function Gallery() {
  return (
    <div className="gallery-container flex col-2 mt-4 mb-4">
      <Image
        src="/front.png" // Replace with the actual path to your first image
        alt="Image 1 description"
        width={300} // Adjust width as needed
        height={300} // Adjust height as needed
        className="mr-2"
      />
      <Image
        src="/back.png" // Replace with the actual path to your second image
        alt="Image 2 description"
        width={300}
        height={300}
      />
    </div>
  );
}
