import image from "../assets/images/pexels-kseniachernaya-3952029.jpg";

export default function HomePage() {
  return (
    <>
      <h1 className="text-5xl text-center p-10">
        Des conseils pour prendre soin de ses plantes d’intérieur
      </h1>

      <div className="flex-shrink-0 p-15">
        <img
          src={image}
          alt="logo-externatic"
          className="h-auto max-w-lg rounded-lg flex items-center mx-auto"
        />
      </div>
    </>
  );
}
