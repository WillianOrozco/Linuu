export default function ProductCard({
    image,
    title,
    price,
}: {
    image: string;
    title: string;
    price: number;
}) {
    return (
        <div className="inline-block w-auto mr-4 rounded shadow border border-gray-300 p-2">
            <img src={image} className="w-48 h-48 object-cover" />
            <div className="p-3 border-t border-gray-300">
                <h1 className="text-black font-bold">{title}</h1>
                <p className="text-lg text-red-600 font-bold">${price} <label className="text-xs text-gray-400">+4K ventas</label></p>
                <p className="text-lg text-yellow-400 font-bold">★ ★ ★ ☆ ☆</p>
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    Comprar
                </button>
            </div>
        </div>
    );
}
