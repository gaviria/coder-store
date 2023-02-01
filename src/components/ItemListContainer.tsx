type ItemListProps = {
	greeting: string;
};

const ItemListContainer = ({ greeting }: ItemListProps) => {
	return (
		<h2 className="mt-4 text-center text-lg font-bold text-indigo-600">
			{greeting}
		</h2>
	);
};

export default ItemListContainer;
