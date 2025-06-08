import Link from "next/link";

const mockUrls = [
    "https://mxswmt501i.ufs.sh/f/b93ldhCgBWpCwkk7gebr6dyMWXaIT8RsCLFJx5QlYN2i7q3f",
    "https://mxswmt501i.ufs.sh/f/b93ldhCgBWpCF007v4V20SyRsrzBnWTidNjmMEhLc39PbI4U",
    "https://mxswmt501i.ufs.sh/f/b93ldhCgBWpCjk1i7792ZmHcpERNtxj9AOUsd1yTh5ewQznf"
];

const  mockImage = mockUrls.map((url, index)=>({
    id:index+1,
    url,
}));

export default function HomePage() {
  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
            {[...mockImage, ...mockImage, ...mockImage].map((image)=>(
                <div key={image.id} className="w-48">
                    <img src={image.url} alt="image" />
                </div>
            ))}
        </div>
    </main>
  );
}
