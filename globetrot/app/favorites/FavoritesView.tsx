import { Listing, User } from "@prisma/client";

import Heading from "@/app/common/components/Heading";
import Container from "@/app/common/components/layout/Container";
import ListingCard from "@/app/common/components/listing/ListingCard";

interface FavoritesViewProps {
  listings: Listing[],
  currentUser?: User
}

const FavoritesView: React.FC<FavoritesViewProps> = ({
  listings,
  currentUser
}) => {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of places you favorited!"
      />
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default FavoritesView;