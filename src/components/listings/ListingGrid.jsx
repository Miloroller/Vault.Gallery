import ListingCard from "./ListingCard";

export default function ListingGrid({ listings }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {listings.map((l) => (
        <ListingCard key={l.id} listing={l} />
      ))}
    </div>
  );
}
