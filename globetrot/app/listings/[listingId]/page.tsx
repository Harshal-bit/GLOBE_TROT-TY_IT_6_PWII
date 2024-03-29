
import getCurrentUser from "@/app/common/actions/getCurrentUser";
import getListingById from "@/app/common/actions/getListingById";
import getReservations from "@/app/common/actions/getReservations";

import ClientOnly from "@/app/common/components/ClientOnly";
import EmptyState from "@/app/common/components/EmptyState";

import ListingClient from "./ListingClient";


interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {

  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;
