import Container from "@/app/common/components/layout/Container";

import EmptyState from "@/app/common/components/layout/EmptyState";

import getListings, { IListingsParams } from "@/app/common/actions/getListings";
import getCurrentUser from "@/app/common/actions/getCurrentUser";

interface HomeProps {
  searchParams: IListingsParams
};

const Home = async ({ searchParams }: HomeProps) => {
  
  const currentUser = await getCurrentUser();

  

  return (
    <Container>
      <div 
        className="
          pt-52
          pb-20
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
      </div>
    </Container>
  )
}

export default Home;
