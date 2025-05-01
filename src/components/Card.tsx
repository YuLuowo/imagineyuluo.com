interface CardProps {
    imageSrc: string;
    title: string;
    className?: string;
}

export default function Card({ imageSrc, title, className }: CardProps) {
    return (
        <div className="flex gap-6 bg-black/10 backdrop-blur-sm border border-gray-800 rounded-lg p-3 hover:cursor-pointer hover:bg-white/5">
            <img
                src={imageSrc}
                alt={`${title} logo`}
                className={`w-8 h-8 ${className} `}
            />
            <span className="text-base md:text-lg font-semibold">{title}</span>
        </div>
    );
}
