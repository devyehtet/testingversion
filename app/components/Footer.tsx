import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent z-50 flex justify-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="relative w-[728px] h-[90px] overflow-hidden">
            <Image
              src="/images/Footer.jpg"
              alt="Footer with organization logos"
              width={728}
              height={90}
              className="object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
